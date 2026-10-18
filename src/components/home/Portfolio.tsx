import StackingCards, {type ProjectData} from "@/components/ui/stacking-card";
import type {Project} from "@/sanity/lib/types";

type Heading = {title: string; accentTitle?: string; description?: string};
export default function Portfolio({heading, projects, cta}: {heading: Heading; projects: Project[]; cta: {label: string; href: string}}) {
  const cards: ProjectData[] = projects.map((project) => ({
    title: project.title, description: project.description, link: project.url,
    image: project.image?.url || "", color: project.cardColor, accentColor: project.accentColor,
    textOnDark: project.textOnDark, tag: project.tag,
  }));
  return (
    <section className="rg-portfolio relative" id="work" aria-labelledby="work-h">
      <div className="container relative z-20 md:pt-16">
        <div className="rg-portfolio__head reveal">
          <h2 id="work-h">{heading.title} {heading.accentTitle && <span className="serif">{heading.accentTitle}</span>}</h2>
          {heading.description && <p className="body-text text-center mx-auto max-w-[680px]" style={{color: "var(--c-body)"}}>{heading.description}</p>}
        </div>
      </div>
      <div className="mt-18! md:mt-[-4vh] lg:mt-[-8vh]"><StackingCards projects={cards} /></div>
      <div className="container pb-5 relative z-20 mt-[5vh]! lg:mt-[-50vh]"><div className="rg-portfolio__foot reveal"><a className="btn dark" href={cta.href} data-magnetic>{cta.label}<span className="arrow">↗</span></a></div></div>
    </section>
  );
}
