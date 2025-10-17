// src/app/page.tsx
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image"; // ✅ added

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur bg-gray-50/90 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm">

        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Mario Auqui</a>
          <div className="flex items-center gap-5">
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="#about" className="hover:opacity-70">About</a>
              <a href="#projects" className="hover:opacity-70">Projects</a>
              <a href="#research" className="hover:opacity-70">Research</a>
              <a href="#experience" className="hover:opacity-70">Experience</a>
              <a href="#skills" className="hover:opacity-70">Skills</a>
              <a href="#education" className="hover:opacity-70">Education</a>
              <a href="#resume" className="hover:opacity-70">Resume</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
    <section 
      id="home" 
      className=" bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-16">        
        <div className="grid md:grid-cols-4 gap-y-6 md:gap-x-12 items-center">
          <div className="md:col-span-3 md:pr-10">
            <h1 className="text-[1.75rem] md:text-[2.5rem] font-extrabold leading-tight">
              Computer Science and Entrepreneurship              
            </h1>                  
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
             Senior at Wake Forest University with interests in Software Engineering, Artificial Intelligence, and Innovation
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
                Download resume
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
          </div>
          <div className="md:col-span-1 flex justify-end ml-auto">
            <div className="aspect-square max-w-[250px] md:max-w-[300px] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm grid place-items-center overflow-hidden">
              {/* ✅ headshot wired up */}
              <Image
                src="/headshot.jpg"      // file lives at public/headshot.jpg
                alt="Mario Auqui headshot"
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
  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-8 leading-relaxed text-[1.05rem] text-gray-700 dark:text-gray-300 space-y-6">
    <h2 className="text-2xl font-bold mb-6">About Me</h2>

    <p className="leading-8">
      My name is Mario Auqui, and I’m currently a senior at Wake Forest University, graduating in December 2025.
      After graduation, I plan to spend a few months traveling across the country, exploring places like California,
      Texas, and Washington State to meet new people, work on personal projects, and begin a new chapter in my life
      before starting a full-time role.
    </p>

    <p className="leading-8">
      During my time in college, I’ve had the opportunity to work on summer research with a professor using object
      detection models for Amazon forest conservation, intern at The Clearing House on the Innovation and Machine
      Learning team, and intern at Atlantic General Construction in project management.
    </p>

    <p className="leading-8">
      I’d describe myself as someone who loves to learn, constantly asks questions, and enjoys understanding how and
      why things work. I see myself as a leader, but also as someone who thrives in collaborative environments.
    </p>

    <p className="leading-8">
      Outside of work, you can usually find me training at the gym, rolling in Brazilian Jiu-Jitsu, exploring nature,
      reading, or capturing moments on my mirrorless camera. Other times, I’m at a cat café with a good cup of coffee
      or already on the open road, heading toward my next destination. I’m always open to connecting, so feel free
      to reach out, I’d love to chat!
    </p>
  </div>
</section>


      {/* Projects */}
      <section id="projects" className="bg-gray-50 border-y border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
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
      <section id="research" className="max-w-5xl mx-auto px-4 pt-16 pb-16">
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
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
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
      <section id="skills" className="max-w-5xl mx-auto px-4 pt-16 pb-16">
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
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
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
      <section id="resume" className="max-w-5xl mx-auto px-4 pt-16 pb-16">
        <h2 className="text-2xl font-bold">Resume</h2>
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
      <section id="contact" className=" bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800 ">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-16">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Email: <a className="underline" href="mailto:marioauqui.contact@gmail.com">marioauqui.contact@gmail.com</a> • {" "}
            LinkedIn: <a className="underline" href="https://linkedin.com/in/marioauqui" target="_blank" rel="noreferrer">/in/marioauqui</a> • {" "}
            GitHub: <a className="underline" href="https://github.com/marioauqui" target="_blank" rel="noreferrer">@marioauqui</a>
          </p>
        </div>
      

      {/* Footer */}
      <footer className=" pb-16 pt-10">
        <div className="max-w-5xl mx-auto px-4 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mario Auqui. All rights reserved.
        </div>
      </footer>
      </section>
    </main>
  );
}
