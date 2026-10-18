import {defineQuery} from "next-sanity";

const imageProjection = `{ "url": asset->url, "alt": coalesce(alt, asset->altText, ""), hotspot, crop }`;
const editableImageProjection = `{ asset->{_id, url}, "alt": coalesce(alt, asset->altText, ""), hotspot, crop }`;

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  brandName, shortBrandName, logo${imageProjection}, contact,
  socialLinks[]{_key, label, platform, url},
  header{announcements[]{_key, text, linkLabel, href}, quickConsultLabel, phoneCtaLabel},
  navigation[]{_key, label, href, groups[]{_key, title, items[]{_key, label, href, icon}}},
  footer{largeText, accent, copyright, columns[]{_key, title, links[]{_key, label, href, icon}}, legal[]{_key, label, href}},
  popup, chatbot
}`);

export const HOME_PAGE_QUERY = defineQuery(`{
  "page": *[_type == "homePage"][0]{
    seo, hero{..., "videoUrl": video.asset->url, poster${imageProjection}},
    clientLogosSection,
    clientLogos[]{_key, name, backgroundColor, logo${editableImageProjection}},
    aboutIntro{..., image${imageProjection}}, portfolioSection, portfolioCta, servicesSection, technologySection,
    statsSection{..., items[]{_key, value, suffix, label}},
    approachSection{..., steps[]{_key, title, description}}, testimonialsSection, faqSection
  },
  "projects": *[_type == "project" && active != false] | order(order asc, _createdAt asc){
    _id, title, description, url, image${imageProjection}, tag, cardColor, accentColor, textOnDark
  },
  "services": *[_type == "service" && active != false] | order(order asc, _createdAt asc){
    _id, title, description, image${imageProjection}, cardColor
  },
  "technologies": *[_type == "technology" && active != false] | order(order asc, _createdAt asc){_id, name, icon},
  "testimonials": *[_type == "testimonial" && active != false] | order(order asc, _createdAt asc){_id, quote, name, company, source, rating, verified},
  "faqs": *[_type == "faq" && active != false] | order(order asc, _createdAt asc){_id, question, answer}
}`);

export const ABOUT_PAGE_QUERY = defineQuery(`{
  "page": *[_type == "aboutPage"][0]{
    seo, hero{..., image${imageProjection}}, story, values[]{_key, title, description, icon},
    differentiatorsSection{..., items[]{_key, title, description, icon}},
    capabilitiesSection{..., items[]{_key, title, description, icon}}, teamSection, cta
  },
  "team": *[_type == "teamMember" && active != false] | order(order asc, _createdAt asc){
    _id, name, role, image${imageProjection}, introVideoUrl
  }
}`);

export const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "contactPage"][0]{seo, eyebrow, title, accentTitle, description, form}`);
