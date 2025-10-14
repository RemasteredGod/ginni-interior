import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Ginni Interior Kanpur',
  description:
    'Read genuine reviews and testimonials from our satisfied clients across Kanpur. See why Ginni Interior is the top-rated interior designer in Kanpur with 4.9/5 rating.',
  keywords: [
    'interior designer reviews Kanpur',
    'Ginni Interior testimonials',
    'client reviews interior design',
    'best interior designer Kanpur reviews',
  ],
  alternates: {
    canonical: 'https://ginni-interior.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Ginni Interior Kanpur',
    description:
      '500+ happy clients and 4.9/5 rating. Read authentic reviews from our interior design clients in Kanpur.',
    url: 'https://ginni-interior.com/testimonials',
  },
};

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Civil Lines, Kanpur',
    rating: 5,
    date: '2024-09-15',
    review:
      'Ginni Interior transformed our 3BHK apartment beautifully. The team was professional, creative, and completed the project on time. Highly recommended for anyone looking for quality interior design in Kanpur!',
    project: 'Residential Interior',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Swaroop Nagar, Kanpur',
    rating: 5,
    date: '2024-08-20',
    review:
      'Excellent work on our office interior. The design is modern, functional, and perfectly suits our brand identity. The entire process was smooth and transparent.',
    project: 'Commercial Office',
  },
  {
    id: 3,
    name: 'Anjali Verma',
    location: 'Kidwai Nagar, Kanpur',
    rating: 5,
    date: '2024-07-10',
    review:
      'I am extremely happy with my modular kitchen design. The team understood my requirements perfectly and delivered beyond expectations. The quality of materials used is top-notch.',
    project: 'Modular Kitchen',
  },
  {
    id: 4,
    name: 'Amit Singh',
    location: 'Govind Nagar, Kanpur',
    rating: 5,
    date: '2024-06-05',
    review:
      'Professional team with great attention to detail. They renovated our entire villa and the result is stunning. Worth every penny!',
    project: 'Complete Villa Interior',
  },
  {
    id: 5,
    name: 'Neha Gupta',
    location: 'Kakadeo, Kanpur',
    rating: 5,
    date: '2024-05-18',
    review:
      'Best interior designer in Kanpur! The 3D visualization helped us see exactly how our home would look. The execution was flawless.',
    project: 'Residential Interior',
  },
  {
    id: 6,
    name: 'Vikram Mishra',
    location: 'Kalyanpur, Kanpur',
    rating: 4,
    date: '2024-04-22',
    review:
      'Great experience working with Ginni Interior. The design team is creative and responsive. My bedroom interior looks amazing!',
    project: 'Bedroom Design',
  },
];

export default function TestimonialsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ginni-interior.com',
    name: 'Ginni Interior',
    url: 'https://ginni-interior.com',
    image: 'https://ginni-interior.com/ginni-logo.svg',
    description:
      'Premier interior designer in Kanpur specializing in residential and commercial spaces with 10+ years of experience.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Kanpur',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226001',
      addressCountry: 'IN',
    },
    telephone: '+91-XXXXXXXXXX',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.review,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-muted-foreground">Testimonials</li>
              </ol>
            </nav>

            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Client Reviews & Testimonials
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients across Kanpur have to say about their experience with
                Ginni Interior.
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-yellow-500 text-2xl">★★★★★</div>
                <div className="text-muted-foreground">(150+ Reviews)</div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.project}
                        </p>
                      </div>
                      <div className="text-yellow-500 text-lg">
                        {'★'.repeat(testimonial.rating)}
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic">
                      &quot;{testimonial.review}&quot;
                    </blockquote>
                    <time className="text-xs text-muted-foreground mt-4 block">
                      {new Date(testimonial.date).toLocaleDateString('en-IN', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Badges */}
            <section className="bg-secondary/50 p-12 rounded-lg text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">
                Trusted by 500+ Clients in Kanpur
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl mb-2">🏆</div>
                  <h3 className="font-semibold mb-2">Award Winning</h3>
                  <p className="text-sm text-muted-foreground">
                    Best Interior Designer Kanpur 2023
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">
                    5 Years Warranty on Work
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="font-semibold mb-2">On-Time Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    98% Projects Delivered on Schedule
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💰</div>
                  <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    No Hidden Costs
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Interior Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Join our growing family of satisfied clients
              </p>
              <Link href="/contact">
                <Button size="lg">Get Free Consultation</Button>
              </Link>
            </section>

            {/* Internal Links */}
            <nav className="mt-16" aria-label="Related Pages">
              <h2 className="text-2xl font-bold mb-6">Explore More</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="/portfolio"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">View Portfolio</h3>
                  <p className="text-sm text-muted-foreground">
                    See our completed projects
                  </p>
                </Link>
                <Link
                  href="/services"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Our Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore what we offer
                  </p>
                </Link>
                <Link
                  href="/contact"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Get in touch today
                  </p>
                </Link>
              </div>
            </nav>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
