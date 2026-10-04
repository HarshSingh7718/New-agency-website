import StackingCards, { ProjectData } from "@/components/ui/stacking-card";

const projects: ProjectData[] = [
  {
    title: "Lunara Home Decor",
    description: "A beautifully crafted e-commerce platform for modern living. Features seamless shopping for thoughtful decor and timeless comfort, designed to transform houses into beautiful homes.",
    link: "#",
    image: "/images/portfolio/lunara.jpg",
    color: "#0f0a1e",
    accentColor: "#E91E8C",
    textOnDark: true,
    tag: "Ecommerce · Home Decor"
  },
  {
    title: "Physics Wallah",
    description: "An innovative EdTech platform delivering high-quality, accessible education. We built scalable web solutions to support millions of concurrent students across India.",
    link: "https://www.physicswallah.in/",
    image: "/images/portfolio/physics-wallah.png",
    color: "#1c0b2e",
    accentColor: "#FF4DB8",
    textOnDark: true,
    tag: "EdTech · Web"
  },
  {
    title: "Velora Jewellery",
    description: "A premium, elegant e-commerce experience for minimal and meaningful jewelry. Showcases timeless designs with a luxurious user interface and a smooth, engaging buying journey.",
    link: "#",
    image: "/images/portfolio/velora.jpg",
    color: "#0f0a1e",
    accentColor: "#E91E8C",
    textOnDark: true,
    tag: "Ecommerce · Jewelry"
  },
  {
    title: "Northwave Gear",
    description: "A rugged, high-performance outdoor gear store built for real adventurers. The platform highlights durable and lightweight products with an immersive, conversion-focused design.",
    link: "#",
    image: "/images/portfolio/northwave.jpg",
    color: "#1c0b2e",
    accentColor: "#FF4DB8",
    textOnDark: true,
    tag: "Ecommerce · Outdoor Gear"
  }
];

export default function Portfolio() {
  return (
    <section className="rg-portfolio relative" id="work" aria-labelledby="work-h">
      <div className="container relative z-20 md:pt-16">
        <div className="rg-portfolio__head reveal">
          <h2 id="work-h">
            Our success stories showcasing{" "}
            <span className="serif">innovation in action.</span>
          </h2>
          <p
            className="body-text text-center mx-auto max-w-[680px]"
            style={{ color: "var(--c-body)" }}
          >
            Explore high-impact web, ecommerce, and SaaS solutions we&apos;ve
            delivered for brands across industries.
          </p>
        </div>
      </div>

      <div className="mt-18! md:mt-[-4vh] lg:mt-[-8vh]">
        <StackingCards projects={projects} />
      </div>

      <div className="container pb-5 relative z-20 mt-[5vh]! lg:mt-[-50vh]">
        <div className="rg-portfolio__foot reveal">
          <a className="btn dark" href="/contact" data-magnetic>
            Start your project <span className="arrow">&#x2197;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
