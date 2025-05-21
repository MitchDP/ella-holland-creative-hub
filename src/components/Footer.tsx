
import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark/20 py-12 px-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="font-playfair text-xl mb-4">Ella Holland</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Digital designer and social media strategist based in Oregon, creating impactful visual stories.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-pink-dark transition-colors">Home</Link>
              <Link to="/projects" className="text-sm hover:text-pink-dark transition-colors">Projects</Link>
              <Link to="/about" className="text-sm hover:text-pink-dark transition-colors">About</Link>
              <Link to="/contact" className="text-sm hover:text-pink-dark transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-dark transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noreferrer" className="hover:text-pink-dark transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.321 5.562a5.124 5.124 0 01-3.528-1.39v6.337c0 4.328-3.522 7.85-7.849 7.85a7.821 7.821 0 01-4.442-1.376 7.845 7.845 0 0012.291-6.474V6.543c.954.336 1.939.523 2.95.526V3.581c-1.624-.029-3.015-1.421-3.029-3.044h-2.78v15.53a3.453 3.453 0 01-3.454 3.454 3.453 3.453 0 01-3.454-3.454 3.453 3.453 0 013.454-3.454c.254 0 .498.03.736.076V8.520a7.782 7.782 0 00-.736-.037 7.85 7.85 0 00-7.85 7.85c0 4.327 3.522 7.85 7.85 7.85 4.327 0 7.849-3.523 7.849-7.85V9.612c1.02.93 2.363 1.5 3.837 1.5V7.625a5.135 5.135 0 01-2.896-.995" />
                </svg>
              </a>
              <a href="mailto:ella@example.com" className="hover:text-pink-dark transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Ella Holland. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
