import {aboutPageType} from "./documents/about-page";
import {contactPageType} from "./documents/contact-page";
import {faqType} from "./documents/faq";
import {homePageType} from "./documents/home-page";
import {projectType} from "./documents/project";
import {serviceType} from "./documents/service";
import {siteSettingsType} from "./documents/site-settings";
import {teamMemberType} from "./documents/team-member";
import {technologyType} from "./documents/technology";
import {testimonialType} from "./documents/testimonial";
import {accessibleImageType} from "./objects/accessible-image";
import {linkType} from "./objects/link";
import {sectionHeadingType} from "./objects/section-heading";
import {seoType} from "./objects/seo";

export const singletonTypes = new Set(["siteSettings", "homePage", "aboutPage", "contactPage"]);

export const schemaTypes = [
  accessibleImageType,
  linkType,
  sectionHeadingType,
  seoType,
  siteSettingsType,
  homePageType,
  aboutPageType,
  contactPageType,
  projectType,
  serviceType,
  technologyType,
  testimonialType,
  faqType,
  teamMemberType,
];
