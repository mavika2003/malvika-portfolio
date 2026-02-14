'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Shield,
  Sparkles,
  Terminal,
  Cpu,
  X
} from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

// Custom hook for mouse position (magnetic effect)
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  return mousePosition;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 overflow-x-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="centered-container px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-900"
            >
              Malvika Vitthal Sawant
            </motion.div>
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Activities', 'Skills', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center justify-center min-w-[120px] px-8 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all whitespace-nowrap"
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="centered-container px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="pt-40 pb-32 min-h-screen flex items-center">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 md:order-1"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6"
                >
                  <Sparkles size={16} />
                  Available for opportunities
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                  Hi, I'm{' '}
                  <span className="text-blue-600">
                    Malvika
                  </span>
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl text-slate-700 mb-4 font-light"
                >
                  AI Engineer & ML Specialist
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg"
                >
                  MS in Computer Science (Machine Learning) @ Columbia University. Former AI Engineer at Deriv. Building production AI systems with LLMs, RAG, and cutting-edge Machine Learning.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <MagneticButton
                    href="https://linkedin.com/in/malvikasawant"
                    icon={<Linkedin size={20} />}
                    label="LinkedIn"
                    brand
                  />
                  <MagneticButton
                    href="https://github.com/mavika2003"
                    icon={<Github size={20} />}
                    label="GitHub"
                  />
                  <MagneticButton
                    href="mailto:mvs2153@columbia.edu"
                    icon={<Mail size={20} />}
                    label="Email"
                    outline
                  />
                </motion.div>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-8 mt-12 pt-8 border-t border-slate-200"
                >
                  <Stat number="500+" label="Enterprise Users" />
                
                  <Stat number="Dubai Police x CTF.ae" label="CTF Winner - AED 18,000 prize" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="order-1 md:order-2 relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  {/* Subtle shadow instead of glow */}
                  <div className="absolute -inset-4 bg-slate-200 rounded-3xl blur-2xl opacity-50" />
                  
                  {/* Image container */}
                  <div className="relative bg-white rounded-3xl p-3 shadow-xl border border-slate-200">
                    <Image
                      src="/images/columbia.png"
                      alt="Malvika Sawant"
                      width={600}
                      height={800}
                      className="relative rounded-2xl object-cover w-full aspect-[4/5]"
                      priority
                    />
                    
                    {/* Floating badge - professional style */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-slate-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <Terminal size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Currently</p>
                          <p className="font-semibold text-slate-900">MS Student @ Columbia</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <Section id="about" title="About Me" subtitle="Get to know me better">
            <div className="grid md:grid-cols-3 gap-4">
              <InfoCard
                icon={<GraduationCap className="w-7 h-7" />}
                title="Education"
                description="MS in Computer Science (ML concentration) at Columbia University. B.E. in Computer Science, Minor in Data Science from BITS Pilani, Dubai (GPA 3.7/4.0)"
                delay={0}
              />
              <InfoCard
                icon={<Award className="w-7 h-7" />}
                title="Achievements"
                description="3rd Place at AI × Cybersecurity CTF by Dubai Police & CTF.ae (AED 18,000 prize). Research paper on Neural Networks for Renewable Energy Solutions"
                delay={0.1}
              />
              <InfoCard
                icon={<Briefcase className="w-7 h-7" />}
                title="Experience"
                description="Led production AI systems at Deriv (LLMs, RAG, fraud detection). Former Digital Solutions Intern at Techrobotix, Finance Intern at Adiraaj"
                delay={0.2}
              />
            </div>
          </Section>

          {/* Spacer */}
          <div className="h-25"></div>

          {/* Experience Section */}
          <Section id="experience" title="Experience" subtitle="My professional journey">
            <div className="space-y-8">
              <ExperienceCard
                company="Deriv"
                role="AI Engineer"
                period="July 2025 - December 2025"
                location="Dubai, UAE"
                type="Full-time"
                achievements={[
                  'Led development of production AI systems leveraging LLMs, RAG, vector search, and agentic workflows for automation, fraud detection, IAM, and enterprise decision support, impacting 4+ enterprise departments',
                  'Built and deployed ML/LLM pipelines (GPT-4.1, Claude, scikit-learn) with MLOps, integrating GCP/AWS and APIs (Slack, Okta, Datadog), processing 100k+ requests/day with <1s latency',
                  'Delivered Slack-based AI assistants, multilingual QA pipelines, and real-time analytics, improving HR, Security, Finance, and Operations workflow efficiency by 25–40%',
                  'Designed and expanded AI-driven fraud detection and access-control optimization systems, reducing false positives by 30% and enhancing risk mitigation coverage across 10+ enterprise platforms',
                  'Collaborated cross-functionally with Security, Platform, and Operations teams to productionize AI solutions, supporting 500+ internal users',
                ]}
              />
              <div className="h-5"></div>
              <ExperienceCard
                company="Deriv"
                role="AI Engineer Intern"
                period="February 2025 - June 2025"
                location="Dubai, UAE"
                type="Internship"
                achievements={[
                  'Developed unsupervised anomaly detection systems (Isolation Forest, XGBoost) for security and financial fraud use cases, detecting anomalies in 50k+ logs per day',
                  'Built log ingestion and classification pipelines integrating Datadog, Okta, Cloudflare, and LLM-based filtering, reducing manual monitoring effort by 60%',
                  'Engineered LLM-powered tools for SOC automation, IAM audits, and internal workflow optimization, saving ~10 hours/week of manual work across teams',
                ]}
              />
              <div className="h-5"></div>
              <ExperienceCard
                company="BITS Pilani, Dubai"
                role="Professional Assistant, Computer Programming"
                period="September 2024 - January 2025"
                location="Dubai, UAE"
                type="Part-time"
                achievements={[
                  'Led study groups of 20+ students, assisted with coding labs, and supported grading for undergraduate programming courses',
                ]}
              />
              <div className="h-5"></div>
              <ExperienceCard
                company="Techrobotix FZCO"
                role="Digital Solutions Intern"
                period="June 2023 - August 2023"
                location="Dubai, UAE"
                type="Internship"
                achievements={[
                  'Constructed and deployed a cross-platform campus navigation app using Unity (C#) for Android and iOS, downloaded and utilized by 500+ students and staff',
                ]}
              />
              <div className="h-5"></div>
              <ExperienceCard
                company="Adiraaj Art of Finance"
                role="Summer Intern, Finance and Automation"
                period="June 2022 - August 2022"
                location="Mumbai, India"
                type="Internship"
                achievements={[
                  'Automated client alerts using MySQL, maintained databases, and performed financial calculations in Excel',
                ]}
              />
            </div>
          </Section>

          {/* Spacer */}
          <div className="h-25"></div>
          {/* Gallery Section */}
          <Section id="gallery" title="Gallery" subtitle="Moments & milestones">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryCard
                image="/images/ctf-award.png"
                title="CTF Award Ceremony"
                description="3rd Place at AI × Cybersecurity CTF"
                category="Achievement"
              />
              <GalleryCard
                image="/images/ctf-ceremony.png"
                title="Dubai Police CTF"
                description="Winning team at Capture The Flag competition"
                category="Competition"
              />
              <GalleryCard
                image="/images/columbia.png"
                title="Columbia University"
                description="MS in Computer Science"
                category="Education"
              />
              <GalleryCard
                image="/images/devfest.png"
                title="DevFest Dubai"
                description="Speaking at tech conferences"
                category="Speaking"
              />
              <GalleryCard
                image="/images/deriv.png"
                title="Deriv"
                description="AI Engineering team"
                category="Work"
              />
            </div>
          </Section>

          {/* Spacer */}
          <div className="h-25"></div>

          {/* Projects Section */}
          <Section id="projects" title="Projects" subtitle="Featured work">
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Salary Prediction Web App"
                description="Built ML model using scraped LinkedIn data; deployed using Python, Pandas, and Streamlit"
                tech={['Python', 'Pandas', 'Streamlit', 'Machine Learning']}
                icon={<Brain />}
                color="bg-blue-600"
              />
              <ProjectCard
                title="Attendance Manager"
                description="End-to-end hardware-software system using Flutter, MySQL, and Arduino"
                tech={['Flutter', 'MySQL', 'Arduino', 'IoT']}
                icon={<Cpu />}
                color="bg-indigo-600"
              />
              <ProjectCard
                title="Neural Networks for Renewable Energy"
                description="Research paper on Neural Networks based Renewable Energy Solutions for Sustainable Homes"
                tech={['Neural Networks', 'Research', 'Sustainability']}
                icon={<Sparkles />}
                color="bg-emerald-600"
              />
              <ProjectCard
                title="Data & Systems Projects"
                description="JavaFX game development, IPL analytics with Python/MySQL, and personal expense tracker"
                tech={['JavaFX', 'Python', 'MySQL', 'Data Analysis']}
                icon={<Database />}
                color="bg-orange-600"
              />
            </div>
          </Section>

          {/* Spacer */}
          <div className="h-25"></div>

          {/* Activities & Certifications Section */}
          <Section id="activities" title="Activities & Certifications" subtitle="Beyond the code">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
              >
                <div className="translate-x-5">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">ACM-W Dubai</h3>
                  <p className="text-slate-500 mb-4 text-sm">Event Executive • June 2023 – August 2024</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                    Conducted workshops on Machine Learning, Python programming, and Bootstrap
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                    Organized alumni relation events for the Master&apos;s program, improving engagement by 30%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                    Hosted on-campus quizzes and brainstorming sessions on upcoming technologies, engaging 100+ students per event
                  </li>
                </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
              >
                <div className="translate-x-5">
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Certifications</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0" />
                    Docker and Kubernetes on O&apos;Reilly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0" />
                    Global Cyber Skills Benchmark CTF 2025: Operation Blackout, by HACKTHEBOX
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 flex-shrink-0" />
                    Security and Compliance courses, GDPR at Deriv
                  </li>
                </ul>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Spacer */}
          <div className="h-25"></div>

          {/* Skills Section */}
          <Section id="skills" title="Skills" subtitle="Technologies I work with">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                icon={<Brain className="w-8 h-8" />}
                title="AI & ML"
                skills={['Generative AI', 'RAG', 'Microsoft AutoGen', 'LangGraph', 'LangChain', 'spaCy', 'Vector Embeddings', 'Prompt Engineering', 'Flowise', 'N8N AI Workflows']}
                color="blue"
              />
              <SkillCard
                icon={<Code className="w-8 h-8" />}
                title="Programming"
                skills={['Python', 'C', 'Java', 'C++', 'C#', 'JavaScript / TypeScript']}
                color="indigo"
              />
              <SkillCard
                icon={<Database className="w-8 h-8" />}
                title="Data & Databases"
                skills={['scikit-learn', 'pandas', 'NumPy', 'MySQL', 'MongoDB', 'Supabase (PostgreSQL)']}
                color="purple"
              />
              <SkillCard
                icon={<Cloud className="w-8 h-8" />}
                title="Cloud & DevOps"
                skills={['Docker', 'Kubernetes', 'GCP', 'AWS', 'CI/CD', 'REST APIs']}
                color="cyan"
              />
              <SkillCard
                icon={<Shield className="w-8 h-8" />}
                title="Security & IAM"
                skills={['Datadog API', 'Okta', 'CVE/Threat Intelligence', 'Authentication & Authorization', 'JWT Session Management']}
                color="emerald"
              />
              <SkillCard
                icon={<ExternalLink className="w-8 h-8" />}
                title="Design & Development"
                skills={['Unity', 'Slack API', 'Next.js', 'Node.js', 'Selenium', 'Playwright', 'ProductHunt API', 'Tavily API', 'Firecrawl', 'Langfuse']}
                color="orange"
              />
            </div>
          </Section>

          {/* Spacer */}
          <div className="h-25"></div>

          {/* Contact Section */}
          <Section id="contact" title="Get In Touch" subtitle="Let's work together">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl" />
                
                <div className="relative z-10 text-center translate-x-5">
                  <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about AI and technology!
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 gap-x-12 max-w-2xl mx-auto mb-10">
                    <ContactCard
                      icon={<Mail className="w-6 h-6" />}
                      label="Email"
                      value="mvs2153@columbia.edu"
                      href="mailto:mvs2153@columbia.edu"
                    />
                    <ContactCard
                      icon={<Phone className="w-6 h-6" />}
                      label="Phone"
                      value="(943) 288-5039"
                      href="tel:+19432885039"
                    />
                    <ContactCard
                      icon={<Linkedin className="w-6 h-6" />}
                      label="LinkedIn"
                      value="malvikasawant"
                      href="https://linkedin.com/in/malvikasawant"
                    />
                    <ContactCard
                      icon={<Github className="w-6 h-6" />}
                      label="GitHub"
                      value="mavika2003"
                      href="https://github.com/mavika2003"
                    />
                  </div>

                  <div className="h-5"></div>

                  <motion.a
                    href="mailto:mvs2153@columbia.edu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
                  >
                    <Mail size={20} />
                    Send me an email
                  </motion.a>
                  <div className="h-5"></div>
                </div>
              </div>
            </div>
          </Section>

        </div>
      </div>
      <div className="h-10"></div>
      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-slate-200 mt-20 bg-white">
        <div className="centered-container px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-slate-900 mb-2">
                Malvika Sawant
              </p>
              <p className="text-slate-500">AI Engineer & ML Specialist</p>
            </div>
            
            <div className="flex gap-6">
              <SocialLink href="https://linkedin.com/in/malvikasawant" icon={<Linkedin size={20} />} />
              <SocialLink href="https://github.com/mavika2003" icon={<Github size={20} />} />
              <SocialLink href="mailto:mvs2153@columbia.edu" icon={<Mail size={20} />} />
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 Malvika Sawant. Crafted with Next.js, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Magnetic Button Component
function MagneticButton({ href, icon, label, primary, outline, brand }: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  primary?: boolean;
  outline?: boolean;
  brand?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
        ${primary 
          ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg' 
          : brand
          ? 'bg-white border border-slate-200 text-blue-600 hover:bg-slate-50 hover:border-slate-300'
          : outline
          ? 'border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-white'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }
      `}
    >
      {icon}
      {label}
    </motion.a>
  );
}

// Stat Component
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-blue-600">
        {number}
      </p>
      <p className="text-sm text-slate-500 mt-1">{label}</p>
    </div>
  );
}

// Section Component
function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className="py-24 w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold mb-4 uppercase tracking-wider text-sm"
          >
            {subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
          />
        </div>
        {children}
      </motion.div>
    </section>
  );
}

// Info Card Component
function InfoCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 min-w-0 overflow-hidden"
    >
      <div className="relative z-10 translate-x-3 min-w-0">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed break-words">{description}</p>
      </div>
    </motion.div>
  );
}

// Experience Card Component
function ExperienceCard({
  company,
  role,
  period,
  location,
  image,
  type,
  achievements,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  image?: string;
  type?: string;
  achievements: string[];
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
    >
      <div className="relative z-10 p-8 translate-x-5">
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
          {image && (
            <div className="flex-shrink-0 w-20 h-20 relative">
              <Image
                src={image}
                alt={company}
                width={80}
                height={80}
                className="relative rounded-xl object-cover w-full h-full border border-slate-200"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-slate-900">{role}</h3>
              {type && (
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                  {type}
                </span>
              )}
            </div>
            <p className="text-lg text-blue-600 font-semibold mb-1">{company}</p>
            <p className="text-slate-500 text-sm">{period} • {location}</p>
          </div>
        </div>
        
        <ul className="space-y-3">
          {achievements.slice(0, isExpanded ? undefined : 3).map((achievement, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 text-slate-700"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <span className="leading-relaxed">{achievement}</span>
            </motion.li>
          ))}
        </ul>
        
        {achievements.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
          >
            {isExpanded ? 'Show less' : 'Show more'}
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              ▼
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

// Gallery Card Component
function GalleryCard({ image, title, description, category }: { image: string; title: string; description: string; category: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isExpanded]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        onClick={() => setIsExpanded(true)}
        className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute top-4 left-4 z-20 translate-x-5">
          <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-slate-700 rounded-full border border-slate-200 shadow-sm">
            {category}
          </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-x-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-slate-200 text-sm">{description}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image}
                alt={title}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">{title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Project Card Component
function ProjectCard({ title, description, tech, icon, color }: { title: string; description: string; tech: string[]; icon: React.ReactNode; color: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
      
      <div className="p-8 translate-x-5">
        <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Skill Card Component
function SkillCard({ icon, title, skills, color }: { icon: React.ReactNode; title: string; skills: string[]; color: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const colorMap: Record<string, { bg: string; text: string; dot: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-600' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-600' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', dot: 'bg-purple-600' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', dot: 'bg-cyan-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', dot: 'bg-orange-600' },
  };
  
  const colors = colorMap[color] || colorMap.blue;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
    >
      <div className="translate-x-5">
        <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
      </div>
      <ul className="space-y-3 translate-x-5">
        {skills.map((skill, index) => (
          <motion.li 
            key={skill} 
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 text-slate-600"
          >
            <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Contact Card Component
function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 px-8 py-5 pl-16 bg-slate-50 rounded-xl border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all group"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{value}</p>
      </div>
    </motion.a>
  );
}

// Social Link Component
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all"
    >
      {icon}
    </motion.a>
  );
}