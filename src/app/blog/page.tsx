import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Interior Design Blog | Tips, Trends & Ideas for Kanpur Homes',
  description:
    'Expert interior design tips, latest trends, and home decor ideas for Kanpur residents. Learn from professional interior designers at Ginni Interior.',
  keywords: [
    'interior design blog',
    'home decor tips Kanpur',
    'interior design trends 2025',
    'home renovation ideas',
    'interior design inspiration',
  ],
  alternates: {
    canonical: 'https://ginni-interior.com/blog',
  },
  openGraph: {
    title: 'Interior Design Blog | Ginni Interior Kanpur',
    description:
      'Get expert interior design tips, trends, and inspiration for your Kanpur home.',
    url: 'https://ginni-interior.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'top-10-interior-design-trends-2025-lucknow',
    title: 'Top 10 Interior Design Trends for 2025 in Kanpur',
    excerpt:
      'Discover the latest interior design trends that are transforming homes across Kanpur. From sustainable materials to smart home integration.',
    date: '2025-01-15',
    category: 'Trends',
    image: '/1.jpeg',
    readTime: '5 min read',
  },
  {
    slug: 'modular-kitchen-design-guide-lucknow',
    title: 'Complete Guide to Modular Kitchen Design in Kanpur',
    excerpt:
      'Everything you need to know about planning, designing, and installing a modular kitchen in your Kanpur home.',
    date: '2025-01-10',
    category: 'Kitchen',
    image: '/3.jpeg',
    readTime: '8 min read',
  },
  {
    slug: 'small-apartment-interior-design-tips',
    title: '15 Smart Ideas for Small Apartment Interiors',
    excerpt:
      'Maximize space and style in your compact Kanpur apartment with these expert interior design tips and tricks.',
    date: '2025-01-05',
    category: 'Tips',
    image: '/5.jpeg',
    readTime: '6 min read',
  },
  {
    slug: 'cost-of-interior-design-lucknow-2025',
    title: 'Interior Design Cost Guide for Kanpur Homes in 2025',
    excerpt:
      'Understand the costs involved in interior design projects in Kanpur with our comprehensive pricing guide.',
    date: '2024-12-28',
    category: 'Guide',
    image: '/2.jpeg',
    readTime: '7 min read',
  },
  {
    slug: 'bedroom-color-schemes-2025',
    title: 'Best Bedroom Color Schemes for Peaceful Sleep',
    excerpt:
      'Choose the perfect color palette for your bedroom to create a relaxing and restful environment.',
    date: '2024-12-20',
    category: 'Bedroom',
    image: '/4.jpeg',
    readTime: '4 min read',
  },
  {
    slug: 'sustainable-interior-design-lucknow',
    title: 'Sustainable Interior Design: Eco-Friendly Homes in Kanpur',
    excerpt:
      'Learn how to create beautiful, environmentally conscious interiors with sustainable materials and practices.',
    date: '2024-12-15',
    category: 'Sustainability',
    image: '/6.jpeg',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ginni Interior Design Blog',
    description:
      'Expert interior design tips, trends, and ideas for Kanpur homes',
    url: 'https://ginni-interior.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Ginni Interior',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ginni-interior.com/ginni-logo.svg',
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://ginni-interior.com/blog/${post.slug}`,
      image: `https://ginni-interior.com${post.image}`,
      author: {
        '@type': 'Organization',
        name: 'Ginni Interior',
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
                <li className="text-muted-foreground">Blog</li>
              </ol>
            </nav>

            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Interior Design Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert tips, latest trends, and inspiring ideas for your Kanpur
                home
              </p>
            </header>

            {/* Featured Post */}
            <article className="mb-16 border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-primary text-sm font-semibold mb-2">
                    FEATURED POST
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="hover:text-primary transition"
                    >
                      {blogPosts[0].title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time>
                      {new Date(blogPosts[0].date).toLocaleDateString('en-IN')}
                    </time>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                    <span>•</span>
                    <span className="text-primary">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="text-primary font-semibold">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="hover:text-primary transition">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Categories */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-4">
                {[
                  'All Posts',
                  'Trends',
                  'Tips',
                  'Kitchen',
                  'Bedroom',
                  'Guide',
                  'Sustainability',
                ].map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category
                      .toLowerCase()
                      .replace(' ', '-')}`}
                    className="px-6 py-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mt-16 bg-secondary/50 p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest interior design tips, trends, and exclusive
                offers delivered to your inbox every month
              </p>
              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border"
                  aria-label="Email address"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition">
                  Subscribe
                </button>
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
                    Professional interior design services
                  </p>
                </Link>
                <Link
                  href="/portfolio"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Portfolio</h3>
                  <p className="text-sm text-muted-foreground">
                    View our completed projects
                  </p>
                </Link>
                <Link
                  href="/contact"
                  className="p-4 border rounded-lg hover:border-primary transition"
                >
                  <h3 className="font-semibold">Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Get expert advice today
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
