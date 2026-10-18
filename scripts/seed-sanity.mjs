import {createReadStream, existsSync} from "node:fs";
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import {createClient} from "next-sanity";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1ktaw25p";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!projectId || !token) {
  throw new Error("A Sanity user session or SANITY_API_WRITE_TOKEN is required.");
}

const client = createClient({projectId, dataset, token, apiVersion: "2026-10-17", useCdn: false});
const assets = new Map();
const key = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
const keyed = (value, extra = {}) => ({_key: key(value), ...extra});
const link = (label, href, icon) => keyed(`${label}-${href}`, {_type: "link", label, href, ...(icon ? {icon} : {})});

async function uploadAsset(relativePath, kind = "image") {
  const localPath = join(root, "public", relativePath);
  if (!existsSync(localPath)) throw new Error(`Missing seed asset: ${localPath}`);
  const filename = relativePath.replace(/[\\/]/g, "-");
  const cacheKey = `${kind}:${filename}`;
  if (assets.has(cacheKey)) return assets.get(cacheKey);
  const existing = await client.fetch(`*[_type == $type && originalFilename == $filename][0]`, {type: `sanity.${kind}Asset`, filename});
  const asset = existing || await client.assets.upload(kind, createReadStream(localPath), {filename});
  assets.set(cacheKey, asset);
  return asset;
}

async function image(relativePath, alt) {
  const asset = await uploadAsset(relativePath);
  return {_type: "image", asset: {_type: "reference", _ref: asset._id}, alt};
}

async function file(relativePath) {
  const asset = await uploadAsset(relativePath, "file");
  return {_type: "file", asset: {_type: "reference", _ref: asset._id}};
}

