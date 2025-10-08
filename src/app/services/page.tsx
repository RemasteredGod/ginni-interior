import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Interior Design Services in Lucknow | Ginni Interior',
  description:
    'Explore our comprehensive interior design services in Lucknow including residential, commercial, modular kitchen, bedroom design, 3D visualization, and complete home renovation solutions.',
  keywords: [
    'interior design services Lucknow',
    'home interior services',
    'commercial interior services',
    'interior design packages Lucknow',
  ],
  alternates: {
    canonical: 'https://ginni-interior.com/services',
  },
  openGraph: {
    title: 'Interior Design Services in Lucknow | Ginni Interior',
    description:
      'Complete interior design services for homes and offices in Lucknow. Get expert consultation and customized design solutions.',
    url: 'https://ginni-interior.com/services',
  },
};

const services = [
  {
    title: 'Residential Interior Design',
    slug: 'residential-interior-design',
    description:
      'Transform your home with our expert residential interior design services in Lucknow.',
    image: '/1.jpeg',
    keywords: 'Home interior, villa design, apartment interior',
  },
  {
    title: 'Commercial Interior Design',
    slug: 'commercial-interior-design',
    description:
      'Professional office and commercial space design solutions for businesses in Lucknow.',
    image: '/2.jpeg',
    keywords: 'Office interior, retail design, workspace design',
  },
  {
    title: 'Modular Kitchen Design',
    slug: 'modular-kitchen-design',
    description:
      'Modern, functional, and beautiful modular kitchen designs tailored to your needs.',
    image: '/3.jpeg',
    keywords: 'Modular kitchen, kitchen renovation, smart kitchen',
  },
  {
    title: 'Bedroom Interior Design',
    slug: 'bedroom-interior-design',
    description:
      'Create your dream bedroom with our luxury and comfortable bedroom interior designs.',
    image: '/4.jpeg',
    keywords: 'Master bedroom, kids bedroom, bedroom makeover',
  },
  {
    title: '3D Visualization',
    slug: '3d-visualization',
    description:
      "See your space before it's built with photorealistic 3D rendering and virtual tours.",
    image: '/5.jpeg',
    keywords: '3D design, virtual reality, interior rendering',
  },
  {
    title: 'Complete Home Renovation',
    slug: 'home-renovation',
    description:
      'Full-service home renovation and remodeling solutions in Lucknow.',
    image: '/6.jpeg',
    keywords: 'Home renovation, remodeling, interior makeover',
  },
];

export default function ServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Interior Design Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ginni Interior',
      areaServed: 'Lucknow',
    },
    areaServed: {
      '@type': 'City',
      name: 'Lucknow',
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
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Interior Design Services in Lucknow
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From residential to commercial spaces, we offer comprehensive
                interior design solutions tailored to your vision and budget.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.slug}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} in Lucknow - Ginni Interior`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.keywords}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{service.description}</p>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <section className="mt-16 bg-secondary/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why Choose Our Services?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-2">
                    10+ Years Experience
                  </h3>
                  <p>
                    Serving Lucknow with excellence in interior design since
                    2014
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-2">
                    500+ Happy Clients
                  </h3>
                  <p>
                    Successfully completed projects across residential and
                    commercial sectors
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-2">
                    Free Consultation
                  </h3>
                  <p>
                    Get expert advice and personalized design solutions at no
                    cost
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg">Request a Free Consultation</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
