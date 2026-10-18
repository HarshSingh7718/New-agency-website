import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";
import type {ClientLogo, SectionHeading} from "@/sanity/lib/types";

const MINIMUM_TILES_PER_GROUP = 24;

function createLoopItems<T>(logos: T[]) {
  const count = Math.max(logos.length, MINIMUM_TILES_PER_GROUP);

  return Array.from({length: count}, (_, index) => ({
    instance: index,
    logo: logos[index % logos.length],
  }));
}

export default function Partners({heading, logos}: {heading?: SectionHeading; logos: ClientLogo[]}) {
  if (logos.length === 0) return null;

  const preparedLogos = logos.map((logo) => ({
    ...logo,
    imageUrl: logo.logo
      ? urlFor(logo.logo).ignoreImageParams().width(440).auto("format").url()
      : null,
  }));
  const loopItems = createLoopItems(preparedLogos);
  const duration = `${Math.round(Math.max(36, loopItems.length * 1.6))}s`;

  return (
    <section className="client-logo-section" id="clients" aria-labelledby={heading?.title ? "clients-heading" : undefined} aria-label={heading?.title ? undefined : "Companies we have worked with"}>
      {heading?.title && (
        <div className="container">
          <div className="client-logo-header reveal">
            {heading.eyebrow && <span className="eyebrow">{heading.eyebrow}</span>}
            <h2 id="clients-heading">{heading.title} {heading.accentTitle && <span className="serif">{heading.accentTitle}</span>}</h2>
            {heading.description && <p>{heading.description}</p>}
          </div>
        </div>
      )}
      <div className="client-logo-strip">
        <ul className="sr-only">
          {logos.map((item) => <li key={item._key}>{item.name}</li>)}
        </ul>
        <div className="client-logo-track" style={{animationDuration: duration}} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="client-logo-group" key={copy}>
              {loopItems.map(({instance, logo}) => (
                <div
                  className="client-logo-card"
                  style={{backgroundColor: logo.backgroundColor}}
                  key={`${copy}-${logo._key}-${instance}`}
                >
                  {logo.imageUrl && (
                    <div className="client-logo-media">
                      <Image
                        className="client-logo-image"
                        src={logo.imageUrl}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 114px, 176px"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
