// src/app/page.tsx
  //import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image"; // ✅ added

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur bg-gray-100/80 dark:bg-gray-900/70 border-b border-gray-300 dark:border-gray-800 shadow-sm">

        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Mario Auqui</a>
          <div className="flex items-center gap-5">
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="#about" className="hover:opacity-70">About</a>
              <a href="#projects" className="hover:opacity-70">Projects</a>
        
              <a href="#experience" className="hover:opacity-70">Experience</a>
              <a href="#skills" className="hover:opacity-70">Skills</a>
              <a href="#education" className="hover:opacity-70">Education</a>
              <a href="#resume" className="hover:opacity-70">Resume</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </nav>
          {/*  <ThemeToggle /> */}
          </div>
        </div>
      </header>

      {/* Hero */}
    <section 
      id="home" 
      className=" bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-16">        
        <div className="grid md:grid-cols-4 gap-y-6 md:gap-x-12 items-center">
          <div className="md:col-span-3 md:pr-10">
            <h1 className="text-[1.75rem] md:text-[2.5rem] font-extrabold leading-tight">
              Computer Science and Entrepreneurship              
            </h1>                  
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
             Senior at Wake Forest University (New York City ↔ Winston-Salem, NC)
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                See projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                Get in touch
              </a>
              <a
                href="/MarioAuquiResume.pdf"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
                target="_blank" rel="noreferrer"
              >
                Download resume
              </a>
              <a
                href="https://github.com/marioauqui"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
                target="_blank" rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/marioauqui"
                className="px-5 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>     
          </div>
          <div className="md:col-span-1 flex justify-end ml-auto">
            <div className="aspect-square w-[220px] sm:w-[240px] md:w-[300px] rounded-3xl border border-gray-300 dark:border-gray-800 shadow-sm overflow-hidden">
              {/* ✅ headshot wired up */}
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

{/* About Me */}
<section id="about" className="max-w-5xl mx-auto px-4 pt-16 pb-16">
  {/* Heading outside and above the card */}
  <h2 className="text-2xl font-bold">About Me</h2>

  {/* Card content (visually separate) */}
  <div className="mt-8 rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/60 backdrop-blur p-8 leading-relaxed text-[1.05rem] text-gray-800 dark:text-gray-300 space-y-6 shadow-sm">
    <p className="leading-8">
      Hi, my name is Mario Auqui and I am a senior at Wake Forest University,
      graduating in December 2025.
    </p>

    <p className="leading-8">
      After graduation, I plan to spend several months traveling, meeting new
      people, and working on personal projects before beginning a full-time role.
    </p>

    <p className="leading-8">
      For those who don't know me, I'm someone who learns constantly, asks many questions, and enjoys understanding how and why things work.
    </p>

    <p className="leading-8">
      I’m attracted to new experiences and admire those who push beyond
      conventional thinking.
    </p>

    <div className="pt-2">
      <p className="font-semibold mb-3">Things I’m Into:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Animals</li>
        <li>Enjoying and discovering new food</li>
        <li>Fitness & MMA</li>
        <li>Outdoor exploration</li>
        <li>Photography</li>
        <li>Reading</li>
        <li>Traveling</li>
      </ul>
    </div>
  </div>
</section>


{/* Projects */}
<section id="projects" className="bg-gray-100 border-y border-gray-300 dark:bg-gray-900 dark:border-gray-800">
  <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
    <h2 className="text-2xl font-bold">Projects</h2>

    <div className="mt-8 grid md:grid-cols-2 gap-6">

      {/* Personal Website */}
      <article className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5 hover:shadow-sm transition">
        <h3 className="text-lg font-semibold">Personal Website</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          A fully responsive personal website built with Next.js, React, TypeScript, and Tailwind CSS to showcase my work, research, and experience. Designed and developed a clean, professional interface with reusable components, smooth layout transitions, and optimized performance. Deployed and hosted using Vercel.
        </p>
        <ul className="mt-3 text-xs text-gray-600 dark:text-gray-400 list-disc pl-5">
          <li>Developed using Next.js, React, and Tailwind CSS for a modern, responsive layout</li>
          <li>Hosted on Vercel with optimized build and deployment workflows</li>
          <li>Designed a clean, professional interface with reusable components and smooth navigation</li>
        </ul>
        <div className="mt-3 flex gap-3 text-sm">
          <a
            href="https://marioauqui.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-80"
          >
            Live Site
          </a>
        </div>
      </article>

      {/* PRISM Palm Detection */}
      <article className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5 hover:shadow-sm transition">
        <h3 className="text-lg font-semibold">Palm-Tree Detection — PRISM</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          Worked on a research project aimed at improving how computer models identify palm trees in aerial images of tropical forests. The goal was to help monitor forest health and support conservation efforts. Using high-resolution drone imagery, we tested and improved an existing detection model (PRISM) so it could work accurately in new regions, from Ecuador to Iquitos, Peru.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
  Presented as a poster at <span className="font-medium">URECA Day, Wake Forest University</span>.
        </p>

        <ul className="mt-3 text-xs text-gray-600 dark:text-gray-400 list-disc pl-5">
          <li>Improved detection accuracy by over 60% through regional fine-tuning</li>
          <li>Tools: Python, PyTorch, OpenCV, Roboflow, Ultralytics YOLO</li>
        </ul>
        <div className="mt-3 flex gap-3 text-sm">
          <a
            href="/MarioUrecaPoster.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-80"
          >
            View Poster
          </a>
          <a
            href="https://photostories.wfu.edu/minds-in-motion"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            WFU Project Page
          </a>
        </div>
      </article>

    </div>
  </div>
