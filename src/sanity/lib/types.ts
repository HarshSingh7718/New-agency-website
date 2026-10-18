export type CmsImage = {url: string; alt?: string} | null;
export type EditableCmsImage = {
  asset: {_id: string; url: string};
  alt?: string;
  crop?: {left: number; top: number; right: number; bottom: number};
  hotspot?: {x: number; y: number; width: number; height: number};
} | null;
export type CmsLink = {_key?: string; label: string; href: string; icon?: string};
export type SocialLink = {_key?: string; label: string; platform: string; url: string};
export type NavigationGroup = {_key?: string; title: string; items: CmsLink[]};
export type NavigationItem = {_key?: string; label: string; href: string; groups?: NavigationGroup[]};

export type SiteSettings = {
  brandName: string;
  shortBrandName: string;
  logo: CmsImage;
  contact: {email: string; phoneDisplay: string; phoneHref: string; whatsappUrl: string; address: string; mapUrl: string};
  socialLinks: SocialLink[];
  header: {announcements: Array<{_key?: string; text: string; linkLabel?: string; href?: string}>; quickConsultLabel: string; phoneCtaLabel: string};
  navigation: NavigationItem[];
  footer: {largeText: string; accent: string; copyright: string; columns: Array<{_key?: string; title: string; links: CmsLink[]}>; legal: CmsLink[]};
  popup?: {enabled?: boolean; delaySeconds?: number; heading?: string; description?: string; testimonialQuote?: string; testimonialName?: string; testimonialRole?: string; stats?: Array<{_key?: string; label: string; value: string}>; instantHelpLabel?: string; fullNamePlaceholder?: string; companyPlaceholder?: string; emailPlaceholder?: string; phonePlaceholder?: string; detailsPlaceholder?: string; submitLabel?: string; successTitle?: string; successMessage?: string; errorTitle?: string; errorMessage?: string; privacyText?: string};
  chatbot?: {enabled?: boolean; name?: string; providerLabel?: string; welcome?: string; suggestedReplies?: string[]; handoffLabel?: string; inputLabel?: string; inputPlaceholder?: string; launcherLabel?: string; notice?: string; unavailableMessage?: string; knowledge?: string};
};

export type SeoContent = {title: string; description: string; keywords?: string[]; image?: CmsImage};
export type SectionHeading = {eyebrow?: string; title: string; accentTitle?: string; description?: string};
export type Project = {_id: string; title: string; description: string; url: string; image: CmsImage; tag: string; cardColor: string; accentColor: string; textOnDark: boolean};
export type Service = {_id: string; title: string; description: string; image: CmsImage; cardColor: string};
export type Testimonial = {_id: string; quote: string; name: string; company?: string; source: string; rating: number; verified: boolean};
export type Faq = {_id: string; question: string; answer: string};
export type TeamMember = {_id: string; name: string; role: string; image: CmsImage; introVideoUrl?: string};
export type ClientLogo = {_key: string; name: string; logo: EditableCmsImage; backgroundColor: string};

export type HomePageData = {
  seo: SeoContent;
  hero: {title: string; accentTitle: string; description: string; videoUrl?: string; poster?: CmsImage; primaryCta: CmsLink; secondaryCta: CmsLink; showSocialLinks?: boolean};
  clientLogosSection?: SectionHeading;
  clientLogos?: ClientLogo[];
  aboutIntro: {label: string; title: string; description: string; image: CmsImage; cta: CmsLink};
  portfolioSection: SectionHeading;
  portfolioCta: CmsLink;
  servicesSection: SectionHeading;
  technologySection: SectionHeading;
  statsSection: {ariaLabel?: string; items: Array<{_key?: string; value: number; suffix?: string; label: string}>};
  approachSection: {eyebrow: string; title: string; accentTitle: string; steps: Array<{_key?: string; title: string; description: string}>};
  testimonialsSection: Record<string, string | number>;
  faqSection: Record<string, string>;
};

export type HomeQueryResult = {page: HomePageData | null; projects: Project[]; services: Service[]; technologies: Array<{_id: string; name: string; icon: string}>; testimonials: Testimonial[]; faqs: Faq[]};

export type TitledIconItem = {_key?: string; title: string; description: string; icon: string};
export type AboutPageData = {
  seo: SeoContent;
  hero: {title: string; accentTitle: string; description: string; image: CmsImage; cta: CmsLink};
  story: {eyebrow: string; title: string; accentTitle?: string; paragraphs: string[]};
  values: TitledIconItem[];
  differentiatorsSection: {heading: {eyebrow?: string; title: string; accentTitle?: string; description?: string}; items: TitledIconItem[]};
  capabilitiesSection: {heading: {eyebrow?: string; title: string; accentTitle?: string; description?: string}; items: TitledIconItem[]};
  teamSection: {eyebrow?: string; title: string; accentTitle?: string; description?: string};
  cta: {title: string; accentTitle?: string; description?: string; link: CmsLink};
};

export type ContactPageData = {
  seo: SeoContent; eyebrow: string; title: string; accentTitle: string; description: string;
  form: Record<string, string>;
};
