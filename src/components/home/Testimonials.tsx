import { CheckCircle2 } from "lucide-react";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section className="testi" id="testimonials" aria-labelledby="testi-h">
      <div className="container">
        <div className="testi-header reveal">
          <div className="testi-header__left">
            <span className="eyebrow">What clients say</span>
            <h2 className="title" id="testi-h">
              Loved by the teams <span className="serif">we build with.</span>
            </h2>
            <p className="sub">
              Real feedback from founders, marketing leaders, and fast-growing
              businesses we partner with.
            </p>
          </div>
          <div className="testi-header__badge">
            <div className="testi-badge__google">
              <iconify-icon
                icon="logos:google-icon"
                aria-hidden={true}
              ></iconify-icon>
            </div>
            <div className="testi-badge__info">
              <div className="testi-badge__top">
                <span className="testi-badge__rating">5.0</span>
                <span className="testi-badge__stars">★★★★★</span>
              </div>
              <span className="testi-badge__label">Google Reviews</span>
              <span className="testi-badge__sub">
                Verified feedback from 40+ clients
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="testi-marquee-wrap reveal">
        {/**/}
        <div className="testi-h-track to-left" data-marquee-clone>
          <div className="testi-h-group">
            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "I had the pleasure of working with the RapidGroDigital team,
                and I must say the experience was excellent. Special thanks to
                Gaurav, who never compromises on quality and ensures the work is
                done exactly as required. They deliver top-quality results
                within deadlines."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">DV</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Darshan Vadher</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "Great working with the team, they helped me make my website
                live in just 5 days. They are helpful even after the project is
                over."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">AB</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Ashish Bansal</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "He was attentive, creative, and always open to feedback, which
                made the entire process smooth and enjoyable. His ability to
                understand our vision and translate it into a clean, functional,
                and beautifully designed website truly stood out."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">FC</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Fiza Chhuvara</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon> The
                    Furr Studio · Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "Gaurav stands out among the most talented WordPress developers
                I have met, he's not only great at communicating, but also
                executes to perfection. He knows his stuff really well."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">JD</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Jitesh Dugar</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon> Local
                    Guide · Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "The team demonstrated a strong understanding of our business
                requirements and translated them into a clean, user-friendly,
                and responsive website. What stood out most was their attention
                to detail, quick turnaround time, and willingness to accommodate
                our feedback."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">ND</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Nadeem Desai</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "Very professional and very hard working guys. Their commitment
                to delivering excellence on time is truly remarkable."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">NY</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Nagendra Yadav</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "Good people, excellent understanding, timely delivered the
                project with topnotch perfections. First delivered frames
                achieved 98% score on SEO parameter. Good work team, keep it
                up."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">DJ</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Deepak Jain</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "The team completed our WordPress website in just 15 days, and
                honestly, there were almost no revisions required because they
                got everything right the first time. The design is clean, fast,
                mobile-friendly, and perfectly matches our brand."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">GP</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Ganesh Patil</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Bappaz Kids Studio · Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "Their team was professional, responsive, and truly understood
                our vision. They delivered a sleek, user-friendly site that
                reflects our brand beautifully. The entire process was smooth,
                and the result exceeded our expectations."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">SN</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Stephanie Neuer</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "His deep knowledge of website development, technical SEO, and
                performance optimization helped us create a fast, user-friendly
                and search-engine-optimized website. What truly stands out is
                his attention to detail, quick response time, and continuous
                support even after project completion."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">SS</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Suketu Shah</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "The team consistently achieves goals on time and their response
                time is impressively quick whenever we need support. Their
                WebCrawl tool is truly a great addition — simple to use,
                insightful, and very effective for technical SEO analysis."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">ZS</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Zanil Shah</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon> Local
                    Guide · Google Review
                  </span>
                </div>
              </div>
            </blockquote>

            <blockquote className="testi-h-card">
              <div className="testi-h-card__top">
                <span className="testi-h-card__stars">★★★★★</span>
                <span className="testi-h-card__verified">
                  <CheckCircle2></CheckCircle2> Verified
                </span>
              </div>
              <p className="testi-h-card__text">
                "Very satisfied with GSUITE's Gmail service, clean and
                professional work."
              </p>
              <div className="testi-h-card__author">
                <span className="testi-h-card__avatar">MC</span>
                <div className="testi-h-card__info">
                  <span className="testi-h-card__name">Mehta Chandni</span>
                  <span className="testi-h-card__meta">
                    <iconify-icon icon="logos:google-icon"></iconify-icon>{" "}
                    Google Review
                  </span>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
