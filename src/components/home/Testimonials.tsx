import {CheckCircle2} from "lucide-react";
import type {Testimonial} from "@/sanity/lib/types";

type Content = {eyebrow?: string; title?: string; accentTitle?: string; description?: string; ratingLabel?: string; rating?: number; reviewCountLabel?: string};

function TestimonialCard({item}: {item: Testimonial}) {
  const initials = item.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return (
    <blockquote className="testi-h-card">
      <div className="testi-h-card__top">
        <span className="testi-h-card__stars">{"★".repeat(Math.round(item.rating))}</span>
        {item.verified && <span className="testi-h-card__verified"><CheckCircle2 />Verified</span>}
      </div>
      <p className="testi-h-card__text">“{item.quote}”</p>
      <div className="testi-h-card__author">
        <span className="testi-h-card__avatar">{initials}</span>
        <div className="testi-h-card__info">
          <span className="testi-h-card__name">{item.name}</span>
          <span className="testi-h-card__meta"><iconify-icon icon="logos:google-icon"></iconify-icon>{item.company ? `${item.company} · ` : ""}{item.source}</span>
        </div>
      </div>
    </blockquote>
  );
}

export default function Testimonials({content, testimonials}: {content: Content; testimonials: Testimonial[]}) {
  return (
    <section className="testi" id="testimonials" aria-labelledby="testi-h">
      <div className="container"><div className="testi-header reveal">
        <div className="testi-header__left">
          {content.eyebrow && <span className="eyebrow">{content.eyebrow}</span>}
          <h2 className="title" id="testi-h">{content.title} {content.accentTitle && <span className="serif">{content.accentTitle}</span>}</h2>
          {content.description && <p className="sub">{content.description}</p>}
        </div>
        <div className="testi-header__badge">
          <div className="testi-badge__google"><iconify-icon icon="logos:google-icon"></iconify-icon></div>
          <div className="testi-badge__info">
            <div className="testi-badge__top"><span className="testi-badge__rating">{content.rating}</span><span className="testi-badge__stars">★★★★★</span></div>
            <span className="testi-badge__label">{content.ratingLabel}</span><span className="testi-badge__sub">{content.reviewCountLabel}</span>
          </div>
        </div>
      </div></div>
      <div className="testi-marquee-wrap reveal">
        <div className="testi-h-track to-left" data-marquee-clone>
          {[0, 1].map((copy) => <div className="testi-h-group" key={copy}>{testimonials.map((item) => <TestimonialCard item={item} key={`${copy}-${item._id}`} />)}</div>)}
        </div>
      </div>
    </section>
  );
}