const logo = await image("images/Agency-logo-bg-removed.png", "RapidGroDigital logo");
const siteSettings = {
  _id: "siteSettings", _type: "siteSettings", brandName: "RapidGroDigital", shortBrandName: "RapidGro", logo,
  contact: {
    email: "connect@rapidgrodigital.com", phoneDisplay: "+91 9762951896", phoneHref: "tel:+919762951896",
    whatsappUrl: "https://wa.me/919762951896", address: "Dehradun, Near Jigyasa University, Gajender Vihar, AWHO Road, Lane No. 2",
    mapUrl: "https://share.google/kCFvwivlDpB1shCFS",
  },
  socialLinks: [
    keyed("linkedin", {label: "LinkedIn", platform: "linkedin", url: "https://www.linkedin.com/in/rapidgro-digital-62b722434"}),
    keyed("facebook", {label: "Facebook", platform: "facebook", url: "https://www.facebook.com/share/1cgDP9puEV/"}),
    keyed("instagram", {label: "Instagram", platform: "instagram", url: "https://www.instagram.com/rapidgrodigital"}),
  ],
  header: {
    announcements: [
      keyed("growth-partner", {text: "YOUR DIGITAL GROWTH PARTNER"}),
      keyed("deliveries", {text: "140+ successful digital deliveries across 12+ industries.", linkLabel: "EXPLORE NOW!", href: "/#work"}),
      keyed("satisfaction", {text: "Web, SEO, and performance marketing with a 98% client satisfaction rate.", linkLabel: "SEE HOW", href: "/#testimonials"}),
    ],
    quickConsultLabel: "Quick Consult", phoneCtaLabel: "Call",
  },
  navigation: [
    keyed("nav-home", {label: "Home", href: "/"}),
    keyed("nav-about", {label: "About", href: "/about"}),
    keyed("nav-services", {label: "Services", href: "/#services", groups: [
      keyed("development", {title: "DEVELOPMENT", items: [link("Website Development Services", "/contact", "globe"), link("SaaS Development", "/contact", "layers"), link("Mobile App Development", "/contact", "smartphone"), link("Data Science & Analytics", "/contact", "chart"), link("Cloud & DevOps", "/contact", "cloud"), link("E-Commerce", "/contact", "cart"), link("UX/UI Design", "/contact", "palette"), link("AI & Machine Learning", "/contact", "cpu")]}),
      keyed("marketing", {title: "MARKETING", items: [link("Content Marketing", "/contact", "file"), link("Social Media Marketing", "/contact", "share"), link("Performance Marketing", "/contact", "trending"), link("SEO", "/contact", "search")]}),
      keyed("support", {title: "CREATIVE & SUPPORT", items: [link("Website Maintenance", "/contact", "settings"), link("Technical Support", "/contact", "headset"), link("AI Automation", "/contact", "bot"), link("Video Editing", "/contact", "video"), link("Branding", "/contact", "award")]}),
    ]}),
    keyed("nav-work", {label: "Work", href: "/#work"}),
    keyed("nav-clients", {label: "Our clients", href: "/#testimonials"}),
    keyed("nav-contact", {label: "Contact", href: "/contact"}),
    keyed("nav-industries", {label: "Industries", href: "/#industries", groups: [
      keyed("commerce", {title: "E-COMMERCE", items: [link("E-commerce Apps", "/contact", "cart"), link("Marketplace Platforms", "/contact", "building")]}),
      keyed("business", {title: "BUSINESS SYSTEMS", items: [link("CRM Software", "/contact", "users"), link("ERP Software", "/contact", "server"), link("Inventory Management", "/contact", "clipboard")]}),
      keyed("social", {title: "SOCIAL", items: [link("Chat Applications", "/contact", "message"), link("Community Platforms", "/contact", "share")]}),
    ]}),
  ],
  footer: {
    largeText: "rapidgrodigital", accent: "#E91E8C", copyright: "© {year} RapidGroDigital. All rights reserved.",
    columns: [
      keyed("company", {title: "Company", links: [link("Home", "/"), link("Services", "/#services"), link("Work", "/#work"), link("About", "/about"), link("Our clients", "/#testimonials"), link("Contact", "/contact")]}),
      keyed("build", {title: "Build", links: [link("Website Development", "/contact"), link("E-Commerce Development", "/contact"), link("Mobile App Development", "/contact"), link("CRM & ERP Development", "/contact"), link("Cloud Solutions", "/contact")]}),
      keyed("grow", {title: "Grow", links: [link("SEO & Local SEO", "/contact"), link("Google Ads", "/contact"), link("Meta Ads", "/contact"), link("Social Media Marketing", "/contact"), link("AI Automation", "/contact")]}),
      keyed("contact", {title: "Contact", links: [link("Dehradun, Near Jigyasa University, Gajender Vihar, AWHO Road, Lane No. 2", "https://share.google/kCFvwivlDpB1shCFS", "map-pin"), link("connect@rapidgrodigital.com", "mailto:connect@rapidgrodigital.com", "mail"), link("+91 9762951896", "tel:+919762951896", "phone")]}),
    ],
    legal: [link("Privacy", "#"), link("Terms", "#"), link("Cookies", "#")],
  },
  popup: {
    enabled: true, delaySeconds: 20, heading: "Share Your Vision & Get Instant Revert", description: "Reach our experts anytime for upfront insights on your project.",
    testimonialQuote: "We were impressed by the attention to detail and timely delivery. The entire experience was seamless.", testimonialName: "Dheeraj Arora", testimonialRole: "Founder, Interiorpreneurs",
    stats: [keyed("projects", {label: "Projects", value: "140+"}), keyed("industries", {label: "Industries", value: "12+"}), keyed("experience", {label: "Years Experience", value: "9+"}), keyed("satisfaction", {label: "Satisfaction", value: "98%"})],
    instantHelpLabel: "Need instant help?", fullNamePlaceholder: "Full name *", companyPlaceholder: "Company name", emailPlaceholder: "you@company.com *", phonePlaceholder: "+91 Phone number *", detailsPlaceholder: "How can we help you?",
    submitLabel: "Book Free Consultation", successTitle: "Thank You!", successMessage: "Your enquiry has been received. Our team will review it and contact you shortly.", errorTitle: "Unable to Send", errorMessage: "We could not submit your request. Please try again or contact us directly.", privacyText: "No spam, ever. We reply within one business day.",
  },
  chatbot: {
    enabled: true, name: "RapidGro AI", providerLabel: "AI project assistant", welcome: "Hi — ask about services, timelines, redesigns, technology stacks, or how to start your project.",
    suggestedReplies: ["What services do you offer?", "How long does a project take?", "Can you redesign my website?"], handoffLabel: "Continue this brief in contact form", inputLabel: "Ask the agency assistant", inputPlaceholder: "Ask about your project…", launcherLabel: "Ask RapidGro", notice: "AI can make mistakes. Confirm project scope and pricing with the team.", unavailableMessage: "The assistant is temporarily unavailable.",
    knowledge: "RapidGroDigital provides WordPress, WooCommerce, Shopify, React and Next.js development, SaaS applications, SEO, digital marketing, website redesigns, automation, and conversion-focused UI/UX. Typical marketing websites take around 2–4 weeks. More complex SaaS and ecommerce projects often take 4–8 weeks. Exact pricing requires a scoped project brief. The team can audit and redesign existing websites while planning redirects to protect SEO equity.",
  },
};

