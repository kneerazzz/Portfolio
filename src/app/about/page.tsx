import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Troyy",
  description: "Meet Neeraj (Troyy) — A full-stack developer and automation enthusiast building high-impact web apps like Mimi, Vindex, and SkillSprint.",
  openGraph: {
    title: "About | Troyy",
    description: "Meet Neeraj (Troyy) — Developer • Delusional • Lifelong Learner. Exploring the intersection of AI, Automation, and Full Stack Web Dev.",
    url: "https://kneerazzz.vercel.app/about",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Neeraj (Troyy) - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Troyy",
    description: "Meet Neeraj (Troyy) — Developer • Delusional • Lifelong Learner.",
    images: ["/me.png"],
  },
};

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Heading */}
      <div className="space-y-3 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
          Neeraj • aka Troyy • Developer • Delusional • Lifelong Learner
        </p>
      </div>

      {/* Story */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          Hi, I&apos;m <span className="font-bold text-gray-900 dark:text-gray-100">Neeraj</span> (online I go
          by <span className="font-bold text-gray-900 dark:text-gray-100">Troyy</span>). I&apos;m{" "}
          <span className="font-bold text-gray-900 dark:text-gray-100">19</span> and currently in my{" "}
          <span className="font-bold text-gray-900 dark:text-gray-100">2nd year of college</span>.
        </p>
        <p>
          My coding journey started just a year ago with a laptop and some C++ tutorials. 
          I quickly realized that while logic is fun, <span className="font-bold text-gray-900 dark:text-gray-100">building things people can actually use</span> is addictive. 
          I pivoted to Web Development and haven&apos;t looked back.
        </p>
        <p>
          I thrive on complexity. Whether it&apos;s managing global state in a meme editor, 
          handling vector embeddings for video search, or building autonomous workflows.
          My current &quot;Big Three&quot; projects are <span className="font-bold text-purple-600 dark:text-purple-400">Mimi</span>,{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">Vindex</span>, and{" "}
          <span className="font-bold text-emerald-600 dark:text-emerald-400">SkillSprint</span>.
        </p>
      </div>

      {/* Mimi Context */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            🎨 Mimi
          </h2>
          <span className="text-xs font-mono px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            Latest Project
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Mimi is my most ambitious project yet—a full-stack 
          <span className="font-semibold text-gray-900 dark:text-gray-100"> Meme Creation & Social Platform</span>. 
          I wanted to build something that wasn&#39;t just a feed, but a tool. 
          It features a custom-built <span className="font-semibold">Advanced Editor</span> (using the HTML5 Canvas API) that supports layers, text manipulation, and drawing—think Photoshop Lite in your browser. 
          The backend handles a Pinterest-style infinite masonry feed, trending algorithms, and user profiles.{" "}
          <a
            href="https://mimi-create.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            Check it out
          </a>
          .
        </p>
      </div>

      {/* Vindex Context */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          🔍 Vindex
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Recognizing the frustration of scrubbing through long videos, I built Vindex.
          It&#39;s an AI-powered tool that lets you <span className="font-semibold text-gray-900 dark:text-gray-100">search inside YouTube videos</span>.
          By combining transcripts with vector embeddings and semantic search, Vindex pinpoints the exact timestamps 
          where your topic is discussed. No more skimming; just finding.{" "}
           <a
            href="https://vindex0.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Try Vindex
          </a>
          .
        </p>
      </div>

      {/* SkillSprint Context */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          🚀 SkillSprint
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          What started as a small idea—giving users a random 5-minute daily
          topic—grew into a full-fledged <span className="font-semibold text-gray-900 dark:text-gray-100">gamified learning platform</span>. 
          SkillSprint uses AI to generate breakdowns, roadmaps, and quizzes for any skill you want to learn. 
          It tracks your streaks, progress, and helps turn curiosity into a daily habit.{" "}
          <a
            href="https://gradiva.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
          >
            View more
          </a>
          .
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-gray-500 pl-4">
          The Arsenal
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-400"></span>JavaScript (ES6+)</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>TypeScript</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400"></span>React / Next.js 15</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>Node.js / Express</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500"></span>n8n / Automation</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-teal-400"></span>TailwindCSS</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-500"></span>Canvas API</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400"></span>MongoDB</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-500"></span>Linux (Arch)</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span>Vector Search</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span>AI Agents</li>
        </ul>
      </div>

      {/* Projects List */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Other Experiments
        </h2>
        <ul className="list-disc list-inside space-y-2 marker:text-gray-400">
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">YouTube-like Backend</span> – 
            A complex REST API handling video upload pipelines, Cloudinary integration, and user auth.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Blog App</span> – 
            A minimalistic CMS to publish thoughts (my first full-stack project!).
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">DSA Library</span> – 
            My personal collection of C++ implementations for complex algorithms.
          </li>
        </ul>
      </div>

      {/* Personal Approach */}
      <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl space-y-3 border border-gray-100 dark:border-zinc-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          My Philosophy
        </h2>
        <p className="text-gray-600 dark:text-gray-400 italic">
          &quot;I focus on shipping projects quickly, learning from 
          broken builds, and iterating fast. Recently, I&#39;ve been obsessed with 
          <span className="text-orange-500 font-semibold not-italic"> Automation & n8n</span>
          —because why do it manually if a workflow can do it better?&quot;
        </p>
      </div>

      {/* Back button */}
      <div className="pt-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition-all dark:bg-white dark:text-black dark:hover:bg-gray-200 font-medium"
        >
          <span>←</span> Back to Home
        </Link>
      </div>
    </section>
  );
}