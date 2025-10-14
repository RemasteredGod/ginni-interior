// Use this to generate FAQ schema for your website
// Add to src/app/layout.tsx or create a separate FAQ page

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best interior designer in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ginni Interior is one of Kanpur's top-rated interior designers with 10+ years of experience, 500+ completed projects, and a 4.9-star rating. We specialize in residential and commercial interior design across Civil Lines, Swaroop Nagar, Kidwai Nagar, and all of Kanpur.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does interior design cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interior design costs in Kanpur vary based on project scope. On average: Residential design ranges from ₹1,500-3,000 per sq ft, modular kitchens from ₹1.5-4 lakhs, and full home interiors from ₹8-25 lakhs. Contact Ginni Interior for a free consultation and accurate quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Ginni Interior offer in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ginni Interior offers comprehensive interior design services in Kanpur including: Residential interior design, Commercial office interiors, Modular kitchen design, Bedroom and living room design, Complete home renovation, 3D visualization and virtual tours, Vastu-compliant designs, and Turnkey project management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas in Kanpur does Ginni Interior serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ginni Interior serves all areas of Kanpur including Civil Lines, Swaroop Nagar, Kidwai Nagar, Govind Nagar, Kakadeo, Kalyanpur, Harsh Nagar, Panki, Shastri Nagar, Barra, and surrounding areas of Kanpur and Uttar Pradesh.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an interior design project take in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines vary by scope. Typical timelines: Single room design: 2-4 weeks, Complete apartment (2-3 BHK): 2-3 months, Villa/large homes: 3-6 months, Office interiors: 1-3 months. Ginni Interior provides detailed timelines during consultation with on-time project delivery guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free consultation for interior design in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Ginni Interior offers free initial consultation for all interior design projects in Kanpur. We visit your site, understand your requirements, provide design ideas, and deliver a detailed quote at no charge. Contact us at +91-XXXXXXXXXX to schedule your free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ginni Interior provide 3D visualization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We provide photorealistic 3D visualization and virtual tours for all our interior design projects in Kanpur. This helps you visualize your space before construction begins and make informed design decisions. We offer multiple design options and unlimited revisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Ginni Interior different from other designers in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ginni Interior stands out with: 10+ years of proven experience in Kanpur, 500+ successful projects with 4.9★ rating, Personalized designs tailored to your lifestyle, Transparent pricing with no hidden costs, On-time project delivery guarantee, Premium quality materials, Dedicated project manager, After-sales support, and Deep understanding of Kanpur's architectural heritage.",
      },
    },
  ],
};

// BreadcrumbList Schema - helps Google understand your site structure
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ginni-interior.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://ginni-interior.com/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Portfolio',
      item: 'https://ginni-interior.com/#portfolio',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://ginni-interior.com/#contact',
    },
  ],
};

// Review Schema - showcase customer reviews
// Note: Reviews should be attached to LocalBusiness or Organization, not used standalone
export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: 'Client Name',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  reviewBody:
    'Excellent interior design service in Kanpur. The team at Ginni Interior transformed our 3BHK apartment beautifully. Highly professional and creative.',
};

// Organization Schema - establishes brand identity
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ginni Interior',
  url: 'https://ginni-interior.com',
  logo: 'https://ginni-interior.com/ginni-logo.svg',
  description:
    'Premier interior design company in Kanpur specializing in residential and commercial spaces',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '226001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  sameAs: [
    'https://www.facebook.com/ginniinterior',
    'https://www.instagram.com/ginni_interior/',
    'https://www.linkedin.com/company/ginniinterior',
    'https://twitter.com/ginniinterior',
  ],
};