const homePage = {
  _id: "homePage", _type: "homePage",
  seo: {title: "RapidGroDigital | Your Digital Growth Partner", description: "Websites, ecommerce, SaaS, SEO and performance marketing engineered for scalable growth.", keywords: ["digital agency", "website development", "SEO", "performance marketing"]},
  hero: {title: "We accelerate growth for", accentTitle: "modern brands.", description: "We empower ambitious brands to scale with high-converting websites, robust digital products, technical SEO, and conversion-focused marketing.", video: await file("video/bg.mp4"), poster: await image("images/about-hero-3d.png", "Abstract digital growth artwork"), primaryCta: link("Start your project", "/contact"), secondaryCta: link("Explore services", "#services"), showSocialLinks: true},
  clientLogosSection: {eyebrow: "Our clients", title: "Trusted by brands built for", accentTitle: "what's next.", description: "We partner with ambitious companies across industries to create digital experiences that drive meaningful growth."},
  clientLogos: [
    keyed("opal-traders", {_type: "clientLogo", name: "Opal Traders", logo: await image("images/partners/image.png", "Opal Traders logo"), backgroundColor: "#F4F0F7"}),
    keyed("physicswallah", {_type: "clientLogo", name: "Physics Wallah", logo: await image("images/partners/image copy.png", "Physics Wallah logo"), backgroundColor: "#140820"}),
    keyed("be", {_type: "clientLogo", name: "BE", logo: await image("images/partners/be.png", "BE logo"), backgroundColor: "#FEFFFF"}),
    keyed("navriti-store", {_type: "clientLogo", name: "Navriti Store", logo: await image("images/partners/navriti-store.png", "Navriti Store logo"), backgroundColor: "#712468"}),
    keyed("ima-albhani-frames", {_type: "clientLogo", name: "Ima Albhani Frames", logo: await image("images/partners/imaalbhani-frames.png", "Ima Albhani Frames logo"), backgroundColor: "#EEF1EA"}),
    keyed("invester-guider", {_type: "clientLogo", name: "Invester Guider", logo: await image("images/partners/invester-guider.png", "Invester Guider logo"), backgroundColor: "#000000"}),
  ],
  aboutIntro: {label: "About Us", title: "Boost your brand, accelerate your digital growth.", description: "We combine strategy, creativity, and technology to build digital experiences that connect brands with their audiences, drive engagement, and turn ambitious ideas into measurable growth.", image: await image("images/portfolio/about.png", "RapidGroDigital team at work"), cta: link("Know more", "/about")},
  portfolioSection: {title: "Our success stories showcasing", accentTitle: "innovation in action.", description: "Explore high-impact web, ecommerce, and SaaS solutions delivered for brands across industries."},
  portfolioCta: link("Start your project", "/contact"),
  servicesSection: {title: "Featured", accentTitle: "Services.", description: "Engineered for high performance, measurable ROI, and effortless scalability."},
  technologySection: {title: "Our", accentTitle: "Tech Stack.", description: "Technologies used to build fast, scalable, and reliable digital experiences."},
  statsSection: {ariaLabel: "Key numbers", items: [keyed("projects", {value: 140, suffix: "+", label: "Projects Delivered"}), keyed("industries", {value: 12, suffix: "+", label: "Industries Served"}), keyed("experience", {value: 9, suffix: "+", label: "Years Experience"}), keyed("clients", {value: 98, suffix: "%", label: "Client Satisfaction"})]},
  approachSection: {eyebrow: "What sets us apart", title: "What truly sets us", accentTitle: "apart from the rest.", steps: [keyed("search", {title: "Search-first thinking", description: "Every build starts with structure, speed, and content planned for search visibility."}), keyed("delivery", {title: "Fast & effective delivery", description: "Weekly demos and clear milestones keep progress visible and predictable."}), keyed("team", {title: "One holistic team", description: "Design, development, SEO, and automation work together without handoff friction."}), keyed("pricing", {title: "Fair & flexible pricing", description: "Work is scoped clearly to fit the actual business need."})]},
  testimonialsSection: {eyebrow: "What clients say", title: "Loved by the teams", accentTitle: "we build with.", description: "Real feedback from founders, marketing leaders, and growing businesses.", ratingLabel: "Google Reviews", rating: 5, reviewCountLabel: "Verified client feedback"},
  faqSection: {eyebrow: "Common questions", title: "Frequently", accentTitle: "asked questions.", description: "Everything you need to know about our process, timelines, pricing, and collaboration.", helpTitle: "Have another question?", helpLink: link("Talk with our team", "/contact")},
};

