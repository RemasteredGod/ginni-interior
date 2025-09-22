# Ginni Interior - Modern Interior Design Studio

A modern, responsive Next.js website for Ginni Interior, featuring elegant design with smooth animations and professional presentation.

## Features

- **Modern Next.js 15** with App Router
- **Tailwind CSS** for styling with custom color palette
- **Framer Motion** for smooth animations
- **shadcn/ui** components for consistent UI
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** with proper meta tags
- **TypeScript** for type safety

## Sections

1. **Hero Section** - Eye-catching landing with call-to-action
2. **About Section** - Company story and values
3. **Services Section** - Service cards with detailed features
4. **Portfolio Section** - Image gallery with hover effects
5. **Testimonials Section** - Client reviews carousel
6. **Contact Section** - Contact form and information

## Color Palette

- **Primary Gold**: `#f0ba4a` (ginni-gold-600)
- **Beige**: `#ecd79a` (ginni-beige-500)
- **Grey**: `#6b7280` (ginni-grey-500)
- **Clean backgrounds** with soft, elegant tones

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── navigation.tsx # Navigation bar
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── portfolio-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
└── lib/
    └── utils.ts       # Utility functions
```

## Customization

The website uses a custom color palette defined in `tailwind.config.ts`. You can modify:

- Colors in the `ginni-*` color variables
- Typography using Inter and Playfair Display fonts
- Animations and transitions in individual components
- Content and images in each section

## Deployment

The easiest way to deploy this Next.js app is to use [Vercel Platform](https://vercel.com/new).

## License

This project is created for Ginni Interior design studio.
