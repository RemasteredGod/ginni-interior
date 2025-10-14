import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Interior Design Portfolio Kanpur | Our Completed Projects',
  description:
    'View our portfolio of completed interior design projects in Kanpur. Residential homes, commercial offices, villas, and more. Get inspired for your next project with Ginni Interior.',
  keywords: [
    'interior design portfolio Kanpur',
    'completed projects Kanpur',
    'interior design gallery',
    'home interior projects',
    'before after interior',
  ],
  alternates: {
    canonical: 'https://ginni-interior.com/portfolio',
  },
  openGraph: {
    title: 'Interior Design Portfolio | Ginni Interior Kanpur',
    description:
      'Explore our stunning portfolio of residential and commercial interior design projects in Kanpur.',
    url: 'https://ginni-interior.com/portfolio',
    images: [
      {
        url: '/1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Interior Design Portfolio - Ginni Interior Kanpur',
      },
    ],
  },
};

const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Villa Interior - Civil Lines',
    category: 'Residential',
    location: 'Civil Lines, Kanpur',
    image: '/1.jpeg',
    description: 'Luxurious 4BHK villa with contemporary design elements',
    area: '3500 sq ft',
  },
  {
    id: 2,
    title: 'Corporate Office - Swaroop Nagar',
    category: 'Commercial',
    location: 'Swaroop Nagar, Kanpur',
    image: '/2.jpeg',
    description: 'Professional office space with modern amenities',
    area: '5000 sq ft',
  },
  {
    id: 3,
    title: 'Modular Kitchen - Kidwai Nagar',
    category: 'Kitchen',
    location: 'Kidwai Nagar, Kanpur',
    image: '/3.jpeg',
    description: 'Smart modular kitchen with premium fittings',
    area: '200 sq ft',
  },
  {
    id: 4,
    title: 'Master Bedroom Suite - Govind Nagar',
    category: 'Bedroom',
    location: 'Govind Nagar, Kanpur',
    image: '/4.jpeg',
    description: 'Elegant master bedroom with walk-in wardrobe',
    area: '400 sq ft',
  },
  {
    id: 5,
    title: 'Luxury Apartment - Kakadeo',
    category: 'Residential',
    location: 'Kakadeo, Kanpur',
    image: '/5.jpeg',
    description: 'Complete 3BHK apartment interior design',
    area: '1800 sq ft',
  },
  {
    id: 6,
    title: 'Retail Showroom - Kalyanpur',
    category: 'Commercial',
    location: 'Kalyanpur, Kanpur',
    image: '/6.jpeg',
    description: 'Eye-catching retail space design',
    area: '2500 sq ft',
  },
];

export default function PortfolioPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Interior Design Portfolio - Ginni Interior',
    description: 'Portfolio of completed interior design projects in Kanpur',
    url: 'https://ginni-interior.com/portfolio',
    image: portfolioProjects.map((project) => ({
      '@type': 'ImageObject',
      contentUrl: `https://ginni-interior.com${project.image}`,
      name: project.title,
      description: project.description,
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
                <li className="text-muted-foreground">Portfolio</li>
              </ol>
            </nav>

            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Interior Design Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our collection of completed projects across Kanpur. Each
                project showcases our commitment to quality, creativity, and
                client satisfaction.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-lg border hover:shadow-xl transition-all"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Interior Design by Ginni Interior in ${project.location}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        📍 {project.location}
                      </span>
                      <span className="text-muted-foreground">
                        📐 {project.area}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-16 text-center bg-secondary/50 p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Want to See Your Space Transformed?
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Join our 500+ satisfied clients across Kanpur
              </p>
              <Link href="/contact">
                <Button size="lg">Start Your Project Today</Button>
              </Link>
            </section>

            {/* Trust Signals */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why Choose Ginni Interior
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <p className="font-semibold">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <p className="font-semibold">Years Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    98%
                  </div>
                  <p className="font-semibold">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5★</div>
                  <p className="font-semibold">Average Rating</p>
                </div>
              </div>
            </section>

            {/* Internal Links */}
            <nav className="mt-16" aria-label="Related Pages">
              <h2 className="text-2xl font-bold mb-6">Explore More</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="/services"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Our Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our interior design services
                  </p>
                </Link>
                <Link
                  href="/testimonials"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Client Testimonials</h3>
                  <p className="text-sm text-muted-foreground">
                    Read what our clients say
                  </p>
                </Link>
                <Link
                  href="/contact"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Get a free consultation
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
