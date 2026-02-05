import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Phone, Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-6xl font-bold text-slate-900">
              SJ
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Swastik Jaiswal
          </h1>
          <p className="text-2xl text-slate-300 mb-4">B.Tech IT Student | Developer</p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Building scalable web applications with modern technologies. Passionate about full-stack development, problem-solving, and creating elegant solutions to complex challenges.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
              Get In Touch
              <Mail size={20} />
            </a>
            <a href="#projects" className="border border-slate-600 hover:border-emerald-400 px-8 py-3 rounded-lg transition-colors">
              View Work
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm a B.Tech IT student in my 3rd year at university, passionate about web development and software engineering. I love building practical applications that solve real-world problems with clean, efficient code.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not studying or coding, you can find me exploring new frameworks, contributing to open-source projects, or diving deep into competitive programming and problem-solving.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-emerald-400 font-semibold mb-2">Education</h3>
                <p className="text-slate-300">B.Tech IT - 3rd Year</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-emerald-400 font-semibold mb-2">Focus</h3>
                <p className="text-slate-300">Full-Stack Development</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-emerald-400 font-semibold mb-2">Availability</h3>
                <p className="text-slate-300">Open to internships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
                tags: ["React", "Node.js", "PostgreSQL"],
                link: "#"
              },
              {
                title: "Task Management App",
                description: "Real-time collaborative task manager with team features, notifications, and analytics.",
                tags: ["React", "Firebase", "Tailwind"],
                link: "#"
              },
              {
                title: "AI Content Generator",
                description: "AI-powered tool for generating marketing content with customizable templates and tone.",
                tags: ["TypeScript", "OpenAI", "Next.js"],
                link: "#"
              },
              {
                title: "Fitness Tracker",
                description: "Mobile-first fitness tracking app with workout plans, progress charts, and social features.",
                tags: ["React Native", "Express", "MongoDB"],
                link: "#"
              },
              {
                title: "Portfolio CMS",
                description: "Headless CMS for managing portfolio content with drag-and-drop builder and SEO tools.",
                tags: ["Vue", "Strapi", "GraphQL"],
                link: "#"
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time analytics platform with customizable charts, reports, and data export features.",
                tags: ["React", "D3.js", "Python"],
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-emerald-400 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-900 px-3 py-1 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 transition-colors">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Frontend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vue.js</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Backend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>REST / GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS / Vercel</li>
                <li>Jest / Vitest</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="mailto:swastik0595@gmail.com" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Mail size={20} />
              Email
            </a>
            <a href="tel:7275059519" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Phone size={20} />
              Call
            </a>
            <a href="https://github.com/Swastik2425" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/swastik2425" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/Swastik2425/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Code2 size={20} />
              LeetCode
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-700 text-center text-slate-400">
        <p>&copy; 2026 Swastik Jaiswal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
