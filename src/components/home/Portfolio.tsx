import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="rg-portfolio" id="work" aria-labelledby="work-h">
      <div className="container">
        <div className="rg-portfolio__head reveal">
          <h2 id="work-h">
            Our success stories showcasing{" "}
            <span className="serif">innovation in action.</span>
          </h2>
          <p className="body-text text-center mx-auto max-w-[680px]"
            style={{ color: "var(--c-body)" }}>
            Explore high-impact web, ecommerce, and SaaS solutions we've
            delivered for brands across industries.
          </p>
        </div>
        <div className="rg-portfolio__grid">
          <a
            className="rg-portfolio__card reveal is-ext"
            href="https://med-intel-ai-16.vercel.app/"
            target="_blank"
            rel="noopener"
            aria-label="MedIntel — Healthcare AI"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/med-intel.png"
                alt="MedIntel project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">MedIntel</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>MedIntel</h3>
              <span className="rg-portfolio__tag">Healthcare AI</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal is-ext"
            href="https://www.physicswallah.in/?m=1"
            target="_blank"
            rel="noopener"
            aria-label="Physics Wallah — Education"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/physics-wallah.png"
                alt="Physics Wallah project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Physics Wallah</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Physics Wallah</h3>
              <span className="rg-portfolio__tag">Education</span>
            </div>
          </a>
          </div>
        <div className="rg-portfolio__foot reveal">
          <a className="btn dark" href="#" data-magnetic>
            View all projects <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}






        