</section>


{/* Experience Section */}
<section id="experience" className="max-w-5xl mx-auto px-4 pt-20 pb-20">
  <div className="space-y-10"> {/* Adds spacing between each article */}
    <h2 className="text-2xl font-bold mb-10">Experience</h2>

    {/* Research Fellow */}
    <article className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-6 transition hover:shadow-md">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-semibold text-lg">Undergraduate Research Fellow — Wake Forest University</h3>
        <span className="text-xs text-gray-500">May 2025 – Present • Winston-Salem, NC</span>
      </div>
      <ul className="mt-3 list-disc pl-6 text-sm text-gray-800 dark:text-gray-300 space-y-2">
        <li>Applied computer vision and object detection to analyze aerial imagery; mapped tree distributions in complex environments.</li>
        <li>Fine-tuned YOLOv8–YOLOv12 in Python/PyTorch to improve detection under dense canopy and variable lighting.</li>
        <li>Built scalable data pipelines and labeled 1,200+ image patches with Roboflow to accelerate model training/eval.</li>
        <li>Collaborated with interdisciplinary faculty; communicated results via technical talks and posters.</li>
        <li>Experienced with metrics: Precision, Recall, mAP; rigorous analysis and deadlines in a research team.</li>
      </ul>
    </article>

    {/* ML Intern */}
    <article className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-6 transition hover:shadow-md">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-semibold text-lg">Machine Learning Intern — The Clearing House</h3>
        <span className="text-xs text-gray-500">May 2024 – Aug 2024 • New York, NY</span>
      </div>
      <ul className="mt-3 list-disc pl-6 text-sm text-gray-800 dark:text-gray-300 space-y-2">
        <li>Built and deployed an AWS SageMaker model to forecast weekly pre-funding requirements for banks.</li>
        <li>Engineered an end-to-end data pipeline with Python, Jupyter, and S3 on one year of CHIPS transaction data.</li>
        <li>Achieved 85%+ predictive accuracy through hyperparameter tuning and evaluation; supported operations covering most U.S. wire volume.</li>
        <li>Presented insights and impact to 50+ stakeholders, including executives and VPs.</li>
      </ul>
    </article>

    {/* PM Intern */}
    <article className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-6 transition hover:shadow-md">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-semibold text-lg">Project Management Intern — Atlantic General Construction</h3>
        <span className="text-xs text-gray-500">May 2023 – Aug 2023 • New York, NY</span>
      </div>
      <ul className="mt-3 list-disc pl-6 text-sm text-gray-800 dark:text-gray-300 space-y-2">
        <li>Led day-to-day project workflows in owner’s absence; delegated tasks and resolved blockers to ensure on-time delivery.</li>
        <li>Interfaced with clients and cross-functional teams; handled 5–10 weekly inquiries with transparent updates.</li>
      </ul>
    </article>
  </div>
</section>



{/* Skills */}
<section
  id="skills"
  className="bg-gray-100 border-y border-gray-300 dark:bg-gray-900 dark:border-gray-800"
