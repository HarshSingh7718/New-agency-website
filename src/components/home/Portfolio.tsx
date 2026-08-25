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
          <p  className="body-text text-center mx-auto max-w-[680px]"
            style={{ color: "var(--c-body)" }}>
            Explore high-impact web, ecommerce, and SaaS solutions we've
            delivered for brands across industries.
          </p>
        </div>
        <div className="rg-portfolio__grid">
          <a
            className="rg-portfolio__card reveal is-ext"
            href="https://bigfatmarketing.in"
            target="_blank"
            rel="noopener"
            aria-label="Big Fat Marketing — Marketing Agency"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/big-fat-marketing-agency-website-design-1.png"
                alt="Big Fat Marketing project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Big Fat Marketing</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Big Fat Marketing</h3>
              <span className="rg-portfolio__tag">Marketing Agency</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal is-ext"
            href="https://blueinberry.com"
            target="_blank"
            rel="noopener"
            aria-label="Blue In Berry — Food &amp; Hospitality"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/blue-in-berry-ice-cream-website-design.png"
                alt="Blue In Berry project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Blue In Berry</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Blue In Berry</h3>
              <span className="rg-portfolio__tag">Food &amp; Hospitality</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal"
            href="#"
            aria-label="Lumitec Consulting — Corporate Consulting"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/lumitec-consulting-website-design.png"
                alt="Lumitec Consulting project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Lumitec Consulting</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Lumitec Consulting</h3>
              <span className="rg-portfolio__tag">Corporate Consulting</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal"
            href="#"
            aria-label="Derma Energy — Ecommerce"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/derma-energy-skincare-ecommerce-website-design.png"
                alt="Derma Energy project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Derma Energy</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Derma Energy</h3>
              <span className="rg-portfolio__tag">Ecommerce</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal"
            href="#"
            aria-label="One Bill — Fintech App"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/one-bill.webp"
                alt="One Bill project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">One Bill</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>One Bill</h3>
              <span className="rg-portfolio__tag">Fintech App</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal"
            href="#"
            aria-label="Faceluxe — Beauty &amp; Retail"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/faceluxe.webp"
                alt="Faceluxe project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Faceluxe</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Faceluxe</h3>
              <span className="rg-portfolio__tag">Beauty &amp; Retail</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal"
            href="#"
            aria-label="BuddyGo — Mobile App"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/buddygo.webp"
                alt="BuddyGo project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">BuddyGo</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>BuddyGo</h3>
              <span className="rg-portfolio__tag">Mobile App</span>
            </div>
          </a>

          <a
            className="rg-portfolio__card reveal"
            href="#"
            aria-label="Uni Web Apps — SaaS Platform"
          >
            <div className="rg-portfolio__scene">
              <Image
                src="/images/portfolio/uni-web-apps.webp"
                alt="Uni Web Apps project preview"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              ></Image>
            </div>
            <span className="rg-portfolio__brand">Uni Web Apps</span>
            <div className="rg-portfolio__hover">
              <span className="rg-portfolio__icon" aria-hidden={true}>
                ↗
              </span>
              <h3>Uni Web Apps</h3>
              <span className="rg-portfolio__tag">SaaS Platform</span>
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
