import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white/50 border-t border-white/20 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-display text-primary">Ananya Paul</h3>
          <p className="text-sm text-muted-foreground mt-2">
            AI Engineer Enthusiast & Fullstack Developer
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-md transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-md transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-md transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:contact@ananya.dev"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-md transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
