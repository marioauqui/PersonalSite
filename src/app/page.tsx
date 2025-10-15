// src/app/page.tsx
import ThemeToggle from "@/components/theme-toggle";


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg">Mario Auqui</a>

          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="#projects" className="hover:opacity-70">Projects</a>
              <a href="#research" className="hover:opacity-70">Research</a>
              <a href="#experience" className="hover:opacity-70">Experience</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

    

      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Builder, researcher, and aspiring SWE —
              <span className="block">based on the East Coast.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Senior CS @ Wake Forest (Dec 2025). I’m into computer vision, clean UX, and turning ideas into shipped software.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-2xl border border-gray-900 hover:bg-gray-900 hover:text-white transition dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
              >
                See projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                Get in touch
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <li>Python • JS/TS • React/Next.js • SQL</li>
              <li>YOLOv8–12 • mAP/PR • OpenCV</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-square rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm grid place-items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Add a headshot here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-50 border-y border-gray-100 dark:bg-gray-900 dark:border-gray-800"
      >
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">A few things I’ve built recently.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition">
              <h3 className="font-semibold">Palm-Tree Detection — PRISM</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                YOLO-based detector tuned to generalize from Ecuador to Iquitos, Peru.
                Focus on patch-based inference and confusion-matrix analysis.
              </p>
              <ul className="mt-3 text-xs text-gray-500 dark:text-gray-400 list-disc pl-5">
                <li>mAP, precision/recall, F1</li>
                <li>OpenCV, PyTorch, Ultralytics</li>
              </ul>
              <div className="mt-3 flex gap-3 text-sm">
                <a href="#" className="underline">Code</a>
                <a href="#" className="underline">Paper/Poster</a>
                <a href="#" className="underline">Demo</a>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition">
              <h3 className="font-semibold">Movie Watchlist (Next.js)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                API-driven app showing streaming availability, built to practice full-stack patterns and clean UI.
              </p>
              <ul className="mt-3 text-xs text-gray-500 dark:text-gray-400 list-disc pl-5">
                <li>Next.js App Router, Server Actions</li>
                <li>Postgres (Neon) + Prisma</li>
              </ul>
              <div className="mt-3 flex gap-3 text-sm">
                <a href="#" className="underline">Code</a>
                <a href="#" className="underline">Live</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Research</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          URECA-funded project in Dr. Pauca’s lab on tropical forest palm detection and domain generalization.
        </p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
          <li className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
            Poster: 36×36 in (URECA Day) — results, mAP, PR curves.
          </li>
          <li className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
            Paper draft (Overleaf): Introduction → Methodology → Experiments → Results.
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="bg-gray-50 border-y border-gray-100 dark:bg-gray-900 dark:border-gray-800"
      >
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-semibold">Software / Research</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li>Computer Vision Research Assistant — WFU</li>
                <li>Full-stack projects in React/Next.js</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-semibold">Activities</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li>Brazilian Jiu-Jitsu (white belt, 4 stripes)</li>
                <li>Entrepreneurship minor — venture projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Email: <a className="underline" href="mailto:mario.auqui@gmail.com">mario.auqui@gmail.com</a> •{" "}
          LinkedIn: <a className="underline" href="#">/in/marioauqui</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-5xl mx-auto px-4 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mario Auqui. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
