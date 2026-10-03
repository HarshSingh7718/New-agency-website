import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-band">
      <section className="hero" aria-label="Introduction">
        <canvas className="hero-smoke" aria-hidden={true}></canvas>{" "}

        {/* Sticky Social Media Sidebar */}
        <div style={{
          position: "fixed",
          left: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          zIndex: 50,
        }}>
          {[
            { href: "https://facebook.com", label: "Facebook", id: "fb", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="black" /> },
            { href: "https://twitter.com", label: "Twitter", id: "tw", svg: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="black" /> },
            { href: "https://linkedin.com", label: "LinkedIn", id: "in", svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="black" /><circle cx="4" cy="4" r="2" fill="black" /></> },
            { href: "https://instagram.com", label: "Instagram", id: "ig", svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="black" strokeWidth="2.5" fill="none" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="black" strokeWidth="2.5" fill="none" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" /></> },
            { href: "https://youtube.com", label: "YouTube", id: "yt", svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="black" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></> },
          ].map(({ href, label, id, svg }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-110"
              style={{
                width: "44px",
                height: "44px",
                display: "block",
                transition: "transform 0.25s ease",
              }}
            >
              <svg width="44" height="44" viewBox="0 0 44 44">
                <defs>
                  <mask id={`mask-${id}`}>
                    <rect width="44" height="44" fill="white" />
                    <g transform="translate(10, 10)">
                      {svg}
                    </g>
                  </mask>
                </defs>
                <circle 
                  cx="22" cy="22" r="22" 
                  mask={`url(#mask-${id})`} 
                  className="fill-[#9e9e9e] transition-colors duration-300 group-hover:fill-[#E91E8C]"
                />
              </svg>
            </a>
          ))}
        </div>

        <div className="inner">
          <span className="eyebrow">Dehradun, India. Working worldwide.</span>{" "}
          <h1 className="title">
            We accelerate growth
            <br />
            for <span className="serif">modern brands.</span>
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
