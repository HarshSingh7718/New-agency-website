import {createReadStream, existsSync} from "node:fs";
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import {createClient} from "next-sanity";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1ktaw25p";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!token) {
  throw new Error("A Sanity user session or SANITY_API_WRITE_TOKEN is required.");
}

const client = createClient({projectId, dataset, token, apiVersion: "2026-10-17", useCdn: false});

async function logo(name, relativePath, alt, backgroundColor) {
  const localPath = join(root, "public", relativePath);
  if (!existsSync(localPath)) throw new Error(`Missing client logo asset: ${localPath}`);

  const filename = relativePath.replace(/[\\/]/g, "-");
  const existingAsset = await client.fetch(
    `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]`,
    {filename},
  );
  const asset = existingAsset || await client.assets.upload("image", createReadStream(localPath), {filename});

  return {
    _key: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    _type: "clientLogo",
    name,
    logo: {_type: "image", asset: {_type: "reference", _ref: asset._id}, alt},
    backgroundColor,
  };
}

const clientLogos = await Promise.all([
  logo("Opal Traders", "images/partners/image.png", "Opal Traders logo", "#F4F0F7"),
  logo("Physics Wallah", "images/partners/image copy.png", "Physics Wallah logo", "#140820"),
  logo("BE", "images/partners/be.png", "BE logo", "#FEFFFF"),
  logo("Navriti Store", "images/partners/navriti-store.png", "Navriti Store logo", "#712468"),
  logo("Ima Albhani Frames", "images/partners/imaalbhani-frames.png", "Ima Albhani Frames logo", "#EEF1EA"),
  logo("Invester Guider", "images/partners/invester-guider.png", "Invester Guider logo", "#000000"),
]);
const clientLogosSection = {
  eyebrow: "Our clients",
  title: "Trusted by brands built for",
  accentTitle: "what's next.",
  description: "We partner with ambitious companies across industries to create digital experiences that drive meaningful growth.",
};

const homePages = await client.fetch(`*[_type == "homePage"]{_id, clientLogos[]{_key}}`);

for (const page of homePages) {
  const patch = client.patch(page._id).setIfMissing({clientLogosSection});
  const existingKeys = new Set(page.clientLogos?.map((item) => item._key) ?? []);
  const seededKeys = new Set(clientLogos.map((item) => item._key));
  const missingLogos = clientLogos.filter((item) => !existingKeys.has(item._key));

  if (!page.clientLogos?.length) {
    patch.set({clientLogos});
  } else if (missingLogos.length > 0) {
    patch.append("clientLogos", missingLogos);
  }

  const cropPaths = page.clientLogos
    ?.filter((item) => seededKeys.has(item._key))
    .map((item) => `clientLogos[_key=="${item._key}"].logo.crop`) ?? [];

  if (cropPaths.length > 0) patch.unset(cropPaths);

  await patch.commit();
}

console.log(`Ensured full-frame client logos on ${homePages.length} home page document(s).`);
