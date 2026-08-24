import Image from "next/image";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section
      className="section team-section"
      id="team"
      aria-labelledby="team-h"
    >
      <div className="container reveal team-container">
        <div className="team-header">
          <div className="team-header__left">
            <span className="eyebrow on-dark">Meet our experts</span>
            <h2 className="heading on-dark" id="team-h">
              Employees Speak
            </h2>
            <p className="team-subtitle">
              Hear What Our Satisfied Employees Have To Say
            </p>
          </div>
          <div className="team-header__right">
            <a className="btn green" href="#contact" data-magnetic>
              Explore Careers <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="team-slider-outer">
          <div className="team-slider-inner" id="teamSlider">
            {/**/}
            <div className="team-card">
              <div className="team-card__image-wrapper">
                <Image
                  src="/images/lucky.jpg"
                  alt="Geetanjali Sikarwar, Software Developer"
                  loading="lazy"
                  width="500"
                  height="500"
                ></Image>
                <button
                  className="team-card__play"
                  aria-label="Play introduction video for Geetanjali Sikarwar"
                >
                  <Play></Play>
                </button>
              </div>
              <div className="team-card__info">
                <span className="team-card__role">Founder &amp; CEO</span>
                <h3 className="team-card__name">Lucky Kumar</h3>
              </div>
            </div>

            {/**/}
            <div className="team-card">
              <div className="team-card__image-wrapper">
                <Image
                  src="/images/supriya.jpg"
                  alt="lucky , Pre-Sales"
                  loading="lazy"
                  width="500"
                  height="500"
                ></Image>
                <button
                  className="team-card__play"
                  aria-label="Play introduction video for Bhavika Gupta"
                >
                  <Play></Play>
                </button>
              </div>
              <div className="team-card__info">
                <span className="team-card__role">Tech Lead</span>
                <h3 className="team-card__name">Supriya Kumari</h3>
              </div>
            </div>

            {/**/}
            <div className="team-card">
              <div className="team-card__image-wrapper">
                <Image
                  src="/images/supriya.jpg"
                  alt="Kusum Kanwar, Graphics Designer"
                  loading="lazy"
                  width="500"
                  height="500"
                ></Image>
                <button
                  className="team-card__play"
                  aria-label="Play introduction video for Kusum Kanwar"
                >
                  <Play></Play>
                </button>
              </div>
              <div className="team-card__info">
                <span className="team-card__role">Graphics Designer</span>
                <h3 className="team-card__name">Kusum Kanwar</h3>
              </div>
            </div>

            {/**/}
            <div className="team-card">
              <div className="team-card__image-wrapper">
                <Image
                  src="/images/nishu.jpg"
                  alt="Prachi Baitule, Quality Analyst"
                  loading="lazy"
                  width="500"
                  height="500"
                ></Image>
                <button
                  className="team-card__play"
                  aria-label="Play introduction video for Prachi Baitule"
                >
                  <Play></Play>
                </button>
              </div>
              <div className="team-card__info">
                <span className="team-card__role">Bhavya Kumari </span>
                <h3 className="team-card__name">Maneging Director</h3>
              </div>
            </div>
          </div>

          {/**/}
          <div className="team-controls">
            <button
              className="team-control-btn prev"
              id="teamPrev"
              aria-label="Previous employee"
            >
              <ArrowLeft></ArrowLeft>
            </button>
            <button
              className="team-control-btn next"
              id="teamNext"
              aria-label="Next employee"
            >
              <ArrowRight></ArrowRight>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
