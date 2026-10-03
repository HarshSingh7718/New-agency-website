import StackingCards, { ProjectData } from "@/components/ui/stacking-card";

const projects: ProjectData[] = [
  {
    title: "MedIntel AI Platform",
    description: "A cutting-edge Healthcare AI platform transforming medical data into actionable insights, improving patient outcomes and streamlining clinical workflows with intelligent automation.",
    link: "https://med-intel-ai-16.vercel.app/",
    image: "/images/portfolio/med-intel.png",
    color: "#0f0a1e",
    accentColor: "#FF4DB8",
    textOnDark: true,
    tag: "Healthcare · AI"
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
    title: "Lumitec Consulting",
    description: "A high-conversion consulting website built with premium design principles — clean architecture, powerful CMS, and strategic UX that drives qualified leads.",
    link: "#",
    image: "/images/portfolio/lumitec-consulting-website-design.png",
    color: "#0f0a1e",
    accentColor: "#E91E8C",
    textOnDark: true,
    tag: "Consulting · Branding"
  },
  {
    title: "Derma Energy Skincare",
    description: "A premium e-commerce experience for a skincare brand, featuring immersive product pages, seamless checkout, and a design language that communicates trust and luxury.",
    link: "#",
    image: "/images/portfolio/derma-energy-skincare-ecommerce-website-design.png",
    color: "#1c0b2e",
    accentColor: "#FF4DB8",
    textOnDark: true,
    tag: "Ecommerce · Design"
  }
];

export default function Portfolio() {
  return (
    <section className="rg-portfolio relative" id="work" aria-labelledby="work-h">
      <div className="container relative z-20 pt-16">
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

      <div className="mt-[-4vh] lg:mt-[-8vh]">
        <StackingCards projects={projects} />
      </div>

      <div className="container pb-24 relative z-20 mt-[-35vh] lg:mt-[-50vh]">
        <div className="rg-portfolio__foot reveal">
          <a className="btn dark" href="/contact" data-magnetic>
            Start your project <span className="arrow">&#x2197;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
