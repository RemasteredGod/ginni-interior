import { Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/ginni_interior/',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61580059183159',
    },
    
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceAreas = [
    'Gomti Nagar',
    'Hazratganj',
    'Aliganj',
    'Indira Nagar',
    'Alambagh',
    'Mahanagar',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/ginni-logo.svg"
                alt="Ginni Interior Logo - Best Interior Designer in Lucknow"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                Ginni Interior
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Lucknow&apos;s premier interior design studio. We create beautiful,
              functional interiors that reflect your unique style. Serving residential 
              and commercial clients across Lucknow with over 10 years of excellence.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-amber-400 mb-2">Keywords:</p>
              <p>Interior Designer Lucknow • Home Interior • Office Design • 
              Modular Kitchen • 3D Visualization • Renovation Services</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas in Lucknow */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm">
                  • {area}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-3">& All of Lucknow</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><strong>Phone:</strong></p>
              <p>+91 9026353342</p>
              <p className="pt-2"><strong>Email:</strong></p>
              <p>abhaysharmaginnni@gmail.com</p>
              <p className="pt-2"><strong>Address:</strong></p>
              <p>
                202-F, Harjinder Nagar, Ramadevi<br />
                Kanpur, Uttar Pradesh<br />
                India
              </p>
              <p className="pt-2 text-amber-400 font-semibold">
                Serving Lucknow & Nearby Areas
              </p>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ginni Interior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
