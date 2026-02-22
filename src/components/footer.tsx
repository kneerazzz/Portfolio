"use client";

import { IconArticle } from "@tabler/icons-react";
import { Instagram, Coffee, Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/kneerazzz", 
      icon: <SiGithub className="w-5 h-5" />,
      hoverColor: "hover:text-white",
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/kneerazzz", 
      icon: <SiLinkedin className="w-5 h-5" />,
      hoverColor: "hover:text-blue-400",
    },
    { 
      name: "X (Twitter)", 
      url: "https://x.com/kneerazzz", 
      icon: <SiX className="w-5 h-5" />,
      hoverColor: "hover:text-gray-100",
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/kneerazzz", 
      icon: <Instagram className="w-5 h-5" />,
      hoverColor: "hover:text-pink-500",
    },
    { 
      name: "Blog", 
      url: "https://blog.com/kneerazzz", 
      icon: <IconArticle className="w-6 h-6" />,
      hoverColor: "hover:text-purple-400",
    }
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black via-gray-900 to-transparent pb-2 px-4 border-t border-white/5 mt-20">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        
        {/* Engaging Headline */}
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
            Let&apos;s build something extraordinary.
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            I&apos;m always up for a chat about code, AI, or the latest tech drama. 
            Come say hi, or fuel my next commit with a coffee.
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-6 md:gap-8">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${link.hoverColor}`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Coffee Button (Call to Action) */}
        <div>
            <a
              href="https://buymeacoffee.com/kneerazzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold text-sm group shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              <Coffee className="w-4 h-4 group-hover:animate-bounce" />
              <span>Fuel the Code</span>
            </a>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
            <p>© {currentYear} Neeraj (Troyy). All rights reserved.</p>
            <p className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                Built with <span className="text-white">Next.js</span>, <span className="text-blue-400">Tailwind</span> & <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            </p>
        </div>
      </div>
    </footer>
  );
}