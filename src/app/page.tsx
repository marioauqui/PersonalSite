// src/app/page.tsx
import Image from "next/image";

/* ─────────── DATA ─────────── */

const projects = [
  {
    title: "Customer Churn Driver Analysis",
    type: "Data",
    typeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-400",
    description:
      "Tools and data source: SQL, Python (Pandas), and customer transaction and account datasets from subscription records.",
    bullets: [
      "Analyzed churn patterns by segment, tenure, product usage, and support behavior to isolate high-risk customer groups",
      "Identified key churn drivers and translated findings into retention-focused business recommendations",
      "Built a Power BI dashboard for churn trend monitoring, cohort comparison, and KPI tracking",
    ],
    tags: ["SQL", "Python", "Pandas", "Power BI", "Customer Analytics"],
    links: [],
  },
  {
    title: "Cancer Incidence & Socioeconomic Analysis",
    type: "Data",
    typeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-400",
    description:
      "Tools and data source: Python (Pandas, NumPy, Matplotlib) with public health and socioeconomic datasets across regions.",
    bullets: [
      "Cleaned, merged, and processed multi-source health and income data to prepare a consistent analysis-ready dataset",
      "Performed exploratory analysis and regression to evaluate how income levels relate to cancer incidence",
      "Identified a negative correlation between median household income and cancer incidence across geographic regions",
      "Visualized trends and outliers with comparative charts to communicate findings clearly",
    ],
    tags: ["Python", "Pandas", "NumPy", "Regression", "Matplotlib"],
    links: [],
  },
  {
    title: "Palm-Tree Detection — PRISM",
    type: "Data / CV",
    typeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-teal-400",
    description:
      "Tools and data source: Python, UAV image datasets, and Roboflow-labeled aerial imagery from tropical forest regions.",
    bullets: [
      "Processed and structured 1,200+ image samples into labeled datasets for consistent evaluation across regions",
      "Evaluated model performance using precision, recall, and mAP to compare baseline and tuned results",
      "Improved detection performance by over 60% after regional tuning and data refinement",
      "Presented analysis and results at URECA Day, Wake Forest University",
    ],
    tags: ["Python", "Data Processing", "Precision/Recall", "mAP", "Roboflow"],
    links: [
      { label: "View Poster", href: "/MarioUrecaPoster.pdf" },
      { label: "WFU Project Page", href: "https://photostories.wfu.edu/minds-in-motion" },
    ],
  },
  {
    title: "Developer Portfolio Website",
    type: "Portfolio",
    typeColor: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    gradientFrom: "from-violet-400",
    gradientTo: "to-indigo-400",
    description:
      "Tools and data source: Portfolio content datasets containing project outcomes, metrics, and technical summaries.",
    bullets: [
      "Organized and presented analytics and machine learning projects with concise, insight-driven summaries",
      "Structured project content to make tools, analysis workflow, and measurable outcomes easy to scan",
    ],
    tags: ["Data Storytelling", "Portfolio", "Project Communication"],
    links: [{ label: "Live Site", href: "https://marioauqui.com" }],
  },
];

const experiences = [
  {
    title: "Undergraduate Data Research Fellow",
    org: "Wake Forest University",
    date: "May 2025 – January 2026",
    location: "Winston-Salem, NC",
    bullets: [
      "Processed and cleaned a large dataset of Amazon rainforest aerial imagery using Python, creating structured labeled datasets for analysis.",
      "Executed SQL queries to track model experiment results, logging hyperparameters and performance metrics (precision, recall, mAP) across multiple training runs.",
      "Collaborated with interdisciplinary faculty to design experiments, perform quantitative analysis, and present findings at URECA Day.",
      "Automated object detection pipeline to identify palm trees in unseen images, reducing manual annotation time and improving reproducibility.",
      "Built data preprocessing workflows to filter and structure image patches, enabling efficient model training on 1,200+ samples.",
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "The Clearing House",
    date: "May 2024 – Aug 2024",
    location: "New York, NY",
    bullets: [
      "Engineered an end-to-end data pipeline using Python, Pandas, and Jupyter Notebook to process one year of CHIPS financial transaction data, handling missing values and cleaning inconsistent records.",
      "Leveraged SQL to save model predictions and actual results in a database, making it easy to compare performance across models.",
      "Cleaned and prepared transactional data, then built a forecast that achieved over 85% accuracy for banks processing 90% of U.S. wire transactions.",
      "Presented model results and insights to 50+ stakeholders including executives and senior leadership as part of the final project.",
    ],
  },
  {
    title: "Operations Data Intern",
    org: "Atlantic General Construction",
    date: "May 2023 – Aug 2023",
    location: "New York, NY",
    bullets: [
      "Used Excel to track project timelines, budgets, and client requirements, maintaining organized spreadsheets for daily workflow management and reporting.",
      "Communicated with clients and cross-functional teams to gather requirements, document progress, and resolve 5–10 weekly inquiries, ensuring project transparency and stakeholder satisfaction.",
      "Analyzed project data in Excel to identify workflow bottlenecks, reducing task completion delays by approximately 17% through targeted process improvements.",
    ],
  },
];

const skillCategories = [
  {
    label: "Data Analysis & Visualization",
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    dot: "bg-indigo-500",
    skills: ["Pandas", "NumPy", "Excel", "Tableau", "Power BI", "Matplotlib", "Seaborn"],
  },
  {
    label: "Programming & Query Languages",
    color: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    dot: "bg-sky-500",
    skills: ["Python", "SQL", "R", "JavaScript", "TypeScript", "Java", "C", "Bash"],
  },
  {
    label: "Databases",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    dot: "bg-emerald-500",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Query Optimization", "Data Modeling"],
  },
  {
    label: "Analytical Techniques",
    color: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    dot: "bg-orange-500",
    skills: ["Data Cleaning", "EDA", "Regression Analysis", "Hypothesis Testing", "A/B Testing"],
  },
  {
    label: "Tools & Technologies",
    color: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    dot: "bg-violet-500",
    skills: ["Jupyter Notebook", "Excel", "Git"],
  },
];

const resumeHref = "/MarioAuquiResume.pdf";

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

              {/* Name */}
              <h1 className="animate-fade-up delay-200 font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Mario Auqui
              </h1>

              {/* Role */}
              <p className="animate-fade-up delay-300 mt-3 text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                Data Analyst
              </p>

              {/* Subtitle */}
              <p className="animate-fade-up delay-400 mt-3 text-base text-gray-500 dark:text-gray-400">
                Recent grad from Wake Forest University · New York City
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
                  View resume
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
            For those who don&apos;t know me, I&apos;m naturally curious, ask many questions, and love understanding how and why things work. I also enjoy adventure and trying new things.
          </p>
          <p className="leading-8">
            I&apos;m attracted to new experiences and admire those who push beyond conventional thinking.
          </p>
          <div className="pt-1">
            <p className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Things I&apos;m Into:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Fitness &amp; MMA</li>
              <li>Discovering new food/cuisines</li>
              <li>Animals</li>
              <li>Photography</li>
              <li>Outdoor exploration</li>
              <li>Thriller books</li>
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
                "SQL & Database Management",
                "Python for Data Analysis",
                "Probability & Statistics",
                "Regression Analysis",
                "Data Visualization",
                "Data Science",
                "Linear Algebra",
                "Calculus I & II",
                "Data Structures",
                "Algorithms & Analysis",
                "Computer Systems",
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
            Download my latest resume.
          </p>

          <div className="mt-6">
            <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-gray-100">Mario Auqui Resume</h3>
              <a
                href={resumeHref}
                download
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
              >
                Download Resume
              </a>
            </article>
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
