"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiTypescript,
  SiGooglegemini,
  SiPython,
  SiHuggingface,
  SiHtml5,
  SiSqlite,
  SiLinux
} from "react-icons/si";
import { BiCloud, BiLinkExternal, BiArrowBack } from "react-icons/bi";
import { 
  HiAcademicCap, 
  HiPencilAlt, 
  HiPlay, 
  HiOutlineSearchCircle, 
  HiTemplate,
  HiOutlineLockClosed 
} from "react-icons/hi";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allProjects = [
    {
      title: "Mimi",
      description:
        "A next-gen meme creation & social platform. Features a powerful browser-based image editor built entirely from scratch using the Canvas API, supporting multi-layer manipulation, custom text styling, and freehand drawing tools. Includes a Pinterest-style masonry feed, trending algorithms, secure user authentication, and seamless social interactions like sharing and nested commenting.",
      icon: <HiTemplate className="w-6 h-6" />,
      imageUrl: "/mimi.png", 
      demoUrl: "https://mimi-create.vercel.app",
      githubUrl: "https://github.com/kneerazzz/mimi",
      technologies: [
        { name: "Next.js 15", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "Canvas API", icon: <SiHtml5 className="w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
      ],
      category: "Full-Stack",
    },
    {
      title: "Vindex",
      description:
        "An AI-powered semantic video search engine. Users can enter a YouTube URL and a natural language query to find the exact timestamps where specific concepts are discussed. Engineered using Whisper for transcription, HuggingFace Transformers for generating local AI embeddings, and MongoDB Atlas Vector Search to perform lightning-fast semantic querying across video timelines.",
      icon: <HiOutlineSearchCircle className="w-6 h-6" />, 
      imageUrl: "/vindex.jpg", 
      demoUrl: "https://vindex0.vercel.app", 
      githubUrl: "https://github.com/kneerazzz/vindex", 
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "Vector Search", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "Python", icon: <SiPython className="w-5 h-5" /> },
        { name: "Transformers", icon: <SiHuggingface className="w-5 h-5" /> },
      ],
      category: "Full Stack AI", 
    },
    {
      title: "Hypr-Vault",
      description:
        "A zero-knowledge, local-first password manager built specifically for the Hyprland Wayland compositor. Features a sleek Qt/QML frontend (QuickShell) and a secure Node.js backend using AES-256-GCM encryption with scrypt key derivation. Designed with a unique double-encrypted 'Lifeboat' portable export system, automated background backups, and robust database integrity checks.",
      icon: <HiOutlineLockClosed className="w-6 h-6" />,
      imageUrl: "/hypr_vault.png",
      demoUrl: null, 
      githubUrl: "https://github.com/kneerazzz/hypr_vault", 
      technologies: [
        { name: "Linux/QML", icon: <SiLinux className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "SQLite", icon: <SiSqlite className="w-5 h-5" /> },
      ],
      category: "Desktop & Security",
    },
    {
      title: "SkillSprint",
      description:
        "A comprehensive EdTech platform designed to accelerate learning through AI. It dynamically generates daily micro-learning topics, tracks user progress via interactive analytical dashboards, and gamifies the experience with coding challenges and personalized learning paths. Built for high performance and real-time responsiveness across all devices.",
      icon: <HiAcademicCap className="w-6 h-6" />,
      imageUrl: "/chulbul1.jpg",
      demoUrl: "https://gradiva.vercel.app",
      githubUrl: "#",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "Gemini AI", icon: <SiGooglegemini className="w-5 h-5" /> }
      ],
      category: "Full-Stack",
    },
    {
      title: "YouTube Backend Clone",
      description:
        "A robust, scalable backend architecture mimicking YouTube's core features. Includes secure JWT-based authentication, highly optimized video uploading and streaming workflows using Cloudinary, and complex MongoDB aggregation pipelines for customized feeds. Also supports relational features like user subscriptions, custom playlists, and nested comment threads.",
      icon: <HiPlay className="w-6 h-6" />,
      imageUrl: "/youtube.jpg",
      demoUrl: null,
      githubUrl: "https://github.com/kneerazzz/Backend/tree/main/whossshhh",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "Cloudinary", icon: <BiCloud className="w-5 h-5" /> },
      ],
      category: "Backend",
    },
    {
      title: "Troy Blog App",
      description:
        "A full-featured personal blogging platform designed for seamless reading and writing experiences. Implemented a rich-text editor, markdown parsing, category tagging, and dynamic routing for SEO-friendly URLs. Features a fully responsive dark/light mode UI and a custom CMS backend for managing posts, drafts, and user comments.",
      icon: <HiPencilAlt className="w-6 h-6" />,
      imageUrl: "/troyy.jpg",
      demoUrl: "https://troyy.netlify.app/",
      githubUrl: "#",
      technologies: [
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
      ],
      category: "Frontend",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dark background blobs to match portfolio theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation & Header */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <BiArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-start mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              All Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            A comprehensive collection of my work, ranging from full-stack web applications and AI search engines to low-level desktop security tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800/60 transition-all duration-500 hover:border-gray-500/50 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {project.imageUrl && (
                <div className="relative w-full h-56 shrink-0 overflow-hidden bg-linear-to-br from-gray-800 to-gray-950">
                    <Image
                        width={600}
                        height={400}
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-400/80 group-hover:text-blue-400 transition-colors duration-300 p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 mt-1 inline-block bg-gray-800/80 text-gray-300 rounded-md border border-gray-700">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-3 bg-gray-900/80 p-1.5 rounded-lg border border-gray-800">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-all duration-300"
                        title="Live Demo"
                      >
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-300"
                        title="View Code"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 grow">
                  {project.description}
                </p>

                <div className="space-y-3 mt-auto pt-4 border-t border-gray-800/50">
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center space-x-1.5 bg-gray-950/50 rounded-md px-2.5 py-1.5 border border-gray-800/80 group-hover:border-gray-700 transition-all duration-300"
                      >
                        <div className="text-gray-300 group-hover:text-white transition-colors">{tech.icon}</div>
                        <span className="text-[11px] font-medium text-gray-300 group-hover:text-gray-100 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Area */}
        <div className="mt-20 text-center border-t border-gray-800/50 pt-8 pb-4">
          <p className="text-gray-500 text-sm">
            Building scalable systems and secure applications.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
};

export default ProjectsPage;