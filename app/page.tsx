"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Skills from "../components/skills";
import SkillsShow from "../components/skillsshow";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      id: 1,
      title: "EMOIFY - AI Based Emotion Recognition and Personalized Recommendation System",
      description: "AI-based emotion recognition and personalized recommendation system using deep learning and multi AI workflow.",
      technologies: ["Java", "JavaFX", "Python", "Flask", "SQLite3", "Langchain", "OpenAI API", "LLM"],
      github: "https://github.com/RPrashan99/JavaFXApplication_EMOFI.git",
      demo: "https://smart-home-demo.com",
      image: "/projects/Emoify.jpg"
    },
    {
      id: 2,
      title: "Book Fair Stall Reservation Management System",
      description: "Computer vision project using OpenCV and YOLO for vehicle detection and traffic density analysis. Deployed on Raspberry Pi.",
      technologies: ["ReactJS", "Springboot", "PostgreSQL", "Kubernetes", "Docker", "Git", "Jenkins"],
      github: "https://github.com/DulshanSiriwardhana/CIBF-Reservation-Portal.git",
      demo: null,
      image: "/projects/BookFair.png"
    },
    {
      id: 3,
      title: "Web Based Online Cake Shop System with DevOps",
      description: "A modern e-commerce platform with seamless browsing, ordering, and inventory management for both users and administrators.",
      technologies: ["ReactJS", "NodeJS", "PostgreSQL", "Kubernetes", "Docker", "Git", "Jenkins"],
      github: "https://github.com/WijesekaraDNM/cake-shop-system-microservices.git",
      demo: null,
      image: "/projects/CakeShop.png"
    },
    {
      id: 4,
      title: "Game Review Sentiment Analyzer and Summarizer",
      description: "Analyze sentiment of game reviews and generate summaries using NLP techniques.",
      technologies: ["ReactJS", "Python", "Flask", "NLP", "RoBERTa", "BART", "MLOps"],
      github: "https://github.com/RPrashan99/Game-Review-Sentiment-Analysis-Web-app.git",
      demo: null,
      image: "/projects/GameReview.png"
    },
    {
      id: 5,
      title: "Web based Disaster Management System",
      description: "A web application for managing disaster response and recovery operations.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Express", "Git"],
      github: "https://github.com/RPrashan99/Disaster_Management_System.git",
      demo: null,
      image: "/projects/DisasterWeb.png"
    },
    {
      id: 6,
      title: "Travel Helper Mobile Application",
      description: "A mobile application that helps travelers plan trips, find local attractions, and manage travel itineraries.",
      technologies: ["Kotlin Jetpack", "Firebase", "Android Studio", "Google Maps API", "Figma"],
      github: "https://github.com/RPrashan99/Travel-Helper.git",
      demo: null,
      image: "/projects/TravelHelper.png"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Testing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-5 pb-5 px-4">
        <div className="flex flex-row max-w-8xl mx-auto text-center">
          <div className="flex mb-2">
            <div className="w-200 h-200 mx-auto rounded-full flex items-center justify-center text-6xl">
              <img src="/profile_pic.jpg" alt="Profile Picture" className="rounded-2xl object-cover " />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Rashmitha Thewarapperuma
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4">
              Computer Engineering Graduate
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about Software, AI, hardware design, embedded systems, and building innovative solutions at the intersection of software and hardware.
            </motion.p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105">
                View Projects
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                href="#contact" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                Contact Me
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
            <p>
              I'm a Computer Engineering student with a deep passion for understanding how computers work from the ground up. My interests span across digital circuit design, embedded systems programming, and modern software development.
            </p>
            <p>
              Through my coursework and personal projects, I've gained hands-on experience with FPGA design, microcontroller programming, machine learning, and full-stack web development. I love tackling complex problems that require both hardware and software expertise.
            </p>
            <p>
              When I'm not coding or designing circuits, you can find me exploring new technologies, contributing to open-source projects, or tinkering with electronics in my home lab.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-2">🎓</div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm">B.S. Computer Engineering<br/>GPA: 3.69/4.0</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-2">💼</div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm">Intern at VSIS<br/>Network Systems Engineer</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="font-semibold mb-2">Achievements</h3>
                <p className="text-sm">1st Runner up<br/>Mobitel Hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-top justify-center text-8xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                      GitHub →
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-semibold">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <Skills/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white dark:bg-gray-600 rounded-md text-sm shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
          <SkillsShow />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always interested in hearing about new opportunities, collaborations, or just chatting about technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-semibold">rashmithatd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                    🔗
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="font-semibold">https://www.linkedin.com/in/rashmitha-thewarapperuma-54b9122b5</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <p className="font-semibold">https://github.com/RPrashan99</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Send Message
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