const aboutPage = {
  _id: "aboutPage", _type: "aboutPage",
  seo: {title: "About Us | RapidGroDigital", description: "Meet the strategy, design and engineering team behind RapidGroDigital."},
  hero: {title: "We're building the future of digital growth with", accentTitle: "intelligence & creativity.", description: "We help ambitious businesses scale with web engineering, digital marketing, and revenue-driven experiences.", image: await image("images/about-hero-3d.png", "Abstract 3D shape"), cta: link("Start a conversation", "/contact")},
  story: {eyebrow: "OUR STORY", title: "Built to make businesses move", accentTitle: "faster.", paragraphs: ["RapidGroDigital was founded to help businesses unlock growth through smart automation, AI, and digital innovation.", "We combine strategy, creativity, and engineering to build systems that save time, reduce costs, and drive measurable growth."]},
  values: [keyed("mission", {title: "Our Mission", description: "Empower businesses with intelligent solutions that simplify operations and accelerate growth.", icon: "rocket"}), keyed("vision", {title: "Our Vision", description: "Become a trusted technology and growth partner for businesses worldwide.", icon: "eye"}), keyed("promise", {title: "Our Promise", description: "Deliver smart, scalable, and results-driven solutions that create real impact.", icon: "target"})],
  differentiatorsSection: {heading: {eyebrow: "WHAT MAKES US DIFFERENT?", title: "Solutions that", accentTitle: "think, create & grow with you."}, items: [keyed("ai", {title: "AI-Powered Solutions", description: "Intelligent technology applied to real business challenges.", icon: "brain"}), keyed("business", {title: "Business-First Approach", description: "Every solution aligns with practical business goals.", icon: "users"}), keyed("scale", {title: "Scalable & Flexible", description: "Systems designed to adapt as your company grows.", icon: "chart"}), keyed("creative", {title: "Creative + Technical", description: "Creativity and engineering combined in one delivery team.", icon: "sparkles"})]},
  capabilitiesSection: {heading: {eyebrow: "WHAT WE DO", title: "From strategy to automation — we help you", accentTitle: "grow."}, items: [keyed("consulting", {title: "AI Consulting", description: "Practical guidance for valuable AI adoption.", icon: "cpu"}), keyed("automation", {title: "Automation", description: "Workflows that save time and reduce manual work.", icon: "settings"}), keyed("custom", {title: "Custom Solutions", description: "Tailored systems for unique challenges.", icon: "code"}), keyed("growth", {title: "Digital Growth", description: "Strategies that attract, engage, and convert.", icon: "trending"}), keyed("analytics", {title: "Analytics & Insights", description: "Turn data into decisions and measurable progress.", icon: "pie"})]},
  teamSection: {eyebrow: "Our team", title: "People behind", accentTitle: "the work.", description: "A multidisciplinary team focused on meaningful business outcomes."},
  cta: {title: "Ready to grow", accentTitle: "smarter?", description: "Let's build the right system for your next stage of growth.", link: link("Start your project", "/contact")},
};

