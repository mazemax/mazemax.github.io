# Max Saad - Personal Portfolio Website

This repository contains the source code for my personal portfolio website built with [Next.js](https://nextjs.org/). The site showcases my AI engineering expertise, professional experience, achievements, and case studies with a modern, animated UI powered by **Magic UI**.

## 🎨 Revamp 2026

The latest major update (February 2026) brings a complete visual and functional overhaul:

- **Magic UI Integration**: 20+ premium animated components including particles, shimmer effects, blur fades, sparkles, ripples, and more
- **Enhanced Hero Section**: Dynamic word rotation, number tickers, and interactive hover effects
- **Improved UX Flow**: Strategically reorganized content hierarchy for maximum conversion
- **Modern Animations**: Smooth, performant animations using Framer Motion
- **Better SEO**: Enhanced structured data with Person, Service, and FAQ schemas
- **Scroll Progress**: Visual indicator for page navigation
- **Sticky CTA**: Dynamic header call-to-action that appears on scroll

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Key Components](#key-components)
- [Dependencies](#dependencies)
- [License](#license)

---

## Features

- **🚀 Award-Winning Portfolio**: Showcasing $19M+ revenue-driven AI solutions
- **✨ Magic UI Components**: 20+ animated components for stunning visual effects
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Fast loading with Next.js optimization and image optimization
- **🎯 SEO-Ready**: Structured data, meta tags, and semantic HTML
- **🎨 Modern Design**: Gradient backgrounds, glassmorphism, and smooth animations
- **📊 Analytics Integration**: Google Analytics tracking for user behavior insights
- **♿ Accessible**: Semantic HTML and ARIA-compliant components

## Tech Stack

### Core Technologies
- **[Next.js 13.4](https://nextjs.org/)** - React framework with App Router
- **[React 18.2](https://react.dev/)** - UI library
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Animation Libraries
- **[Magic UI](https://magicui.design/)** - Premium animated React components (20+ components integrated)
  - `SparklesText` - Animated sparkle effects on text
  - `ShimmerButton` - Gradient shimmer CTA buttons
  - `BlurFade` - Smooth blur fade-in animations
  - `Particles` - Interactive particle background effects
  - `Ripple` - Ripple effect animations
  - `BorderBeam` - Animated border beams
  - `NumberTicker` - Smooth number counting animations
  - `WordRotate` - Rotating text animations
  - `Marquee` - Auto-scrolling content
  - `InteractiveHoverButton` - Hover effect buttons
  - And more...
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library powering Magic UI
- **[Ant Design 5.7](https://ant.design/)** - Enterprise UI components for layout and navigation
- **[Lucide React](https://lucide.dev/)** - Modern icon library

### Additional Libraries
- **[PhotoSwipe](https://photoswipe.com/)** - Gallery lightbox for portfolio images
- **[Swiper](https://swiperjs.com/)** - Touch slider for testimonials
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon collections
- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixes

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher)
- [Yarn](https://yarnpkg.com/) (preferred package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and visit: `http://localhost:3000`

---

## Project Structure

```plaintext
.
├── app/                          # Next.js 13 App Router
│   ├── components/               # Page-specific components
│   │   ├── HeroSectionNew.tsx   # Hero with Magic UI effects
│   │   ├── Portfolio.tsx         # Case studies section
│   │   ├── TestimonialsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── EnhancedCTASection.tsx
│   │   ├── MySkills.tsx          # Tech stack with icon cloud
│   │   ├── ProfessionalExperienceTimeline.tsx
│   │   ├── HackathonAIInnovations.tsx
│   │   └── Footer.tsx
│   ├── data/                     # Static data and configuration
│   ├── hooks/                    # Custom React hooks
│   ├── styles/                   # Component-specific styles
│   ├── blog/                     # Blog section
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with SEO schemas
│   └── page.tsx                  # Homepage with section orchestration
├── components/ui/                # Magic UI components (20+ files)
│   ├── sparkles-text.tsx         # Animated sparkle effects
│   ├── shimmer-button.tsx        # Shimmer gradient buttons
│   ├── blur-fade.tsx             # Fade-in animations
│   ├── particles.tsx             # Particle effects
│   ├── ripple.tsx                # Ripple animations
│   ├── border-beam.tsx           # Border animations
│   ├── number-ticker.tsx         # Number counting
│   ├── word-rotate.tsx           # Text rotation
│   ├── marquee.tsx               # Auto-scroll
│   ├── icon-cloud.tsx            # 3D icon cloud
│   ├── scroll-progress.tsx       # Progress bar
│   ├── interactive-hover-button.tsx
│   ├── text-animate.tsx          # Text animations
│   ├── warp-background.tsx       # Background effects
│   ├── hyper-text.tsx            # Hyper text effect
│   ├── aurora-text.tsx           # Aurora gradient text
│   ├── animated-shiny-text.tsx
│   ├── animated-gradient-text.tsx
│   ├── magic-card.tsx            # Card with effects
│   ├── neon-gradient-card.tsx
│   ├── rainbow-button.tsx
│   ├── shine-border.tsx
│   ├── meteors.tsx               # Meteor effects
│   ├── dot-pattern.tsx           # Background patterns
│   └── ... (shadcn/ui base components)
├── lib/
│   └── utils.ts                  # Utility functions (cn, etc.)
├── public/                       # Static assets
│   ├── saad-photo.jpg           # Profile image
│   └── org/                      # Company logos
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS + Magic UI animations
├── tsconfig.json                 # TypeScript configuration
├── components.json               # shadcn/ui configuration
└── package.json                  # Dependencies and scripts
```

---

## Scripts

- **`yarn dev`**: Starts the development server at `http://localhost:3000`
- **`yarn build`**: Builds the application for production with optimizations
- **`yarn start`**: Runs the production build locally
- **`yarn lint`**: Runs ESLint to check code quality
- **`yarn deploy`**: Full deployment pipeline to GitHub Pages
  - Builds the Next.js app
  - Optimizes images with `next-export-optimize-images`
  - Creates `.nojekyll` file for proper GitHub Pages deployment
  - Commits and pushes to `gh-pages` branch

---

## Key Components

### Hero Section (`HeroSectionNew.tsx`)
The main landing section featuring:
- **Particles background** with floating animated particles
- **SparklesText** for the revenue highlight ($19M+)
- **WordRotate** showcasing rotating service descriptions
- **NumberTicker** for animated statistics
- **ShimmerButton** primary CTA with gradient shimmer effect
- **BlurFade** staggered entrance animations
- **Ripple** effect behind profile image
- **Marquee** for trusted company logos

### Portfolio Section
- Case studies with hover effects
- PhotoSwipe gallery integration
- Responsive grid layout

### Skills Section
- **IconCloud** - 3D rotating cloud of technology icons
- Categorized skill display
- Visual technology stack representation

### Enhanced CTA Section
- Gradient backgrounds with warp effects
- Multiple conversion paths
- Interactive buttons with hover effects

### Scroll Progress
- Fixed top progress bar
- Gradient purple-to-orange color scheme
- Smooth scroll tracking

---

## Dependencies

### Core Dependencies
```json
{
  "next": "13.4.11",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "typescript": "5.0.4"
}
```

### UI & Styling
```json
{
  "tailwindcss": "3.3.2",
  "tailwindcss-animate": "1.0.7",
  "antd": "5.7.3",
  "framer-motion": "12.4.3",
  "motion": "12.34.1",
  "lucide-react": "0.468.0",
  "react-icons": "5.4.0"
}
```

### Magic UI Components
Magic UI components are integrated as standalone files in `components/ui/`. The components use:
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Radix UI** primitives for accessible base components

Key Magic UI components used:
- Sparkles Text
- Shimmer Button
- Blur Fade
- Particles
- Ripple
- Border Beam
- Number Ticker
- Word Rotate
- Marquee
- Interactive Hover Button
- Icon Cloud
- Scroll Progress
- Text Animate
- Warp Background
- Hyper Text
- Aurora Text
- Animated Shiny Text
- Animated Gradient Text
- Magic Card
- Neon Gradient Card
- Rainbow Button
- Shine Border
- Meteors
- Dot Pattern

### Additional Libraries
```json
{
  "photoswipe": "5.4.4",
  "react-photoswipe-gallery": "3.0.2",
  "swiper": "11.1.15",
  "react-tooltip": "5.19.0",
  "sharp": "0.32.5",
  "next-export-optimize-images": "3.1.0"
}
```

### Utility Libraries
```json
{
  "clsx": "2.1.1",
  "tailwind-merge": "2.5.5",
  "class-variance-authority": "0.7.1"
}
```

For the complete list of dependencies with exact versions, check [`package.json`](package.json).

---

## SEO & Performance

### Structured Data
The site implements comprehensive schema.org structured data:
- **Person Schema**: Professional profile and contact information
- **ProfessionalService Schema**: Service offerings and catalog
- **FAQPage Schema**: Common questions and answers

### Performance Optimizations
- Next.js automatic code splitting
- Image optimization with `next/image` and Sharp
- Lazy loading for below-the-fold content
- Preloading critical fonts (Roboto)
- Minimal render-blocking resources

### Analytics
- Google Analytics 4 (GA4) integration
- Custom event tracking for CTAs
- User behavior insights

---

## Development

### Adding New Magic UI Components

To add additional Magic UI components:

1. Visit [magicui.design](https://magicui.design/)
2. Browse the component library
3. Copy the component code
4. Create a new file in `components/ui/`
5. Import and use in your pages

Example:
```tsx
import { SparklesText } from '@/components/ui/sparkles-text'

<SparklesText 
  colors={{ first: "#9333ea", second: "#f97316" }}
  sparklesCount={6}
>
  Your Text Here
</SparklesText>
```

### Customization

**Colors**: The site uses a purple-orange gradient theme. Update in:
- `tailwind.config.js` - Tailwind color palette
- `app/globals.css` - CSS variables
- Component prop overrides

**Animations**: Modify animation durations and easing in:
- `tailwind.config.js` - Tailwind animations
- Individual Magic UI component props
- `app/globals.css` - Global animation styles

---

## Deployment

The site is deployed on **GitHub Pages** using the automated deployment script.

### Deployment Process

```bash
yarn deploy
```

This command:
1. Runs `next build` to create an optimized production build
2. Exports static files to the `out/` directory
3. Optimizes images using `next-export-optimize-images`
4. Creates `.nojekyll` file to prevent Jekyll processing
5. Commits the output directory
6. Pushes to the `gh-pages` branch using git subtree

### Manual Deployment

If you need to deploy manually:

```bash
# Build the site
yarn build

# Optimize images
yarn next-export-optimize-images

# Create .nojekyll file
touch out/.nojekyll

# Deploy to gh-pages
git add out/
git commit -m "Deploy"
git subtree push --prefix out origin gh-pages
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Animations and effects degrade gracefully on older browsers.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it as a reference or template for your own projects.

---

## Author

**Max Saad** - AI Solutions Engineer  
[Website](https://mazemax.github.io) • [LinkedIn](https://www.linkedin.com/in/maxsaad) • [GitHub](https://github.com/mazemax)

Helping enterprises generate $19M+ revenue with AI solutions. Award-winning engineer with 12+ years of experience in full-stack development and AI implementation.

---

## Acknowledgments

- **[Magic UI](https://magicui.design/)** - Premium animated React components
- **[shadcn/ui](https://ui.shadcn.com/)** - Base component architecture
- **[Vercel](https://vercel.com/)** - Next.js framework and inspiration
- **[Ant Design](https://ant.design/)** - Enterprise UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

---

## Contact

For collaboration opportunities, consultation, or questions:

- 📧 Email: to.msaads@gmail.com
- 📅 [Book a Call](https://calendly.com/maxsaad)
- 💬 [WhatsApp](https://wa.me/60102440732)
- 💼 [LinkedIn](https://www.linkedin.com/in/maxsaad)

---

**Last Updated**: February 2026 - Revamp 2026 🚀
