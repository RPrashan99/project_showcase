"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Skills from "../components/skills";
import SkillsShow from "../components/skillsshow";
import ProjectCard from "../components/projectcard";
import BlockRevealImage from "../components/blockrevealimage";
import ProjectModal from "../components/projectmodal";
import { arch } from "os";
import { features } from "process";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Each card waits 0.2s after the previous one
    }
  }
};  

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      id: 1,
      projectcode: "EMOIFY",
      title: "EMOIFY - AI Based Emotion Recognition and Personalized Recommendation System",
      description: "AI-based emotion recognition and personalized recommendation system using deep learning and multi AI workflow.",
      technologies: ["Java", "JavaFX", "Python", "Flask", "SQLite3", "Langchain", "OpenAI API", "LLM"],
      github: "https://github.com/RPrashan99/JavaFXApplication_EMOFI.git",
      demo: "https://smart-home-demo.com",
      image: "/projects/Emoify.jpg",
      features: [
        "Emotion Recognition: Real time vision deep learning models to analyze facial expressions",  
        "Personalized Recommendations: Provides personalized content recommendations, such as music, movies, or activities",
        "Multi AI Workflow: Includes emotion algorithms and recommendation LLM",
        "User-Friendly Interface: JavaFX interface that allows users to easily interact with the system"
      ],
      architectureImage: "/projects/EMOIFY/softwareArch.png",
      gallery:[
        "/projects/EMOIFY/gallery/FloatingBtn.png",
        "/projects/EMOIFY/gallery/InitStart.png",
        "/projects/EMOIFY/gallery/Start.png",
        "/projects/EMOIFY/gallery/Register.png",
        "/projects/EMOIFY/gallery/InitAppAdd.png",
        "/projects/EMOIFY/gallery/Home.png",
        "/projects/EMOIFY/gallery/Apps.png",
        "/projects/EMOIFY/gallery/AppsAdd.png",
        "/projects/EMOIFY/gallery/Settings.png",
        "/projects/EMOIFY/gallery/Chat.png",
        "/projects/EMOIFY/gallery/Recom.png",
        "/projects/EMOIFY/gallery/RecomExpand.png"
      ]
    },
    {
      id: 2,
      projectcode: "BOOKFAIR",
      title: "Book Fair Stall Reservation Management System",
      description: "Computer vision project using OpenCV and YOLO for vehicle detection and traffic density analysis. Deployed on Raspberry Pi.",
      technologies: ["ReactJS", "Springboot", "PostgreSQL", "Kubernetes", "Docker", "Git", "Jenkins"],
      github: "https://github.com/DulshanSiriwardhana/CIBF-Reservation-Portal.git",
      demo: null,
      image: "/projects/BookFair.png",
      features: [
        "Stall Reservation: View available stalls, make reservations, and manage their bookings through a user-friendly web interface.",
        "Admin Dashboard: Manage stall availability, view reservation statistics, and handle user inquiries",
        "Real-time Updates: Real-time updates on stall availability and reservation status to ensure a smooth booking experience.",
        "Scalable Architecture: Built with a microservices architecture using Spring Boot and deployed on Kubernetes for scalability and reliability."
      ],
      architectureImage: "/projects/BOOKFAIR/softwareArch.png"
    },
    {
      id: 3,
      projectcode: "CAKESHOP",
      title: "Web Based Online Cake Shop System with DevOps",
      description: "A modern e-commerce platform with seamless browsing, ordering, and inventory management for both users and administrators.",
      technologies: ["ReactJS", "NodeJS", "PostgreSQL", "Kubernetes", "Docker", "Git", "Jenkins"],
      github: "https://github.com/WijesekaraDNM/cake-shop-system-microservices.git",
      demo: null,
      image: "/projects/CakeShop.png",
      features: [
        "Seamless Browsing: Users can easily browse through a wide variety of cakes and products.",
        "Easy Ordering: The system allows users to place orders with a simple and intuitive interface.",
        "Inventory Management: Administrators can efficiently manage inventory levels and track product availability."
      ],
      architectureImage: "/projects/CAKESHOP/softwareArch.png"
    },
    {
      id: 4,
      projectcode: "GAMEREVIEWS",
      title: "Game Review Sentiment Analyzer and Summarizer",
      description: "Analyze sentiment of game reviews and generate summaries using NLP techniques.",
      technologies: ["ReactJS", "Python", "Flask", "NLP", "RoBERTa", "BART", "MLOps"],
      github: "https://github.com/RPrashan99/Game-Review-Sentiment-Analysis-Web-app.git",
      demo: null,
      image: "/projects/GameReview.png",
      features: [
        "Sentiment Analysis: Analyzes the sentiment of game reviews using advanced NLP techniques.",
        "Summary Generation: Generates concise summaries of game reviews for quick insights.",
        "User-Friendly Interface: Provides an intuitive interface for users to interact with the system."
      ],
      architectureImage: "/projects/GAMEREVIEWS/softwareArch.png"
    },
    {
      id: 5,
      projectcode: "DISASTERMANAGEMENT",
      title: "Web based Disaster Management System",
      description: "A web application for managing disaster response and recovery operations.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Express", "Git"],
      github: "https://github.com/RPrashan99/Disaster_Management_System.git",
      demo: null,
      image: "/projects/DisasterWeb.png",
      features: [
        "Real-time Monitoring: Provides real-time updates on disaster situations and response efforts.",
        "Resource Management: Allows for efficient allocation and tracking of resources during disaster response.",
        "Communication Platform: Facilitates seamless communication between emergency responders and affected communities."
      ],
      architectureImage: "/projects/DISASTERMANAGEMENT/softwareArch.png"
    },
    {
      id: 6,
      projectcode: "TRAVELHELPER",
      title: "Travel Helper Mobile Application",
      description: "A mobile application that helps travelers plan trips, find local attractions, and manage travel itineraries.",
      technologies: ["Kotlin Jetpack", "Firebase", "Android Studio", "Google Maps API", "Figma"],
      github: "https://github.com/RPrashan99/Travel-Helper.git",
      demo: null,
      image: "/projects/TravelHelper.png",
      features: [
        "Trip Planning: Helps users plan their trips with ease, including destination selection and itinerary creation.",
        "Local Attractions: Provides information about local attractions and activities at various destinations.",
        "Itinerary Management: Allows users to manage and update their travel itineraries in real-time."
      ],
      architectureImage: "/projects/TRAVELHELPER/softwareArch.png"
    }
  ];

  const skills = {
    "Programming Languages": ["C/C++","C#", "Python", "JavaScript/TypeScript", "Java", "Kotlin", "Flutter"],
    "Web Development": ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "Springboot", "Tailwind CSS", "REST APIs"],
    "Embedded Systems": ["Arduino", "ESP32", "Raspberry Pi", "STM32", "RTOS", "I2C/SPI/UART"],
    "Hardware & Digital Design": ["FPGA", "Verilog", "Digital Logic", "Computer Architecture", "PCB Design"],
    "Machine Learning & AI": ["NLP", "LLM", "TensorFlow", "PyTorch", "OpenCV", "NumPy", "Scikit-learn", "Computer Vision"],
    "Tools & Technologies": ["Git", "Docker", "Jenkins", "Kubernetes", "Linux", "MATLAB"]
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">RP</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
              <a href="testing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Testing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center justify-center">
          {/* Profile Picture */}
          {/* <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src="/profile_pic.jpg" 
                  alt="Rashmitha Thewarapperuma" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100" 
                />
              </div>
            </div>
          </motion.div> */}

          <BlockRevealImage src="/profile_pic.jpg" rows={6} cols={6} />

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                Available for Opportunities
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
                Rashmitha <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600">
                  Thewarapperuma
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-4"
            >
              Computer Engineering Graduate
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-500 dark:text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Bridging the gap between <span className="text-slate-900 dark:text-slate-200 font-semibold">robust hardware</span> and <span className="text-slate-900 dark:text-slate-200 font-semibold">intelligent software</span>. Specializing in AI-driven solutions and high-performance web systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] overflow-hidden"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 rounded-xl font-bold text-slate-700 dark:text-slate-300 transition-colors"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
                WHO <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-600">AM I?</span>
              </h2>
              <div className="h-2 w-20 bg-blue-500 mt-4 rounded-full" />
            </div>

            <div className="md:w-2/3 space-y-6">
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                I’m a <span className="text-slate-900 dark:text-white font-medium">Computer Engineering student</span> obsessed with the bridge between electrons and code. I don't just write software; I build systems from the gates up.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                My toolkit ranges from <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-sm font-mono">Networks</span> to 
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md text-sm font-mono ml-2">Full-stack Web</span>. I thrive in the space where hardware constraints meet software possibilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "icons/education.png", 
                label: "Education", 
                title: "B.S. Computer Engineering", 
                sub: "GPA: 3.69/4.0",
                color: "blue" 
              },
              { 
                icon: "icons/gear.png", 
                label: "Experience", 
                title: "Intern @ VSIS", 
                sub: "Network Systems Engineer",
                color: "indigo" 
              },
              { 
                icon: "icons/medal.png", 
                label: "Achievements", 
                title: "1st Runner Up", 
                sub: "Mobitel Hackathon",
                color: "cyan" 
              },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col justify-end group p-8 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                {/* <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div> */}
                <img src={item.icon} alt={item.label} className="absolute top-1 right-1 w-24 h-24 mb-4 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-130" />
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">{item.label}</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Featured <span className="text-blue-600">Projects</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-md">
                A collection of systems ranging from low-level hardware design to high-level web architectures.
              </p>
            </div>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800 hidden md:block mb-4 mx-8" />
          </div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map(project => (
              <motion.div variants={item} key={project.id} onClick={() => setSelectedProject(project)}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div> */}
          <ProjectModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <SkillsShow />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Let's <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Have a question or a proposal? I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { 
                  label: "Email", 
                  value: "rashmithatd@gmail.com", 
                  icon: "mail.png", 
                  link: "mailto:rashmithatd@gmail.com" 
                },
                { 
                  label: "LinkedIn", 
                  value: "Rashmitha Thewarapperuma", 
                  icon: "linkedin.png", 
                  link: "https://www.linkedin.com/in/rashmitha-thewarapperuma-54b9122b5" 
                },
                { 
                  label: "GitHub", 
                  value: "RPrashan99", 
                  icon: "github.png", 
                  link: "https://github.com/RPrashan99" 
                }
              ].map((info, i) => (
                <a 
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-2xl bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                    <img src={`${info.icon}`} alt={info.label} className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{info.label}</p>
                    <p className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-[180px] sm:max-w-none">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-3 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all overflow-hidden shadow-lg shadow-blue-500/20"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="group-hover:translate-x-1 transition-transform relative z-10">🚀</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Rashmitha Prashan. Built with Next.js and Tailwind CSS.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/RPrashan99" className="hover:text-blue-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/rashmitha-thewarapperuma-54b9122b5" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}