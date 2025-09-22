import { Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ginniinterior" },
    { name: "Pinterest", icon: Facebook, href: "https://pinterest.com/ginniinterior" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ginniinterior" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-ginni-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/ginni-logo.svg"
                alt="Ginni Interior Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                Ginni Interior
              </span>
            </div>
            <p className="text-ginni-grey-300 mb-6 max-w-md">
              Transforming spaces with modern elegance. We create beautiful, functional interiors
              that reflect your unique style and enhance your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-ginni-grey-300 hover:text-ginni-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-ginni-grey-300">
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@ginninterior.com</p>
              <p>Address: 123 Design Street<br />New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-ginni-grey-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ginni-grey-400 hover:text-ginni-gold-400 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-ginni-grey-400 text-sm">
            © {new Date().getFullYear()} Ginni Interior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
