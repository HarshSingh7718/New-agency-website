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

The project includes a Resend-first contact backend with Gmail/Nodemailer fallback and a Groq-powered agency chatbot with context-aware suggested replies.

## Design System

The project relies heavily on a centralized design system located in `public/css/theme.css`. Modifying colors, typography, and spacing variables here will globally update the site's styling.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Copyright © 2026 RapidGroDigital. All rights reserved.
