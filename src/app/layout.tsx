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
    default:
      'Ginni Interior - Best Interior Designer in Kanpur | Home & Office Interiors',
    template: '%s | Ginni Interior Kanpur',
  },
  description:
    'Premier interior designer in Kanpur specializing in residential and commercial spaces. Transform your home, office, or villa with luxury interior design solutions in Kanpur. Award-winning designs, 3D visualization & expert consultation.',
  keywords: [
    'interior designer in Kanpur',
    'interior design Kanpur',
    'home interior Kanpur',
    'best interior designer Kanpur',
    'office interior Kanpur',
    'commercial interior design Kanpur',
    'luxury interior Kanpur',
    'modular kitchen Kanpur',
    'bedroom interior Kanpur',
    'living room design Kanpur',
    'villa interior Kanpur',
    '3D interior design Kanpur',
    'interior renovation Kanpur',
    'affordable interior designer Kanpur',
    'Ginni Interior Kanpur',
    'top interior designer in Kanpur',
    'residential interior Kanpur',
    'interior decorator Kanpur',
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
    title:
      'Ginni Interior - Best Interior Designer in Kanpur | Home & Office Interiors',
    description:
      "Transform your space with Kanpur's leading interior designer. Specializing in residential & commercial interiors with 10+ years of experience. Get free consultation today!",
    url: 'https://ginni-interior.com',
    siteName: 'Ginni Interior',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/ginni-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Ginni Interior - Best Interior Designer in Kanpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginni Interior - Best Interior Designer in Kanpur',
    description:
      "Transform your space with Kanpur's leading interior designer. Residential & commercial design experts.",
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
  classification: 'Interior Design Services in Kanpur',
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
    '@type': 'LocalBusiness',
    '@id': 'https://ginni-interior.com',
    name: 'Ginni Interior',
    image: 'https://ginni-interior.com/ginni-logo.svg',
    description:
      'Premier interior designer in Kanpur specializing in residential and commercial spaces. Award-winning interior design solutions.',
    url: 'https://ginni-interior.com',
    telephone: '+91-XXXXXXXXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Kanpur',
      addressRegion: 'Uttar Pradesh',
      postalCode: '208001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.4499,
      longitude: 80.3319,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Kanpur',
    },
    sameAs: [
      'https://www.facebook.com/ginniinterior',
      'https://www.instagram.com/ginniinterior',
      'https://www.linkedin.com/company/ginniinterior',
      'https://twitter.com/ginniinterior',
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="HyNo45VcnqYtm6iOK_GC09CTaDWSRS-hgXFUFIv_VxU"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Kanpur" />
        <meta name="geo.position" content="26.4499;80.3319" />
        <meta name="ICBM" content="26.4499, 80.3319" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