>
  <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
    <h2 className="text-2xl font-bold">Skills</h2>

    <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
      {/* Programming Languages */}
      <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5">
        <h3 className="font-semibold mb-2">Programming Languages</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Python, Java, JavaScript, TypeScript, SQL, C, R, HTML, CSS, Bash
        </p>
      </div>

      {/* Libraries & Frameworks */}
      <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5">
        <h3 className="font-semibold mb-2">Libraries &amp; Frameworks</h3>
        <p className="text-gray-700 dark:text-gray-300">
          React, Next.js, Node.js, Flask, PyTorch, TensorFlow, Keras, Pandas, NumPy,
          Matplotlib, scikit-learn, OpenCV, XGBoost
        </p>
      </div>

      {/* Cloud, DevOps & Tools */}
      <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5">
        <h3 className="font-semibold mb-2">Cloud, DevOps &amp; Tools</h3>
        <p className="text-gray-700 dark:text-gray-300">
          AWS, Azure, Docker, Git, GitHub, Jira, Figma, Vercel, Jupyter Notebook, Roboflow
        </p>
      </div>

      {/* Databases & Back-End */}
      <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5">
        <h3 className="font-semibold mb-2">Databases &amp; Back-End</h3>
        <p className="text-gray-700 dark:text-gray-300">
          PostgreSQL, MySQL, MongoDB, REST API design, Database modeling &amp; normalization,
          Query optimization
        </p>
      </div>

      {/* Software & Productivity */}
      <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5">
        <h3 className="font-semibold mb-2">Software &amp; Productivity</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Microsoft Office (Excel, Word, PowerPoint, Outlook), Confluence, SharePoint, Google Workspace
        </p>
      </div>

      {/* Additional */}
      <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-5">
        <h3 className="font-semibold mb-2">Additional</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Fluent in Spanish, Agile/Scrum, Data Visualization, Leadership &amp; Team Collaboration
        </p>
      </div>
    </div>
  </div>
</section>



     {/* Education */}
<section id="education" className="max-w-5xl mx-auto px-4 pt-10 pb-12">
  <h2 className="text-2xl font-bold mb-6">Education</h2>

  <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 p-6 transition hover:shadow-md leading-relaxed">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="font-semibold text-sm">
        Wake Forest University — B.S. in Computer Science, Entrepreneurship Minor
      </h3>
      <span className="text-sm text-gray-500">Dec 2025 • Winston-Salem, NC</span>
    </div>

    <p className="mt-3 text-xs text-gray-800 dark:text-gray-300">
      Software Engineering, Neural Networks & Deep Learning,
      Algorithms & Analysis, Computer Systems II, Web Applications, Computer Vision, Data Structures,
      Database Management Systems, Macroeconomics, Scaling the Entrepreneurial Venture, Venture Capital,
      Evidence-Based Entrepreneurship, Linear Algebra, Data Science & Regression, Calculus I & II
    </p>
  </div>
</section>

 {/* Resume — GRAY band (same as Skills/Projects/About) */}
<section
  id="resume"
  className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gray-100 border-y border-gray-300 dark:bg-gray-900 dark:border-gray-800"
>
  <div className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-bold">Resume</h2>
    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
      View or download a PDF copy.
    </p>

    <div className="mt-4">
  {/* Mobile: single clean button */}
  <div className="sm:hidden">
    <a
      href="/MarioAuquiResume.pdf"
      target="_blank"
      rel="noreferrer"
      className="inline-block px-5 py-3 rounded-2xl border border-gray-300 text-sm font-medium hover:bg-gray-200 transition"
    >
      View Resume
    </a>
  </div>

  {/* Desktop: original buttons */}
  <div className="hidden sm:flex gap-3">
    <a
      href="/MarioAuquiResume.pdf"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 text-sm transition"
    >
      Open PDF in new tab
    </a>
    <a
      href="/MarioAuquiResume.pdf"
      download
      className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 text-sm transition"
    >
      Download PDF
    </a>
  </div>
</div>


  {/* Resume viewer */}
  {/* Desktop/tablet: keep the embedded PDF */}
  <div className="mt-6 hidden sm:block rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-800 bg-white">
    <object
      data="/MarioAuquiResume.pdf"
      type="application/pdf"
      className="w-full h-[80vh]"
      aria-label="Embedded PDF Resume"
    >
      <iframe
        src="/MarioAuquiResume.pdf"
        className="w-full h-[80vh]"
        title="Mario Auqui Resume"
      />
    </object>
  </div>


  </div>
</section>

      {/* Contact */}
      <section id="contact" className=" max-w-5xl mx-auto px-4 pt-16 pb-16 ">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Email: <a className="underline" href="mailto:marioauqui.contact@gmail.com">marioauqui.contact@gmail.com</a> •{" "}
            LinkedIn: <a className="underline" href="https://linkedin.com/in/marioauqui" target="_blank" rel="noreferrer">/in/marioauqui</a> •{" "}
            GitHub: <a className="underline" href="https://github.com/marioauqui" target="_blank" rel="noreferrer">@marioauqui</a>
          </p>
        </div>
      

      {/* Footer */}
      <footer className=" pb-16 pt-10">
        <div className="max-w-5xl mx-auto px-4 text-xs text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Mario Auqui. All rights reserved.
        </div>
      </footer>
      </section>
    </main>
  );
}