const contactPage = {
  _id: "contactPage", _type: "contactPage",
  seo: {title: "Contact Us | RapidGroDigital", description: "Tell RapidGroDigital about your website, ecommerce, SaaS, SEO, or digital growth project."},
  eyebrow: "START YOUR PROJECT", title: "Let's scope your", accentTitle: "project.", description: "Share what you want to build, the outcome you need, and any constraints we should know about.",
  form: {firstNameLabel: "First Name", firstNamePlaceholder: "Your first name", lastNameLabel: "Last Name", lastNamePlaceholder: "Your last name", emailLabel: "Email Address", emailPlaceholder: "you@company.com", phoneLabel: "Phone Number", phonePlaceholder: "+91 98765 43210", companyUrlLabel: "Company URL", companyUrlPlaceholder: "https://yourcompany.com", detailsLabel: "Project Details", detailsPlaceholder: "Tell us what you want to build, your goals, important features, and timeline.", submitLabel: "Send Message", sendingLabel: "Sending…", consentText: "By sending this form, you agree that the submitted information may be used to respond to your enquiry.", successTitle: "Thanks — we received it.", successMessage: "Your message has been sent. Our team will review your project brief and contact you soon.", errorTitle: "We couldn't send that message.", errorMessage: "Unable to send your message. Please try again."},
};

const projects = [
  ["datadank", "DataDank", "A data engineering learning and interview preparation platform with structured roadmaps and practical exercises.", "https://datadank.com", "images/portfolio/datadank.png", "EdTech · Data Engineering", "#16110e", "#F97316"],
  ["physics-wallah", "Physics Wallah", "A scalable EdTech platform delivering accessible education to learners across India.", "https://www.physicswallah.in/", "images/portfolio/physics-wallah.png", "EdTech · Web", "#1c0b2e", "#FF4DB8"],
  ["velora", "Velora Jewellery", "A premium ecommerce experience for minimal and meaningful jewellery.", "/contact", "images/portfolio/velora.jpg", "Ecommerce · Jewellery", "#0f0a1e", "#E91E8C"],
  ["northwave", "Northwave Gear", "A conversion-focused outdoor gear store built around durable, high-performance products.", "/contact", "images/portfolio/northwave.jpg", "Ecommerce · Outdoor Gear", "#1c0b2e", "#FF4DB8"],
];

const services = [
  ["marketing-seo", "Marketing & SEO", "Data-driven marketing, technical SEO, and conversion optimization.", "images/portfolio/seo.jpg", "#0f0a1e"],
  ["app-web", "App & Web Dev", "High-performance websites, web applications, and mobile solutions.", "images/portfolio/web.png", "#1c0b2e"],
  ["ui-ux", "UI/UX Design", "User-centric interfaces and design systems for intuitive customer journeys.", "images/portfolio/ui.png", "#0f0a1e"],
  ["cloud-automation", "Cloud & Automation", "Cloud infrastructure, integrations, and workflow automation.", "images/portfolio/latest-tech.png", "#E91E8C"],
];

const testimonials = [
  ["darshan-vadher", "Darshan Vadher", "I had the pleasure of working with the team. They never compromise on quality and deliver excellent results within deadlines."],
  ["ashish-bansal", "Ashish Bansal", "The team helped make my website live in just five days and remained helpful after the project was complete."],
  ["fiza-chhuvara", "Fiza Chhuvara", "They understood our vision and translated it into a clean, functional, and beautifully designed website.", "The Furr Studio"],
  ["jitesh-dugar", "Jitesh Dugar", "A talented web development team that communicates clearly and executes with care."],
  ["nadeem-desai", "Nadeem Desai", "Their attention to detail, quick turnaround, and willingness to accommodate feedback stood out."],
  ["deepak-jain", "Deepak Jain", "Excellent understanding and timely delivery, with strong SEO performance from the first build."],
];

