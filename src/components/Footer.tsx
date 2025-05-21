
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-playfair font-semibold">
              Ella Holland
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Digital Designer & Social Media Strategist
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ella@example.com"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <Link
              to="/admin"
              className="p-2 rounded-full hover:bg-accent/10 transition-colors flex items-center gap-2 text-sm text-muted-foreground"
            >
              <User className="w-4 h-4" />
              Admin Login
            </Link>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ella Holland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
