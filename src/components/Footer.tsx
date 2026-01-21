import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSvg from '@/assets/fullstack_logo_white.svg';

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoSvg} 
                alt="Fullstack Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              From product strategy to engineering, we help businesses transform ideas into high-performing digital products.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/product-strategy" className="hover:text-accent transition-colors">Product Strategy</Link></li>
              <li><Link to="/services/product-validation" className="hover:text-accent transition-colors">Validation</Link></li>
              <li><Link to="/services/build" className="hover:text-accent transition-colors">Engineering</Link></li>
              <li><Link to="/services/qa" className="hover:text-accent transition-colors">QA & Testing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/work" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/about/team" className="hover:text-accent transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/company/join-full-stack/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg border border-border/50 hover:border-accent/30 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/joinfullstack" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg border border-border/50 hover:border-accent/30 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/joinfullstack" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg border border-border/50 hover:border-accent/30 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/JoinFullStackDev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg border border-border/50 hover:border-accent/30 transition-colors" 
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FullStack. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link to="/security" className="hover:text-accent transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
