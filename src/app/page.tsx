// src/app/page.tsx
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image"; // ✅ added

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Mario Auqui</a>
          <div className="flex items-center gap-5">
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="#projects" className="hover:opacity-70">Projects</a>
              <a href="#research" className="hover:opacity-70">Research</a>
              <a href="#experience" className="hover:opacity-70">Experience</a>
              <a href="#skills" className="hover:opacity-70">Skills</a>
              <a href="#education" className="hover:opacity-70">Education</a>
              <a href="#resume" className="hover:opacity-70">Résumé</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
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
              <a
                href="/Mario_s_Resume.pdf"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
                target="_blank" rel="noreferrer"
              >
                Download résumé
              </a>
              <a
                href="https://github.com/marioauqui"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
                target="_blank" rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/marioauqui"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <li>Python • Java • JS/TS • SQL • C • HTML • CSS • Linux</li>
              <li>React • PyTorch • TensorFlow • Keras • Pandas • NumPy</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-square rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm grid place-items-center overflow-hidden">
              {/* ✅ headshot wired up */}
              <Image
                src="/headshot.jpg"      // file lives at public/headshot.jpg
                alt="Mario Auqui headshot"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 border-y border-gray-100 dark:bg-gray-900 dark:border-gray-800">
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
              <h3 className="font-semibold">AI-Driven Email Client (Team Project)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Web email client that auto-organizes inboxes using content-aware classification and summarization.
              </p>
              <ul className="mt-3 text-xs text-gray-500 dark:text-gray-400 list-disc pl-5">
                <li>React, Gmail API</li>
                <li>5 Agile sprints • smart replies • categorization</li>
              </ul>
              <div className="mt-3 flex gap-3 text-sm">
                <a href="#" className="underline">Code</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Research</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          URECA-funded project in Dr. Pauca’s lab on tropical forest palm detection and domain generalization.
        </p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
          <li className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4">Poster: 36×36 in (URECA Day) — results, mAP, PR curves.</li>
          <li className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4">Paper draft (Overleaf): Introduction → Methodology → Experiments → Results.</li>
        </ul>
      </section>

      {/* Experience (resume-style bullets) */}
      <section id="experience" className="bg-gray-50 border-y border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">Experience</h2>

          {/* Research Fellow */}
          <article className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Undergraduate Research Fellow — Wake Forest University</h3>
              <span className="text-xs text-gray-500">May 2025 – Present • Winston-Salem, NC</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
              <li>Applied computer vision and object detection to analyze aerial imagery; mapped tree distributions in complex environments.</li>
              <li>Fine-tuned YOLOv8–YOLOv12 in Python/PyTorch to improve detection under dense canopy and variable lighting.</li>
              <li>Built scalable data pipelines and labeled 1,200+ image patches with Roboflow to accelerate model training/eval.</li>
              <li>Collaborated with interdisciplinary faculty; communicated results via technical talks and posters.</li>
              <li>Experienced with metrics: Precision, Recall, mAP; rigorous analysis and deadlines in a research team.</li>
            </ul>
          </article>

          {/* ML Intern */}
          <article className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Machine Learning Intern — The Clearing House</h3>
              <span className="text-xs text-gray-500">May 2024 – Aug 2024 • New York, NY</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
              <li>Built and deployed an AWS SageMaker model to forecast weekly pre-funding requirements for banks.</li>
              <li>Engineered an end-to-end data pipeline with Python, Jupyter, and S3 on one year of CHIPS transaction data.</li>
              <li>Achieved 85%+ predictive accuracy through hyperparameter tuning and evaluation; supported operations covering most U.S. wire volume.</li>
              <li>Presented insights and impact to 50+ stakeholders, including executives and VPs.</li>
            </ul>
          </article>

          {/* PM Intern */}
          <article className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Project Management Intern — Atlantic General Construction</h3>
              <span className="text-xs text-gray-500">May 2023 – Aug 2023 • New York, NY</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
              <li>Led day-to-day project workflows in owner’s absence; delegated tasks and resolved blockers to ensure on-time delivery.</li>
              <li>Interfaced with clients and cross-functional teams; handled 5–10 weekly inquiries with transparent updates.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Technical Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-semibold mb-2">Languages</h3>
            <p className="text-gray-700 dark:text-gray-300">Python, Java, JavaScript/TypeScript, SQL, C, HTML, CSS, Linux</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-semibold mb-2">Libraries & Frameworks</h3>
            <p className="text-gray-700 dark:text-gray-300">React, TensorFlow, PyTorch, Keras, Pandas, NumPy, Matplotlib, Flask</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-semibold mb-2">Tools & Methods</h3>
            <p className="text-gray-700 dark:text-gray-300">AWS, Azure, Docker, Git, Agile/Scrum, Jira, Figma</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h3 className="font-semibold mb-2">Software</h3>
            <p className="text-gray-700 dark:text-gray-300">MS Office (Excel, Word, PowerPoint, Outlook), Confluence, SharePoint</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-gray-50 border-y border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Wake Forest University — B.S. in Computer Science, Entrepreneurship Minor</h3>
              <span className="text-xs text-gray-500">Dec 2025 • Winston-Salem, NC</span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Courses: Software Engineering, Neural Networks & Deep Learning, Algorithms & Analysis, Computer Systems II, Web Applications, Computer Vision, Data Structures, Databases, Economics II, Entrepreneurship II & III</p>
          </div>
        </div>
      </section>

      {/* Resume embed */}
      <section id="resume" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Résumé</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">View or download a recent PDF copy.</p>
        <div className="mt-4 flex gap-3">
          <a
            href="/Mario_s_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 text-sm"
          >
            Open PDF in new tab
          </a>
          <a
            href="/Mario_s_Resume.pdf"
            download
            className="px-4 py-2 rounded-xl border border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 text-sm"
          >
            Download PDF
          </a>
        </div>
        <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Embedded viewer (works best when the PDF is placed in /public) */}
          <object data="/Mario_s_Resume.pdf" type="application/pdf" className="w-full h-[80vh]">
            <iframe src="/Mario_s_Resume.pdf" className="w-full h-[80vh]" title="Mario Auqui Resume" />
          </object>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Email: <a className="underline" href="mailto:marioauqui.contact@gmail.com">marioauqui.contact@gmail.com</a> • {" "}
          LinkedIn: <a className="underline" href="https://linkedin.com/in/marioauqui" target="_blank" rel="noreferrer">/in/marioauqui</a> • {" "}
          GitHub: <a className="underline" href="https://github.com/marioauqui" target="_blank" rel="noreferrer">@marioauqui</a>
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
