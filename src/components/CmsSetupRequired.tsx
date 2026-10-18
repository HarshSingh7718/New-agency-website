export default function CmsSetupRequired({documentName}: {documentName?: string}) {
  return (
    <main className="min-h-screen grid place-items-center bg-[#140820] px-6 text-white">
      <section className="max-w-xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff4db8]">Content setup required</p>
        <h1 className="mb-4 text-4xl font-bold">Connect and populate Sanity CMS</h1>
        <p className="mb-8 text-white/75">
          {documentName
            ? "The " + documentName + " document has not been published yet."
            : "The Sanity project environment variables are not configured."}
        </p>
      </section>
    </main>
  );
}