const faqs = [
  ["timeline", "How long does a project usually take?", "Many marketing websites launch in 2–4 weeks. More complex SaaS and ecommerce platforms often take 4–8 weeks, depending on scope, integrations, content readiness, and feedback cycles."],
  ["custom", "Do you build fully custom experiences?", "Yes. The team designs experiences around your brand, audience, business goals, and conversion journey."],
  ["redesign", "Can you redesign an existing website?", "Yes. Existing sites can be audited and modernized while carefully planning redirects and protecting valuable SEO equity."],
  ["stacks", "What platforms and stacks do you specialize in?", "The team works with WordPress, WooCommerce, Shopify, React, Next.js, Node.js, Python, and modern cloud platforms."],
];

const technologies = ["react", "nextjs", "tailwind", "typescript", "nodejs", "python", "graphql", "aws", "vercel", "docker", "postgresql", "mongodb", "prisma", "supabase", "figma"];
const team = [
  ["lucky", "Lucky", "Founder", "images/lucky.jpg"], ["supriya", "Supriya Kumari", "Tech Lead", "images/supriya.jpg"],
  ["bhavya", "Bhavya Kumari", "HR", "images/nishu.jpg"], ["divyanshu", "Divyanshu Shekhar", "Marketing Director", "images/Divyanshu-Shekhar.png"],
];

const importedDocuments = [];
for (const [index, [id, title, description, url, assetPath, tag, cardColor, accentColor]] of projects.entries()) importedDocuments.push({legacyId: `project-${id}`, document: {_type: "project", sourceKey: id, title, description, url, image: await image(assetPath, `${title} project preview`), tag, cardColor, accentColor, textOnDark: true, order: (index + 1) * 10, active: true}});
for (const [index, [id, title, description, assetPath, cardColor]] of services.entries()) importedDocuments.push({legacyId: `service-${id}`, document: {_type: "service", sourceKey: id, title, description, image: await image(assetPath, title), cardColor, order: (index + 1) * 10, active: true}});
for (const [index, icon] of technologies.entries()) importedDocuments.push({legacyId: `technology-${icon}`, document: {_type: "technology", sourceKey: icon, name: icon.replace(/(^.|-.)/g, (text) => text.replace("-", " ").toUpperCase()), icon, order: (index + 1) * 10, active: true}});
for (const [index, [id, name, quote, company]] of testimonials.entries()) importedDocuments.push({legacyId: `testimonial-${id}`, document: {_type: "testimonial", sourceKey: id, name, quote, company, source: "Google Review", rating: 5, verified: true, order: (index + 1) * 10, active: true}});
for (const [index, [id, question, answer]] of faqs.entries()) importedDocuments.push({legacyId: `faq-${id}`, document: {_type: "faq", sourceKey: id, question, answer, order: (index + 1) * 10, active: true}});
for (const [index, [id, name, role, assetPath]] of team.entries()) importedDocuments.push({legacyId: `team-${id}`, document: {_type: "teamMember", sourceKey: id, name, role, image: await image(assetPath, `${name}, ${role}`), order: (index + 1) * 10, active: true}});

let singletonTransaction = client.transaction();
for (const document of [siteSettings, homePage, aboutPage, contactPage]) {
  singletonTransaction = singletonTransaction.createOrReplace(document);
}
await singletonTransaction.commit();

for (const {legacyId, document} of importedDocuments) {
  const existingId = await client.fetch(
    `*[_type == $type && (_id == $legacyId || sourceKey == $sourceKey)][0]._id`,
    {type: document._type, legacyId, sourceKey: document.sourceKey},
  );

  if (existingId) {
    await client.createOrReplace({_id: existingId, ...document});
  } else {
    await client.create(document);
  }
}

console.log(`Seeded ${importedDocuments.length + 4} documents into ${projectId}/${dataset}.`);
