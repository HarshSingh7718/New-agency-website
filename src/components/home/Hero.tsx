
export default function Hero() {
  return (
    <div className="hero-band">
      <section className="hero" aria-label="Introduction">
        <canvas className="hero-smoke" aria-hidden={true}></canvas>{" "}
        <div className="inner">
          <span className="eyebrow">Dehradun, India. Working worldwide.</span>{" "}
          <h1 className="title">
            We accelerate growth
            <br />
            for <span className="serif">moderns brand.</span>
          </h1>{" "}
          <div className="row">
            <a className="btn dark" href="/contact" data-magnetic>
              Start your project <span className="arrow">↗</span>
            </a>{" "}
            <p>
              Rapidgrodigital is an AI consultancy helping businesses automate,
              innovate, and scale with intelligent technology solutions.
              Rapidgrodigital is your trusted AI consulting partner, delivering
              smart automation and custom AI solutions for modern businesses.
            </p>{" "}
          </div>
        </div>
      </section>
      <div className="ribbon overlap" aria-hidden={true}>
        <div className="track">
          <span className="marquee" data-marquee-clone>
            <span className="group">
              WordPress <span className="sep">✦</span> Shopify{" "}
              <span className="sep">✦</span> Custom SaaS{" "}
              <span className="sep">✦</span> React &amp; Next.js{" "}
              <span className="sep">✦</span> SEO <span className="sep">✦</span>{" "}
              Social Marketing <span className="sep">✦</span> Social Media{" "}
              <span className="sep">✦</span> WooCommerce{" "}
              <span className="sep">✦</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
