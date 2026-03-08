"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, User, Github, Linkedin, X } from "lucide-react";
import { IconPuzzle, IconRocket, IconArticle } from "@tabler/icons-react";

export default function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  const navLinks = [
    { href: "/", icon: <Home size={18} />, label: "Home" },
    { href: "/#skills", icon: <IconPuzzle size={18} />, label: "Skills" },
    { href: "/#projects", icon: <IconRocket size={18} />, label: "Projects" },
    { href: "/about", icon: <User size={18} />, label: "About" },
  ];

  const socialLinks = [
    { href: "https://github.com/kneerazzz", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://x.com/kneerazzz", icon: <X size={18} />, label: "Twitter" },
    { href: "https://linkedin.com/in/kneerazzz", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "/", icon: <IconArticle size={18} />, label: "Blogs" },
  ];

  // 🔥 Track active section using IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const sections = ["skills", "projects"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: "-40% 0px -40% 0px" 
      }
    );

    const timeoutId = setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    // NEW: Detect when user scrolls back to the top of the page
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveHash(""); // Reset hash when near the top
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    // If we are NOT on the homepage, do standard matching
    if (pathname !== "/") return pathname === href;

    // If we ARE on the homepage:
    if (href === "/") {
      // Home icon is active only if no hash is active, or if heroSection is somehow triggered
      return activeHash === "" || activeHash === "#heroSection";
    }

    // For hash links (/#skills, /#projects)
    if (href.startsWith("/#")) {
      return activeHash === href.replace("/", "");
    }

    return false;
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="rounded-full w-212.5 max-lg:w-175 max-sm:w-87.5 px-2 py-1.75 bg-white/10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center shadow">
        <div className="flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`relative group px-1 rounded-full transition-all duration-300 hover:px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                  isActive(link.href)
                    ? "text-yellow-500"
                    : "text-black dark:text-white"
                }`}
              >
                {link.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-black/80 dark:bg-white/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {link.label}
                </span>
              </div>
            </Link>
          ))}

          <span className="hidden sm:block w-0.5 h-6 bg-gray-400 mx-2"></span>

          <div className="hidden sm:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group px-1 hover:px-3 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white">
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-black/80 dark:bg-white/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    {social.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}