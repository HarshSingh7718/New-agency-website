export default function Approach() {
  return (
    <section className="rg-apart" id="approach" aria-labelledby="apart-h">
      <div className="container">
        <div className="rg-apart__top reveal">
          <span className="rg-apart__label">What sets us apart</span>
          <span className="rg-apart__count" aria-hidden={true}>
            04 <span>Steps</span>
          </span>
        </div>
        <h2 className="rg-apart__title reveal" id="apart-h">
          What truly sets us
          <span className="accent">apart from the rest.</span>
        </h2>
        <div
          className="rg-apart__track reveal"
          role="tablist"
          aria-label="Our process steps"
        >
          <div className="rg-apart__line" aria-hidden={true}></div>
          <div className="rg-apart__dots">
            <button
              type="button"
              className="rg-apart__dot is-active"
              role="tab"
              aria-selected="true"
              aria-controls="apart-step-1"
              id="apart-tab-1"
              data-step="0"
            >
              1
            </button>
            <button
              type="button"
              className="rg-apart__dot"
              role="tab"
              aria-selected="false"
              aria-controls="apart-step-2"
              id="apart-tab-2"
              data-step="1"
            >
              2
            </button>
            <button
              type="button"
              className="rg-apart__dot"
              role="tab"
              aria-selected="false"
              aria-controls="apart-step-3"
              id="apart-tab-3"
              data-step="2"
            >
              3
            </button>
            <button
              type="button"
              className="rg-apart__dot"
              role="tab"
              aria-selected="false"
              aria-controls="apart-step-4"
              id="apart-tab-4"
              data-step="3"
            >
              4
            </button>
          </div>
        </div>
        <div className="rg-apart__grid reveal">
          <article
            className="rg-apart__step is-active"
            id="apart-step-1"
            role="tabpanel"
            aria-labelledby="apart-tab-1"
          >
            <h3>
              <em>01.</em> Search-first thinking
            </h3>
            <p>
              Every build starts with how it will be found. We plan structure,
              speed, and content for search visibility from day one.
            </p>
          </article>
          <article
            className="rg-apart__step"
            id="apart-step-2"
            role="tabpanel"
            aria-labelledby="apart-tab-2"
          >
            <h3>
              <em>02.</em> Fast &amp; effective delivery
            </h3>
            <p>
              Weekly demos and a fixed, itemized quote. You see progress every
              week and never meet a surprise invoice.
            </p>
          </article>
          <article
            className="rg-apart__step"
            id="apart-step-3"
            role="tabpanel"
            aria-labelledby="apart-tab-3"
          >
            <h3>
              <em>03.</em> One holistic team
            </h3>
            <p>
              Design, development, SEO, and automation under one roof—no handoff
              friction between agencies.
            </p>
          </article>
          <article
            className="rg-apart__step"
            id="apart-step-4"
            role="tabpanel"
            aria-labelledby="apart-tab-4"
          >
            <h3>
              <em>04.</em> Fair &amp; flexible pricing
            </h3>
            <p>
              Budget-friendly work scoped to fit, from a single landing page to
              a full digital marketing system.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
