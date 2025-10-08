import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Residential Interior Design in Lucknow | Home Interior Services',
  description: 'Expert residential interior design services in Lucknow. Transform your home, villa, or apartment with customized interior solutions. Get free consultation from Ginni Interior.',
  keywords: [
    'residential interior design Lucknow',
    'home interior Lucknow',
    'villa interior design',
    'apartment interior Lucknow',
    'luxury home interior',
    '2BHK interior Lucknow',
    '3BHK interior design',
  ],
  alternates: {
    canonical: 'https://ginni-interior.com/services/residential-interior-design',
  },
  openGraph: {
    title: 'Residential Interior Design in Lucknow | Ginni Interior',
    description: 'Transform your home with expert residential interior design services. 10+ years experience in Lucknow.',
    url: 'https://ginni-interior.com/services/residential-interior-design',
  },
};

export default function ResidentialInteriorPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Interior Design',
    serviceType: 'Interior Design',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ginni Interior',
      image: 'https://ginni-interior.com/ginni-logo.svg',
      '@id': 'https://ginni-interior.com',
      url: 'https://ginni-interior.com',
      telephone: '+91-XXXXXXXXXX',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Lucknow',
    },
    description:
      'Expert residential interior design services in Lucknow including complete home makeovers, villa interiors, and apartment design solutions.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
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
            {/* Breadcrumb Navigation */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
                <li>/</li>
                <li><Link href="/services" className="text-primary hover:underline">Services</Link></li>
                <li>/</li>
                <li className="text-muted-foreground">Residential Interior Design</li>
              </ol>
            </nav>

            <article>
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Residential Interior Design in Lucknow
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transform your house into a dream home with our expert residential interior design services in Lucknow
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <Image
                    src="/1.jpeg"
                    alt="Residential Interior Design in Lucknow by Ginni Interior"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why Choose Us for Home Interiors?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>10+ years of experience in residential interior design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Customized designs tailored to your lifestyle and budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete turnkey solutions from concept to completion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Premium quality materials and expert craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>On-time project delivery with transparent pricing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Residential Interior Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Living Room Design</h3>
                      <p>Create an inviting living space that reflects your personality and style</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Bedroom Interiors</h3>
                      <p>Design peaceful and comfortable bedrooms for the entire family</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Kitchen Design</h3>
                      <p>Modern modular kitchens that blend functionality with aesthetics</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Dining Area</h3>
                      <p>Elegant dining spaces perfect for family gatherings</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Bathroom Design</h3>
                      <p>Luxurious and functional bathroom interiors</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Complete Home</h3>
                      <p>End-to-end interior solutions for your entire home</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12 bg-secondary/50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">01</div>
                    <h3 className="font-semibold mb-2">Consultation</h3>
                    <p className="text-sm">Free on-site visit and requirement discussion</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">02</div>
                    <h3 className="font-semibold mb-2">Design & Planning</h3>
                    <p className="text-sm">3D visualization and detailed floor plans</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">03</div>
                    <h3 className="font-semibold mb-2">Execution</h3>
                    <p className="text-sm">Professional installation and quality control</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">04</div>
                    <h3 className="font-semibold mb-2">Handover</h3>
                    <p className="text-sm">Final walkthrough and project completion</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How much does residential interior design cost in Lucknow?</h3>
                    <p className="text-muted-foreground">
                      The cost varies based on space size, materials, and design complexity. We offer packages starting from ₹1,500 per sq ft. Contact us for a detailed quote.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How long does a home interior project take?</h3>
                    <p className="text-muted-foreground">
                      Typically, a complete home interior project takes 45-90 days depending on the scope of work.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you provide warranty on your work?</h3>
                    <p className="text-muted-foreground">
                      Yes, we provide up to 5 years warranty on our interior work and materials.
                    </p>
                  </div>
                </div>
              </section>

              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
                <p className="text-xl mb-6">Get a free consultation and quote today!</p>
                <Link href="/contact">
                  <Button size="lg">Request Free Consultation</Button>
                </Link>
              </div>
            </article>

            {/* Internal Links */}
            <nav className="mt-16" aria-label="Related Services">
              <h2 className="text-2xl font-bold mb-6">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/services/modular-kitchen-design" className="p-4 border rounded-lg hover:border-primary transition">
                  <h3 className="font-semibold">Modular Kitchen Design</h3>
                </Link>
                <Link href="/services/bedroom-interior-design" className="p-4 border rounded-lg hover:border-primary transition">
                  <h3 className="font-semibold">Bedroom Interior Design</h3>
                </Link>
                <Link href="/services/3d-visualization" className="p-4 border rounded-lg hover:border-primary transition">
                  <h3 className="font-semibold">3D Visualization</h3>
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
