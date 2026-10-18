"use client";

import Image from "next/image";
import {ArrowLeft, ArrowRight, Play} from "lucide-react";
import type {TeamMember} from "@/sanity/lib/types";

export default function Team({heading, members}: {heading: {eyebrow?: string; title: string; accentTitle?: string; description?: string}; members: TeamMember[]}) {
  return (
    <section className="team-section" id="team" aria-labelledby="team-h">
      <div className="container team-container">
        <div className="team-header reveal">
          <div className="team-header__left">{heading.eyebrow && <span className="eyebrow">{heading.eyebrow}</span>}<h2 className="heading on-dark" id="team-h">{heading.title} {heading.accentTitle && <span className="serif">{heading.accentTitle}</span>}</h2>{heading.description && <p className="team-subtitle">{heading.description}</p>}</div>
        </div>
        <div className="team-slider-outer">
          <div className="team-slider-inner" id="teamSlider">
            {members.map((member) => (
              <div className="team-card" key={member._id}>
                <div className="team-card__image-wrapper">
                  {member.image?.url && <Image src={member.image.url} alt={member.image.alt || `${member.name}, ${member.role}`} width={500} height={500} />}
                  {member.introVideoUrl && <a className="team-card__play" aria-label={`Play introduction video for ${member.name}`} href={member.introVideoUrl} target="_blank" rel="noopener noreferrer"><Play /></a>}
                </div>
                <div className="team-card__info"><span className="team-card__role">{member.role}</span><h3 className="team-card__name">{member.name}</h3></div>
              </div>
            ))}
          </div>
          <div className="team-controls">
            <button className="team-control-btn prev" id="teamPrev" aria-label="Previous employee"><ArrowLeft /></button>
            <button className="team-control-btn next" id="teamNext" aria-label="Next employee"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
