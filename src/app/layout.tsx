import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ginni-interior.com'),
  title: {
    default: 'Ginni Interior - Best Interior Designer in Lucknow | Home & Office Interiors',
    template: '%s | Ginni Interior Lucknow'
  },
  description:
    'Premier interior designer in Lucknow specializing in residential and commercial spaces. Transform your home, office, or villa with luxury interior design solutions in Lucknow. Award-winning designs, 3D visualization & expert consultation.',
  keywords: [
    'interior designer in Lucknow',
    'interior design Lucknow',
    'home interior Lucknow',
    'best interior designer Lucknow',
    'office interior Lucknow',
    'commercial interior design Lucknow',
    'luxury interior Lucknow',
    'modular kitchen Lucknow',
    'bedroom interior Lucknow',
    'living room design Lucknow',
    'villa interior Lucknow',
    '3D interior design Lucknow',
    'interior renovation Lucknow',
    'affordable interior designer Lucknow',
    'Ginni Interior Lucknow',
    'top interior designer in Lucknow',
    'residential interior Lucknow',
    'interior decorator Lucknow'
  ],
  authors: [{ name: 'Ginni Interior', url: 'https://ginni-interior.com' }],
  creator: 'Ginni Interior',
  publisher: 'Ginni Interior',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ginni Interior - Best Interior Designer in Lucknow | Home & Office Interiors',
    description:
      'Transform your space with Lucknow\'s leading interior designer. Specializing in residential & commercial interiors with 10+ years of experience. Get free consultation today!',
    url: 'https://ginni-interior.com',
    siteName: 'Ginni Interior',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/ginni-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Ginni Interior - Best Interior Designer in Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginni Interior - Best Interior Designer in Lucknow',
    description: 'Transform your space with Lucknow\'s leading interior designer. Residential & commercial design experts.',
    images: ['/ginni-logo.svg'],
    creator: '@ginniinterior',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ginni-interior.com',
  },
  category: 'Interior Design',
  classification: 'Interior Design Services in Lucknow',
  icons: {
    icon: '/ginni-logo.svg',
    apple: '/ginni-logo.svg',
    shortcut: '/ginni-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Local Business SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignService',
    '@id': 'https://ginni-interior.com',
    name: 'Ginni Interior',
    image: 'https://ginni-interior.com/ginni-logo.svg',
    description: 'Premier interior designer in Lucknow specializing in residential and commercial spaces. Award-winning interior design solutions.',
    url: 'https://ginni-interior.com',
    telephone: '+91-XXXXXXXXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8467,
      longitude: 80.9462,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Lucknow',
    },
    sameAs: [
      'https://www.facebook.com/ginniinterior',
      'https://www.instagram.com/ginniinterior',
      'https://www.linkedin.com/company/ginniinterior',
      'https://twitter.com/ginniinterior',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Interior Design in Lucknow',
            description: 'Complete home interior design including living rooms, bedrooms, kitchens, and more.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Interior Design in Lucknow',
            description: 'Professional office and commercial space interior design solutions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '3D Visualization Services',
            description: 'Photorealistic 3D rendering and virtual tours of your interior design.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Renovation in Lucknow',
            description: 'Complete renovation services to modernize existing spaces.',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
