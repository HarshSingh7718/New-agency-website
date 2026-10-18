type Step = {_key?: string; title: string; description: string};

export default function Approach({content}: {content: {eyebrow: string; title: string; accentTitle: string; steps: Step[]}}) {
  return (
    <section className="rg-apart" id="approach" aria-labelledby="apart-h">
      <div className="container">
        <div className="rg-apart__top reveal"><span className="rg-apart__label">{content.eyebrow}</span><span className="rg-apart__count" aria-hidden="true">{String(content.steps.length).padStart(2, "0")} <span>Steps</span></span></div>
        <h2 className="heading mb-12 reveal" id="apart-h">{content.title}<br /><span className="serif">{content.accentTitle}</span></h2>
        <div className="rg-apart__track reveal" role="tablist" aria-label={content.eyebrow}>
          <div className="rg-apart__line" aria-hidden="true"></div>
          <div className="rg-apart__dots">{content.steps.map((step, index) => <button key={step._key || step.title} type="button" className={`rg-apart__dot ${index === 0 ? "is-active" : ""}`} role="tab" aria-selected={index === 0} aria-controls={`apart-step-${index + 1}`} id={`apart-tab-${index + 1}`} data-step={index}>{index + 1}</button>)}</div>
        </div>
        <div className="rg-apart__grid reveal">
          {content.steps.map((step, index) => (
            <article key={step._key || step.title} className={`rg-apart__step ${index === 0 ? "is-active" : ""}`} id={`apart-step-${index + 1}`} role="tabpanel" aria-labelledby={`apart-tab-${index + 1}`}>
              <h3><em>{String(index + 1).padStart(2, "0")}.</em> {step.title}</h3><p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
