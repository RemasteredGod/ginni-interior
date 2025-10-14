import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description:
    'The page you are looking for does not exist. Explore our interior design services in Kanpur.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl animate-bounce">🏠</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900">
            Oops! Room Not Found
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Looks like this page got redesigned out of existence! Don&apos;t
            worry, we have plenty of beautiful spaces to explore.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
          <Link
            href="/"
            className="group relative overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">🏡 Back to Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>

          <Link
            href="/services"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">✨ Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>

          <Link
            href="/portfolio"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">🎨 View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>

          <Link
            href="/blog"
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">📚 Read Blog</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </div>

        {/* Popular Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
            Popular Services in Kanpur
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link
              href="/services/residential-interior-design"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Residential Design
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Commercial Design
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Modular Kitchen
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              3D Visualization
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Office Interior
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Villa Design
            </Link>
            <Link
              href="/services"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Renovation
            </Link>
            <Link
              href="/testimonials"
              className="text-neutral-600 hover:text-amber-600 transition-colors font-medium"
            >
              Client Reviews
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 max-w-2xl mx-auto text-white">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Need Help Finding Something?
          </h3>
          <p className="text-neutral-300 mb-6">
            Our team is here to assist you with all your interior design needs
            in Kanpur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919026353342"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              📞 Call: +91 9026353342
            </a>
            <a
              href="mailto:contact@ginni-interior.com"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>

        {/* Search Suggestion */}
        <p className="mt-8 text-neutral-500 text-sm">
          Looking for something specific? Try our{' '}
          <Link
            href="/"
            className="text-amber-600 hover:text-amber-700 font-semibold"
          >
            homepage
          </Link>{' '}
          or{' '}
          <Link
            href="/services"
            className="text-amber-600 hover:text-amber-700 font-semibold"
          >
            explore our services
          </Link>
        </p>
      </div>
    </div>
  );
}
