import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

export default function FAQ() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-h">
      <div className="faq-container">
        <div className="faq-intro reveal">
          <span className="eyebrow">Common questions</span>
          <h2 className="faq-heading" id="faq-h">
            Frequently <span className="serif">asked questions.</span>
          </h2>
          <p className="faq-sub">
            We believe in total transparency. Here is everything you need to
            know about our process, delivery timelines, pricing, and how we work
            together.
          </p>
          <div className="faq-help-box">
            <span className="faq-help-box__title">Have another question?</span>
            <a href="/contact" className="faq-help-box__link">
              Talk with our team <ArrowUpRight></ArrowUpRight>
            </a>
          </div>
        </div>

        <div className="faq-accordion-list reveal">
          <article className="faq-item">
            <button
              className="faq-item__header"
              type="button"
              aria-expanded={false}
            >
              <span className="faq-item__num">01</span>
              <h3 className="faq-item__question">
                How long does a project usually take?
              </h3>
              <span className="faq-item__btn" aria-hidden={true}>
                <Plus></Plus>
              </span>
            </button>
            <div className="faq-item__body">
              <p className="faq-item__answer">
                Most custom WordPress, Shopify, and marketing website builds
                launch in 2 to 4 weeks. Full SaaS web applications and complex
                ecommerce platforms typically take 4 to 8 weeks with weekly
                milestone demos and continuous communication.
              </p>
            </div>
          </article>

          <article className="faq-item is-open">
            <button
              className="faq-item__header"
              type="button"
              aria-expanded={true}
            >
              <span className="faq-item__num">02</span>
              <h3 className="faq-item__question">
                Do you build fully custom experiences?
              </h3>
              <span className="faq-item__btn" aria-hidden={true}>
                <Plus></Plus>
              </span>
            </button>
            <div className="faq-item__body">
              <p className="faq-item__answer">
                Yes. RapidGroDigital focuses on cinematic, high-end digital
                experiences designed specifically around your brand identity,
                conversion architecture, and audience psychology.
              </p>
            </div>
          </article>

          <article className="faq-item">
            <button
              className="faq-item__header"
              type="button"
              aria-expanded={false}
            >
              <span className="faq-item__num">03</span>
              <h3 className="faq-item__question">
                Can you redesign an existing website?
              </h3>
              <span className="faq-item__btn" aria-hidden={true}>
                <Plus></Plus>
              </span>
            </button>
            <div className="faq-item__body">
              <p className="faq-item__answer">
                Absolutely. We regularly audit and revamp existing websites,
                protect existing search ranking equity with strict 301 redirect
                mapping, and modernize the UI/UX for higher conversions and
                faster load times.
              </p>
            </div>
          </article>

          <article className="faq-item">
            <button
              className="faq-item__header"
              type="button"
              aria-expanded={false}
            >
              <span className="faq-item__num">04</span>
              <h3 className="faq-item__question">
                What platforms and stacks do you specialize in?
              </h3>
              <span className="faq-item__btn" aria-hidden={true}>
                <Plus></Plus>
              </span>
            </button>
            <div className="faq-item__body">
              <p className="faq-item__answer">
                We are platform-fluent across WordPress, WooCommerce, Shopify,
                React, Next.js, Node.js, Python, Django, Laravel, and Webflow.
                We select the optimal stack tailored to your speed, security,
                and scalability goals.
              </p>
            </div>
          </article>

          {/* <article className="faq-item">
            <button
              className="faq-item__header"
              type="button"
              aria-expanded={false}
            >
              <span className="faq-item__num">05</span>
              <h3 className="faq-item__question">
                Do you provide ongoing SEO and support?
              </h3>
              <span className="faq-item__btn" aria-hidden={true}>
                <Plus></Plus>
              </span>
            </button>
            <div className="faq-item__body">
              <p className="faq-item__answer">
                Yes. Every project includes a 30-day post-launch warranty
                period. We also offer monthly growth retainers for Core Web
                Vitals maintenance, security updates, conversion rate testing,
                and feature enhancements.
              </p>
            </div>
          </article> */}

          {/* <article className="faq-item">
            <button
              className="faq-item__header"
              type="button"
              aria-expanded={false}
            >
              <span className="faq-item__num">06</span>
              <h3 className="faq-item__question">
                How does your pricing and billing work?
              </h3>
              <span className="faq-item__btn" aria-hidden={true}>
                <Plus></Plus>
              </span>
            </button>
            <div className="faq-item__body">
              <p className="faq-item__answer">
                We provide fixed, itemized, and transparent proposals with no
                surprise fees. Payments are distributed across clear project
                milestones so you only pay for completed and verified
                deliverables.
              </p>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  );
}
