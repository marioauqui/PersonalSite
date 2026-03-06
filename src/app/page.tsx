// src/app/page.tsx
import Image from "next/image";

/* ─────────── DATA ─────────── */

const projects = [
  {
    title: "StillRio Web Application",
    type: "Web",
    typeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    gradientFrom: "from-indigo-400",
    gradientTo: "to-sky-400",
    description:
      "An interactive travel discovery platform to help users explore road trips, destinations, and curated travel content. Features dynamic pages, client-side navigation, and external API integrations for mapping, weather, and location.",
    bullets: [
      "Integrated external APIs for mapping, weather, and location services for real-time travel insights",
      "Designed responsive layouts and modern UI components for consistent performance across desktop and mobile",
    ],
    tags: ["React", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    links: [{ label: "Live Site", href: "https://stillrio.com" }],
  },
  {
    title: "Developer Portfolio Website",
    type: "Web",
    typeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    gradientFrom: "from-violet-400",
    gradientTo: "to-indigo-400",
    description:
      "A fully responsive portfolio built with React, Next.js, TypeScript, and Tailwind CSS to showcase technical projects, data analysis work, machine learning research, and professional experience.",
    bullets: [
      "Architected reusable UI components and modular page structures for scalable frontend development",
      "Deployed on Vercel with CI/CD pipelines for automated builds and reliable production hosting",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [{ label: "Live Site", href: "https://marioauqui.com" }],
  },
  {
    title: "Palm-Tree Detection — PRISM",
    type: "ML / CV",
    typeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-teal-400",
    description:
      "Research project improving computer vision models for detecting palm trees in tropical aerial imagery. Processed and structured 1,200+ UAV image samples; improved detection accuracy by over 60% through regional fine-tuning.",
    bullets: [
      "Fine-tuned YOLOv8–YOLOv12 pipelines in Python/PyTorch; evaluated using precision, recall, and mAP",
      "Presented at URECA Day, Wake Forest University",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "Roboflow", "YOLO"],
    links: [
      { label: "View Poster", href: "/MarioUrecaPoster.pdf" },
      { label: "WFU Project Page", href: "https://photostories.wfu.edu/minds-in-motion" },
    ],
  },
  {
    title: "Cancer Incidence & Socioeconomic Analysis",
    type: "Data",
    typeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-400",
    description:
      "Analyzed public health datasets to examine correlations between cancer incidence rates and median household income across geographic regions using exploratory data analysis.",
    bullets: [
      "Performed EDA using Python (Pandas, NumPy) to clean, merge, and analyze socioeconomic and health datasets",
      "Built Matplotlib visualizations identifying trends between income levels and cancer incidence rates",
    ],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
    links: [],
  },
];

const experiences = [
  {
    title: "Undergraduate Research Fellow",
    org: "Wake Forest University",
    date: "May 2025 – Present",
    location: "Winston-Salem, NC",
    bullets: [
      "Analyzed aerial imagery using computer vision and deep learning to detect and map tree distributions across complex environments.",
      "Processed and structured UAV imagery into labeled training data using Roboflow, enabling model training across 1,200+ image samples.",
      "Implemented and optimized object detection pipelines in Python/PyTorch; applied metrics such as precision, recall, and mAP for evaluation.",
      "Collaborated with interdisciplinary researchers; communicated results through technical presentations and posters.",
    ],
  },
  {
    title: "Data and Machine Learning Intern",
    org: "The Clearing House",
    date: "May 2024 – Aug 2024",
    location: "New York, NY",
    bullets: [
      "Designed and deployed a machine learning pipeline on AWS SageMaker to analyze financial transaction data and forecast weekly pre-funding requirements for banks processing over 90% of U.S. wire transactions.",
      "Engineered an end-to-end data pipeline using Python, Pandas, Jupyter Notebook, and Amazon S3 to process and analyze one year of CHIPS transaction data.",
      "Performed data cleaning, feature engineering, and model evaluation; achieved over 85% forecasting accuracy.",
      "Presented data-driven insights and model results to 50+ stakeholders, including executives and senior leadership.",
    ],
  },
  {
    title: "Project Management Intern",
    org: "Atlantic General Construction",
    date: "May 2023 – Aug 2023",
    location: "New York, NY",
    bullets: [
      "Coordinated project workflows and tracked operational data across multiple teams to ensure construction projects remained on schedule and aligned with client requirements.",
      "Analyzed operational issues to identify root causes and resolve blockers; interfaced with clients and cross-functional teams to provide transparent updates.",
    ],
  },
];

const skillCategories = [
  {
    label: "Languages",
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    dot: "bg-indigo-500",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C", "R", "HTML", "CSS", "Bash"],
  },
  {
    label: "Frontend & Web",
    color: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    dot: "bg-sky-500",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Flask", "REST APIs", "Responsive Design"],
  },
  {
    label: "Data & Machine Learning",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    dot: "bg-emerald-500",
    skills: ["PyTorch", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "OpenCV", "XGBoost", "Ultralytics YOLO"],
  },
  {
    label: "Cloud & DevOps",
    color: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    dot: "bg-orange-500",
    skills: ["AWS", "Azure", "Docker", "Git", "GitHub", "Vercel", "Linux", "Jupyter Notebook", "Roboflow", "Jira", "Figma"],
  },
  {
    label: "Databases",
    color: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    dot: "bg-violet-500",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database modeling", "Query optimization"],
  },
  {
    label: "Methods & Other",
    color: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    dot: "bg-gray-400",
    skills: ["EDA", "Feature engineering", "Data visualization", "Statistical analysis", "CI/CD", "Agile/Scrum", "API integration", "Fluent in Spanish"],
  },
];

const resumes = [
  {
    title: "Frontend Resume",
    downloadHref: "/api/download-resume?type=frontend",
    description: "Best for software engineering and frontend-focused roles.",
  },
  {
    title: "Data Analyst Resume",
    downloadHref: "/api/download-resume?type=data-analyst",
    description: "Best for analytics, data, and machine learning roles.",
  },
];

/* ─────────── PAGE ─────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-20 backdrop-blur bg-gray-50/80 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-display font-bold tracking-tight text-lg">Mario Auqui</a>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            {[
              { label: "About",    href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills",   href: "#skills" },
              { label: "Resume",   href: "#resume" },
              { label: "Contact",  href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        id="home"
        className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 relative left-1/2 right-1/2 -mx-[50vw] w-screen"
      >
        <div className="max-w-5xl mx-auto px-5 pt-20 pb-20">
          <div className="grid md:grid-cols-4 gap-y-10 md:gap-x-14 items-center">
            <div className="md:col-span-3">

              {/* Status badge */}
              <span className="animate-fade-up delay-100 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Open to Opportunities
              </span>

              {/* Name */}
              <h1 className="animate-fade-up delay-200 font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Mario Auqui
              </h1>

              {/* Role */}
              <p className="animate-fade-up delay-300 mt-3 text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                Frontend Engineer &amp; Data Analyst
              </p>

              {/* Subtitle */}
              <p className="animate-fade-up delay-400 mt-3 text-base text-gray-500 dark:text-gray-400">
                Recent grad from Wake Forest University · New York City ↔ Winston-Salem, NC
              </p>

              {/* CTA buttons */}
              <div className="animate-fade-up delay-500 mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow-sm"
                >
                  See my work
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-gray-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                >
                  Get in touch
                </a>
                <a
                  href="#resume"
                  className="px-5 py-2.5 rounded-xl border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-gray-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                >
                  View resumes
                </a>
                <a
                  href="https://github.com/marioauqui"
                  className="px-5 py-2.5 rounded-xl border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-gray-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                  target="_blank" rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/marioauqui"
                  className="px-5 py-2.5 rounded-xl border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-gray-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                  target="_blank" rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Headshot */}
            <div className="animate-fade-up delay-300 md:col-span-1 flex justify-end ml-auto">
              <div className="aspect-square w-[200px] sm:w-[220px] md:w-[260px] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden ring-4 ring-indigo-50 dark:ring-indigo-900/20">
                <Image
                  src="/mario-auqui-headshot.jpg"
                  alt="Mario Auqui professional headshot portrait"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Me ── */}
      <section id="about" className="max-w-5xl mx-auto px-4 pt-20 pb-20">
        <h2 className="font-display text-3xl font-bold">About Me</h2>
        <div className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-8 leading-relaxed text-[1.05rem] text-gray-700 dark:text-gray-300 space-y-5 shadow-sm">
          <p className="leading-8">
            Hi, my name is Mario Auqui and I&apos;m a recent graduate of Wake Forest University.
          </p>
          <p className="leading-8">
            I&apos;m currently traveling, meeting new people, and working on personal projects before beginning a full-time role.
          </p>
          <p className="leading-8">
            For those who don&apos;t know me, I&apos;m someone who learns constantly, asks many questions, and enjoys understanding how and why things work.
          </p>
          <p className="leading-8">
            I&apos;m attracted to new experiences and admire those who push beyond conventional thinking.
          </p>
          <div className="pt-1">
            <p className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Things I&apos;m Into:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Animals</li>
              <li>Discovering new food</li>
              <li>Fitness &amp; MMA</li>
              <li>Outdoor exploration</li>
              <li>Photography</li>
              <li>Reading</li>
              <li>Traveling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="border-y border-gray-200 dark:border-gray-800 bg-gray-100/60 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 pt-20 pb-20">
          <h2 className="font-display text-3xl font-bold">Projects</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Spanning frontend development, machine learning, and data analysis.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {/* Gradient preview header */}
                <div className={`h-28 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-80`} />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-gray-100 leading-snug">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${project.typeColor}`}>
                      {project.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-3 text-xs text-gray-500 dark:text-gray-500 list-disc pl-4 space-y-1">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.links.length > 0 && (
                    <div className="mt-4 flex gap-4 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Experiences (Timeline) ── */}
      <section id="experience" className="max-w-5xl mx-auto px-4 pt-20 pb-20">
        <h2 className="font-display text-3xl font-bold">Recent Experience</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Research, engineering, and operations roles.</p>

        <div className="mt-10 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-6 w-px bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent dark:from-indigo-700 dark:via-indigo-900 dark:to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-14">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 border-indigo-400 dark:border-indigo-600 flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">{exp.org}</p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 text-right leading-snug">
                      {exp.date}<br />{exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="border-y border-gray-200 dark:border-gray-800 bg-gray-100/60 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 pt-20 pb-20">
          <h2 className="font-display text-3xl font-bold">Skills</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Tools, languages, and technologies I work with.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${cat.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="max-w-5xl mx-auto px-4 pt-20 pb-16">
        <h2 className="font-display text-3xl font-bold">Education</h2>

        <div className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden shadow-sm">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <div className="p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-gray-100">
                  Wake Forest University
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                  B.S. Computer Science · Entrepreneurship Minor
                </p>
              </div>
              <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">
                Dec 2025 · Winston-Salem, NC
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">
              Relevant Coursework
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[
                "Software Engineering",
                "Neural Networks & Deep Learning",
                "Algorithms & Analysis",
                "Computer Systems II",
                "Web Applications",
                "Computer Vision",
                "Data Structures",
                "Database Management Systems",
                "Data Science & Regression",
                "Linear Algebra",
                "Scaling the Entrepreneurial Venture",
                "Venture Capital",
                "Evidence-Based Entrepreneurship",
                "Macroeconomics",
                "Calculus I & II",
              ].map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Resume ── */}
      <section
        id="resume"
        className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-y border-gray-200 dark:border-gray-800 bg-gray-100/60 dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="font-display text-3xl font-bold">Resume</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Choose the version that best fits the role you are applying for.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            {resumes.map((resume) => (
              <article
                key={resume.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-gray-100">{resume.title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{resume.description}</p>
                <a
                  href={resume.downloadHref}
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
                >
                  Download Resume
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-5xl mx-auto px-4 pt-20 pb-20">
        <h2 className="font-display text-3xl font-bold">Contact</h2>
        <div className="mt-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <p>
            <span className="font-medium text-gray-800 dark:text-gray-200">Email </span>
            <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href="mailto:marioauqui.contact@gmail.com">
              marioauqui.contact@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-800 dark:text-gray-200">LinkedIn </span>
            <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href="https://linkedin.com/in/marioauqui" target="_blank" rel="noreferrer">
              /in/marioauqui
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-800 dark:text-gray-200">GitHub </span>
            <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href="https://github.com/marioauqui" target="_blank" rel="noreferrer">
              @marioauqui
            </a>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-4 text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Mario Auqui. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
