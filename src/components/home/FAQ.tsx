import {ArrowUpRight, Plus} from "lucide-react";
import type {Faq as FaqItem} from "@/sanity/lib/types";

type Content = {eyebrow?: string; title?: string; accentTitle?: string; description?: string; helpTitle?: string; helpLink?: {label: string; href: string}};
export default function FAQ({content, faqs}: {content: Content; faqs: FaqItem[]}) {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-h">
      <div className="faq-container">
        <div className="faq-intro reveal">
          {content.eyebrow && <span className="eyebrow">{content.eyebrow}</span>}
          <h2 className="faq-heading" id="faq-h">{content.title} {content.accentTitle && <span className="serif">{content.accentTitle}</span>}</h2>
          {content.description && <p className="faq-sub">{content.description}</p>}
          {content.helpLink && <div className="faq-help-box"><span className="faq-help-box__title">{content.helpTitle}</span><a href={content.helpLink.href} className="faq-help-box__link">{content.helpLink.label}<ArrowUpRight /></a></div>}
        </div>
        <div className="faq-accordion-list reveal">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq._id}>
              <button className="faq-item__header" type="button" aria-expanded={false}>
                <span className="faq-item__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="faq-item__question">{faq.question}</h3>
                <span className="faq-item__btn" aria-hidden="true"><Plus /></span>
              </button>
              <div className="faq-item__body"><p className="faq-item__answer">{faq.answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
