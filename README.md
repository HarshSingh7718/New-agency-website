# RapidGroDigital - Full Service Digital Marketing Agency

RapidGroDigital is a modern, responsive website built for a full-service digital marketing agency. The site showcases the agency's portfolio, services, client testimonials, and features a clean, high-performance UI tailored for maximum conversion and search visibility.

## Features

- **Modern & Responsive UI**: Fully responsive across mobile, tablet, and desktop viewports, using a sophisticated design system.
- **Custom Animations**: Smooth entry animations and micro-interactions powered by custom JavaScript and Intersection Observer.
- **Dynamic Services Section**: Clear breakdown of specialized services like WordPress Development, Shopify Development, SaaS Applications, SEO, and more.
- **Client Testimonials**: Verified feedback grid featuring an interactive marquee display.
- **Optimized for Performance**: Built on Next.js with Server-Side Rendering (SSR) capabilities, providing an ultra-fast browsing experience.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: Vanilla CSS (modular design system with variables) & Tailwind CSS
- **Icons**: [Lucide React](https://lucide.dev/) & [Iconify](https://iconify.design/)
- **Typography**: [Urbanist](https://fonts.google.com/specimen/Urbanist) & [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)

## Project Structure

```text
├── public/                 # Static assets, fonts, and custom scripts
│   ├── css/                # Core stylesheets (theme, components, responsive)
│   ├── js/                 # Custom animation scripts (custom.js, hero-smoke.js)
│   └── images/             # Image assets
├── src/
│   ├── app/                # Next.js app routing (layout, page, contact)
│   ├── components/
│   │   └── home/           # Modular React components for the homepage (Hero, Services, CTA, Footer, etc.)
│   └── lib/                # Utility functions and shared resources
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/agency-website.git
   cd agency-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Contact Form & AI Chatbot

The project uses **Zoho Mail** for contact form enquiries with `Reply-To` set to the client's email (enabling the owner to converse directly by clicking Reply), reserves **Resend** for future one-way transactional notifications (welcome emails, OTP, invoices), and features a **Groq**-powered AI chatbot with context-aware suggested replies.

## Sanity CMS

All public website content is sourced from Sanity. The application does not keep a second runtime copy of page content. Shared identity, navigation, contact details, social links, footer content, popup copy, and chatbot knowledge live in the singleton **Site settings** document, so changing a social link updates every surface that uses it.

Repeatable content uses independent documents and an editor-controlled numeric `order` field:

- projects
- services
- technologies
- testimonials
- FAQs
- team members

### Initial setup

The Next.js app lives at the repository root and the standalone Studio lives in `studio/`. Both connect to the `production` dataset in Sanity project `1ktaw25p`.

1. Install both apps:

   ```bash
   npm install
   npm --prefix studio install
   ```

2. Copy any missing values from `.env.example` into `.env`. Public Sanity identifiers are already present in `.env.local` for local development.
3. Add `http://localhost:3000` and the production site origin to Sanity's CORS origins, with credentials enabled for preview.
4. Deploy the schema and generate query types:

   ```bash
   npm run sanity:schema:deploy
   npm run sanity:typegen
   ```

5. Log in to the Sanity CLI and import the current website content:

   ```bash
   cd studio
   npx sanity login
   cd ..
   npm run sanity:seed
   ```

6. Create a Viewer token for `SANITY_API_READ_TOKEN` so authenticated draft preview works.
7. Start the frontend and Studio in separate terminals:

   ```bash
   npm run dev
   npm run sanity:dev
   ```

The frontend runs at `http://localhost:3000`; the standalone Studio runs at `http://localhost:3333`. The seed command is idempotent: singleton pages use explicit IDs, while repeatable content uses migration-only source keys and Sanity-generated document IDs. Running it again intentionally updates the imported content, so use it only for initial migration or a deliberate reset.

Sanity handles Studio authentication. The public website does not show a login or Studio link and does not store or process CMS passwords. Authorized editors can open `/studio` directly, which redirects to the configured standalone Studio URL.

## Design System

The project relies heavily on a centralized design system located in `public/css/theme.css`. Modifying colors, typography, and spacing variables here will globally update the site's styling.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Copyright © 2026 RapidGroDigital. All rights reserved.
