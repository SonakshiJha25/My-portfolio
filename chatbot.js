// ===== Sonakshi's Portfolio AI Assistant – Conversational Logic =====

// Structured portfolio data to power the AI Assistant
const portfolioData = {
  about: {
    summary: "Sonakshi Jha is a final-year Computer Science Engineering student at VIT-AP (Vellore Institute of Technology, AP) graduating in August 2026. She is a Software Engineer specializing in the MERN stack and AI-driven platforms, blending clean architectural patterns with robust, scalable engineering solutions. She has co-authored a deep learning research paper published on IEEE Xplore (96% tumor detection accuracy) and has managed product lifecycles as a Project Manager and AI Developer intern.",
    goals: "Immediate goal: secure a high-performance Software Engineer or Full-Stack Developer position. Long-term: lead engineering teams and build scalable AI SaaS products that address real-world challenges.",
    philosophy: "She believes in bridging the gap between technical complexity and user-centric design—crafting clean backend schemas while ensuring frontend responsiveness and micro-animations are perfect.",
    vitap: "Vellore Institute of Technology, AP (VIT-AP). She is a B.Tech Computer Science student there (2022-2026) with a CGPA of 8.56. She has been very active in campus life, leading clubs like DIY Club and Rotaract."
  },
  skills: {
    all: "Here is Sonakshi's full toolkit:<br><br>" +
         "• 💻 <strong>Languages</strong>: Java (OOPs), JavaScript, Python, TypeScript, MATLAB<br>" +
         "• 🎨 <strong>Frontend</strong>: React.js, Next.js, HTML5, CSS3, Tailwind CSS, WordPress<br>" +
         "• ⚙️ <strong>Backend & Databases</strong>: Node.js, Express.js, MongoDB, MySQL / SQL<br>" +
         "• ☁️ <strong>Tools & Platforms</strong>: Git, GitHub, Cloudinary, Netlify, Render, SAP BTP (Business Technology Platform)<br>" +
         "• 🧠 <strong>Core CS</strong>: Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, Agile Roadmap Planning",
    languages: "Java, JavaScript, Python, TypeScript, and MATLAB.",
    frontend: "React.js, Next.js, HTML5, CSS3, Tailwind CSS, and WordPress.",
    backend: "Node.js, Express.js, RESTful APIs, JWT authentication, and MVC backend architecture.",
    database: "MongoDB (NoSQL document schemas) and MySQL (relational SQL query optimization).",
    tools: "Git, GitHub, Cloudinary (media hosting), Netlify (frontend deployments), Render (backend deployments), and SAP BTP.",
    core: "Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, and Agile methodology."
  },
  projects: {
    pixora: {
      name: "Pixora – AI Image Generation SaaS",
      description: "Pixora is an AI-powered image generation SaaS built using the MERN stack (MongoDB, Express, React, Node.js). It features JWT authentication, protected API routes, Cloudinary storage, a daily credit reset system (100 credits per user) to manage image gen limits, and a clean, responsive layout. It is fully deployed on Netlify (frontend) and Render (backend).",
      tech: "MongoDB, Express.js, React.js, Node.js, JWT, and Cloudinary.",
      links: "🎨 <a href='https://pixorify.netlify.app/' target='_blank'>Pixora Live Demo</a> | <a href='https://github.com/SonakshiJha25' target='_blank'>GitHub Code</a>"
    },
    nivriti: {
      name: "Nivriti – Safety & Navigation Companion",
      description: "Nivriti is a safety-first route planning and community navigation dashboard designed to help users travel with peace of mind. Built with Next.js, TypeScript, and Tailwind CSS, it features route safety heatmaps (compiled from community reviews), live geolocation tracking, emergency contact notifications, and safety incident reporting workflows.",
      tech: "Next.js, TypeScript, Tailwind CSS, and Geospatial Mapping APIs.",
      links: "🛡️ <a href='https://github.com/SonakshiJha25' target='_blank'>Nivriti GitHub Code</a>"
    },
    braintumor: {
      name: "Brain Tumor DL Classification & Detection",
      description: "A deep learning research project co-authored by Sonakshi and published on IEEE Xplore. The team applied ResNet50, VGG16, and Custom CNN architectures to classify brain tumor types from MRI scans, achieving a classification accuracy of 96%. She presented the findings at the ICMACC 2024 conference.",
      tech: "Python, TensorFlow, Keras, OpenCV, ResNet50, and VGG16.",
      links: "🧠 <a href='https://ieeexplore.ieee.org/document/10894311' target='_blank'>IEEE Xplore Research Paper</a> | <a href='https://github.com/SonakshiJha25/Brain-Tumor-Detection-using-CNN-and-its-Models-' target='_blank'>GitHub Code</a>"
    },
    iot: {
      name: "IoT Women Safety System",
      description: "An integrated hardware-software safety device incorporating real-time GPS tracking and emergency alert notifications. The device connects to a mobile app to send instant distress coordinates to emergency contacts.",
      tech: "IoT Microcontrollers, GPS modules, mobile notification APIs.",
      links: "📡 <a href='https://github.com/SonakshiJha25/IOT-WOMEN-SAFTEY-SYSTEM' target='_blank'>IoT Project GitHub</a>"
    },
    dino: {
      name: "Dino Game Playing AI",
      description: "An automated computer vision bot that plays the Chrome offline Dino game. It runs OpenCV to capture and analyze visual frames in real-time, detecting obstacles, and triggers PyAutoGUI keystrokes to jump or duck automatically.",
      tech: "Python, OpenCV, and PyAutoGUI.",
      links: "🦖 <a href='https://github.com/SonakshiJha25/Dino-Game-Playing-AI' target='_blank'>Dino AI GitHub</a>"
    },
    url: {
      name: "URL Shortener Application",
      description: "A URL shortening REST service built with Node.js, Express, and MongoDB. It generates shortened URL hashes and logs redirect analytics.",
      tech: "Node.js, Express.js, MongoDB, and REST APIs.",
      links: "🔗 <a href='https://github.com/SonakshiJha25/url-shortener' target='_blank'>URL Shortener GitHub</a>"
    }
  },
  experience: {
    intrain: {
      company: "InTrain Tech",
      timeline: "Jul 2024 - Oct 2024 | Remote",
      summary: "During her internship at InTrain Tech, Sonakshi transitioned across multiple critical roles:<br><br>" +
               "1. 🤖 <strong>AI Developer</strong> (Sep - Oct 2024): Built AI chatbot models and data processing pipelines using Python, NumPy, Pandas, TensorFlow, and OpenCV.<br>" +
               "2. 📋 <strong>Project Manager</strong> (Aug - Sep 2024): Managed the end-to-end product lifecycle for InterviewBot (interview.intraintech.com), organizing sprint planning, Agile roadmaps, and leading a 10-12 member cross-functional team.<br>" +
               "3. 🎨 <strong>Frontend Developer Intern</strong> (Jul - Aug 2024): Developed and optimized responsive UI elements using WordPress, HTML5, CSS3, and JavaScript."
    }
  },
  clubs: {
    diy: "🔧 <strong>DIY Club (Event Management Lead)</strong>: Managed 40-50 operations members to organize hands-on technical workshops. She directed event logistics and budgeting for interactive campus activities attracting 200+ attendees (Jul 2023 - Apr 2024).",
    rotaract: "🤝 <strong>Rotaract Club (Joint Secretary)</strong>: Served as a core board member for one of VIT-AP's largest social service clubs, leading planning sessions and board meetings to coordinate community outreach programs (Jun 2024 - Apr 2025).",
    bnb: "📈 <strong>Bull's & Bear's Club (Core Member)</strong>: Conducted stock market awareness bootcamps and workshops to promote financial literacy among engineering students (Jun 2024 - Jan 2025).",
    toastmasters: "🎤 <strong>Toastmasters (Marketing Co-Lead)</strong>: Restructured and revitalized a dormant campus chapter, running promotional campaigns and audience-engagement games to restore active membership (Sep 2023 - Feb 2024).",
    mba: "📝 <strong>MBA Association (Documentation Lead)</strong>: Led reporting processes, drafting event proposals and archives for club operations (May 2024 - Sep 2024).",
    mlc: "🧠 <strong>Machine Learning Club (Technical Member)</strong>: Participated in collaborative study groups focusing on neural network architectures and bootcamps (Oct 2023 - Apr 2024).",
    gfg: "💻 <strong>GeeksforGeeks Chapter (Technical Member)</strong>: Contributed to coordinating competitive programming challenges and web development hackathons (Aug 2022 - Apr 2023)."
  },
  contact: {
    summary: "You can reach Sonakshi through the following channels:<br><br>" +
             "• 📧 <strong>Email</strong>: <a href='mailto:sonakshijha254@gmail.com'>sonakshijha254@gmail.com</a><br>" +
             "• 💬 <strong>WhatsApp</strong>: <a href='https://wa.me/917702534238' target='_blank'>+91 77025 34238</a><br>" +
             "• 💼 <strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/sonakshi-jha/' target='_blank'>linkedin.com/in/sonakshi-jha</a><br>" +
             "• 🐙 <strong>GitHub</strong>: <a href='https://github.com/SonakshiJha25' target='_blank'>github.com/SonakshiJha25</a><br>" +
             "• 📝 <strong>LeetCode</strong>: <a href='https://leetcode.com/u/sonakshi_j25/' target='_blank'>leetcode.com/u/sonakshi_j25/</a><br>" +
             "• 🏆 <strong>HackerRank</strong>: <a href='https://www.hackerrank.com/profile/jhasonakshi25' target='_blank'>hackerrank.com/profile/jhasonakshi25</a>",
    resume: "📄 <a href='https://drive.google.com/file/d/14VFQmBfpRYI8pIfgbIi5TzO-ETfuixf1/view?usp=sharing' target='_blank'>View Resume (Google Drive)</a><br>" +
            "⬇️ <a href='https://drive.google.com/uc?export=download&id=1sYVP9GUtbizcLHWLgqkxv1wJ4i5nZg_C' target='_blank'>Download Resume (PDF)</a>",
    whatsapp: "https://wa.me/917702534238",
    email: "sonakshijha254@gmail.com"
  }
};

// Global context tracker to handle follow-up questions (e.g. "what is the link?" after talking about Pixora)
let lastTopic = null;

// Clean punctuation and tokenize query for scoring
function tokenize(text) {
  return text.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "")
    .split(/\s+/);
}

// Check if any array element is in the query words
function hasAny(words, keywords) {
  return keywords.some(kw => words.includes(kw));
}

// Core NLP engine matching queries to detailed human-like replies
function getChatbotResponse(userQuery) {
  const words = tokenize(userQuery.trim());
  const query = userQuery.toLowerCase().trim();

  if (!query) {
    return "Please go ahead and ask me anything about Sonakshi!";
  }

  // 1. CONTEXT RESOLUTION (Follow-ups)
  if (lastTopic) {
    // If user asks for links/code/demo
    if (hasAny(words, ["link", "links", "url", "demo", "website", "online", "github", "code", "repo", "repository", "address", "git"])) {
      if (lastTopic === "pixora") {
        return `Sure! Here are the links for <strong>Pixora</strong>:<br>${portfolioData.projects.pixora.links}`;
      }
      if (lastTopic === "nivriti") {
        return `Here is the link to the <strong>Nivriti</strong> repository:<br>${portfolioData.projects.nivriti.links}`;
      }
      if (lastTopic === "braintumor") {
        return `Here are the research and code links for the <strong>Brain Tumor Detection</strong> project:<br>${portfolioData.projects.braintumor.links}`;
      }
      if (lastTopic === "dino") {
        return `You can check out the source code for the <strong>Dino Game AI</strong> here:<br>${portfolioData.projects.dino.links}`;
      }
      if (lastTopic === "iot") {
        return `Here is the repository for the <strong>IoT Women Security System</strong>:<br>${portfolioData.projects.iot.links}`;
      }
      if (lastTopic === "url") {
        return `Here is the source code for the <strong>URL Shortener</strong>:<br>${portfolioData.projects.url.links}`;
      }
      if (lastTopic === "experience" || lastTopic === "intrain") {
        return `Sonakshi worked on InterviewBot during her internship. The platform is hosted at <a href="https://interview.intraintech.com" target="_blank">interview.intraintech.com</a>.`;
      }
      if (lastTopic === "contact") {
        return `You can check out Sonakshi's profiles here:<br><br>` +
               `🐙 GitHub: <a href="${portfolioData.contact.github}" target="_blank">SonakshiJha25</a><br>` +
               `💼 LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank">sonakshi-jha</a>`;
      }
    }

    // If user asks for stack/tools/how it was built
    if (hasAny(words, ["tech", "stack", "tools", "languages", "build", "built", "libraries", "framework", "frameworks", "technologies", "use", "used"])) {
      if (lastTopic === "pixora") {
        return `<strong>Pixora</strong> was built using the MERN stack. Specifically:<br>• Frontend: React.js<br>• Backend: Node.js and Express.js<br>• Database: MongoDB<br>• Storage: Cloudinary (for generated image uploads).<br><br>${portfolioData.projects.pixora.links}`;
      }
      if (lastTopic === "nivriti") {
        return `<strong>Nivriti</strong> is developed using:<br>• Framework: Next.js (React)<br>• Language: TypeScript<br>• Styling: Tailwind CSS<br>• Services: Geolocation and Mapping APIs for route visualizers.`;
      }
      if (lastTopic === "braintumor") {
        return `The <strong>Brain Tumor Classification</strong> model is written in Python, utilizing:<br>• Deep Learning: TensorFlow and Keras<br>• Architectures: ResNet50, VGG16, and Custom CNNs<br>• Image Processing: OpenCV.`;
      }
      if (lastTopic === "dino") {
        return `The <strong>Dino Game AI</strong> utilizes Python with:<br>• OpenCV (for screen grabbing and detecting obstacles like cacti/birds)<br>• PyAutoGUI (for simulating jump and duck keys).`;
      }
      if (lastTopic === "url") {
        return `The <strong>URL Shortener</strong> stack consists of:<br>• Runtime: Node.js<br>• Server: Express.js<br>• Database: MongoDB<br>• API Design: RESTful.`;
      }
      if (lastTopic === "experience" || lastTopic === "intrain") {
        return `During her internship, she used different technologies depending on the role:<br>` +
               `• AI Developer: Python, NumPy, Pandas, TensorFlow, OpenCV<br>` +
               `• Frontend Developer: WordPress, HTML5, CSS3, JavaScript`;
      }
    }
  }

  // 2. GREETINGS & SMALL TALK
  if (hasAny(words, ["hello", "hi", "hey", "hola", "yo", "sup", "greetings", "morning", "afternoon", "evening"])) {
    return "Hi there! 👋 I'm Sonakshi's personal AI Assistant. " +
           "I'd love to help you explore her skills, experience, projects (like Pixora or Nivriti), education, and extracurricular achievements. " +
           "What can I answer for you today?";
  }

  if (hasAny(words, ["how", "are", "you"]) && hasAny(words, ["doing", "feeling", "you"])) {
    return "I'm doing fantastic, thank you for asking! 🤖 Just floating around and ready to answer any questions you have about Sonakshi's achievements and engineering projects.";
  }

  if (hasAny(words, ["thank", "thanks", "thankyou", "awesome", "perfect", "great", "cool"])) {
    return "You're very welcome! 😊 Sonakshi is always excited to collaborate. Let me know if you want to see her resume, contact details, or learn about her other projects.";
  }

  // 3. ABOUT SONAKSHI
  if (hasAny(words, ["sonakshi", "yourself", "she", "her", "who", "introduce", "background", "bio", "profile", "summary"]) && 
      hasAny(words, ["who", "about", "is", "tell", "introduce", "yourself"])) {
    lastTopic = "about";
    return `Sonakshi Jha is a final-year B.Tech Computer Science Engineering student at VIT-AP (graduating August 2026). <br><br>` +
           `She is a Software Engineer specializing in the MERN stack and AI/ML platform integration. She has worked as an AI Developer, Project Manager, and Frontend Developer Intern at InTrain Tech, co-authored an IEEE-published deep learning research paper, and holds a CGPA of 8.56. <br><br>` +
           `She loves building responsive, scalable software and is ready for full-stack and software engineering opportunities!`;
  }

  if (hasAny(words, ["goal", "goals", "future", "ambition", "career", "objectives", "objective"])) {
    lastTopic = "about";
    return `Sonakshi's career goals are focused and clear:<br><br>` +
           `• <strong>Immediate</strong>: Secure a Software Engineering or Full-Stack Developer role where she can build production-level web platforms.<br>` +
           `• <strong>Long-term</strong>: Lead technical product teams, architect scalable AI-integrated SaaS, and bridge the gap between frontend aesthetics and robust system design.`;
  }

  // 4. EXPERIENCE & INTERNSHIP
  if (hasAny(words, ["experience", "internship", "intern", "job", "work", "intrain", "intraintech"])) {
    lastTopic = "experience";
    return `Sonakshi completed a highly cross-functional 4-month remote internship at <strong>InTrain Tech</strong> (Jul 2024 - Oct 2024). She excelled in three distinct roles:<br><br>` +
           `• 🤖 <strong>AI Developer</strong> (Sep - Oct 2024): Developed chatbot features and data pipelines using Python, NumPy, Pandas, TensorFlow, and OpenCV.<br>` +
           `• 📋 <strong>Project Manager</strong> (Aug - Sep 2024): Transitioned to lead the product lifecycle for InterviewBot, managing sprints, roadmaps, and coordinating a 10-12 member cross-functional team.<br>` +
           `• 🎨 <strong>Frontend Developer Intern</strong> (Jul - Aug 2024): Created responsive layouts using WordPress, HTML, CSS, and JS.<br><br>` +
           `You can view her internship certificate and Letter of Recommendation in the Certificates section of the page.`;
  }

  // 5. PROJECTS
  // Pixora
  if (words.includes("pixora") || words.includes("pixorify")) {
    lastTopic = "pixora";
    return `<strong>Pixora</strong> is an AI Image Generation SaaS designed and built by Sonakshi.<br><br>` +
           `• <strong>Core Features</strong>: Secure user authentication via JWT, protected API routes, Cloudinary storage integration, and a credit-based image generation system (100 daily credits reset).<br>` +
           `• <strong>Tech Stack</strong>: MongoDB, Express.js, React.js, and Node.js.<br><br>` +
           `${portfolioData.projects.pixora.links}`;
  }

  // Nivriti
  if (words.includes("nivriti") || (words.includes("safety") && words.includes("navigation"))) {
    lastTopic = "nivriti";
    return `<strong>Nivriti</strong> is a safety-oriented route navigation companion.<br><br>` +
           `• <strong>Core Features</strong>: Route safety visualizers, danger heatmaps compiled from community reports, emergency coordinate sharing, and real-time distress alerts to emergency contacts.<br>` +
           `• <strong>Tech Stack</strong>: Next.js, TypeScript, Tailwind CSS, and Geospatial APIs.<br><br>` +
           `${portfolioData.projects.nivriti.links}`;
  }

  // Brain Tumor / Research Paper / IEEE
  if (hasAny(words, ["tumor", "brain", "ieee", "paper", "research", "publication", "published", "resnet", "vgg", "icmacc", "cnn"])) {
    lastTopic = "braintumor";
    return `Sonakshi is co-author of a peer-reviewed deep learning research paper published on <strong>IEEE Xplore</strong>:<br><br>` +
           `• <strong>Focus</strong>: Automated Brain Tumor Detection using Convolutional Neural Networks.<br>` +
           `• <strong>Results</strong>: Achieved 96% tumor classification accuracy using ResNet50, VGG16, and Custom CNNs.<br>` +
           `• <strong>Presentation</strong>: She presented this research at the ICMACC 2024 conference.<br><br>` +
           `${portfolioData.projects.braintumor.links}`;
  }

  // IoT / Women Safety
  if (hasAny(words, ["iot", "hardware", "women", "gps", "tracking"])) {
    lastTopic = "iot";
    return `The <strong>IoT Women Security System</strong> is a hardware-software project built to enhance personal safety:<br><br>` +
           `• <strong>Features</strong>: A wearable device with a hardware distress trigger that links with a mobile app. When pressed, it sends real-time GPS coordinates to pre-selected emergency contacts.<br>` +
           `• <strong>Tech</strong>: IoT microcontrollers, GPS, and custom mobile APIs.<br><br>` +
           `${portfolioData.projects.iot.links}`;
  }

  // Dino Game AI
  if (hasAny(words, ["dino", "dinosaur", "game", "opencv", "pyautogui"])) {
    lastTopic = "dino";
    return `The <strong>Dino Game Playing AI</strong> is an automated bot designed to play the Chrome offline Dino game:<br><br>` +
           `• <strong>Features</strong>: Uses OpenCV for real-time visual frame grabbing and detection of cacti/bird obstacles. Triggers jump or duck commands with sub-millisecond keyboard events via PyAutoGUI.<br>` +
           `• <strong>Tech Stack</strong>: Python, OpenCV, and PyAutoGUI.<br><br>` +
           `${portfolioData.projects.dino.links}`;
  }

  // URL Shortener
  if (hasAny(words, ["shortener", "url", "hashing", "redirect"])) {
    lastTopic = "url";
    return `Sonakshi built a full-stack <strong>URL Shortener</strong> utility:<br><br>` +
           `• <strong>Features</strong>: Generates short URL hashes, performs fast redirects, and collects redirection count analytics.<br>` +
           `• <strong>Tech Stack</strong>: Node.js, Express.js, MongoDB, and REST APIs.<br><br>` +
           `${portfolioData.projects.url.links}`;
  }

  // General Projects Query
  if (hasAny(words, ["projects", "portfolio", "builds", "applications", "apps", "software", "development"])) {
    lastTopic = "projects";
    return `Sonakshi has designed several notable engineering projects:<br><br>` +
           `• 🎨 <strong>Pixora</strong>: AI Image Generation SaaS built with the MERN stack.<br>` +
           `• 🛡️ <strong>Nivriti</strong>: Route safety visualizer dashboard built with Next.js, TS, and Tailwind CSS.<br>` +
           `• 🧠 <strong>Brain Tumor Detection</strong>: IEEE-published Deep Learning research paper (96% accuracy).<br>` +
           `• 📡 <strong>IoT Women Security</strong>: A hardware tracking system with real-time alerts.<br>` +
           `• 🦖 <strong>Dino Game AI</strong>: OpenCV computer-vision game-playing bot.<br>` +
           `• 🔗 <strong>URL Shortener</strong>: RESTful utility built with Express & MongoDB.<br><br>` +
           `Ask me about any of these, or hover over the project cards on this portfolio page for live previews!`;
  }

  // 6. EDUCATION
  if (hasAny(words, ["education", "study", "college", "school", "vit", "vitap", "gpa", "cgpa", "btech", "degree", "academics", "grade", "grades"])) {
    lastTopic = "education";
    return `Here is Sonakshi's academic timeline:<br><br>` +
           `• 🎓 <strong>B.Tech in Computer Science Engineering</strong> (2022 - 2026)<br>` +
           `Vellore Institute of Technology, AP (VIT-AP) | CGPA: <strong>8.56 / 10</strong><br><br>` +
           `• 🏫 <strong>Intermediate (Class 11 & 12)</strong> (2019 - 2021)<br>` +
           `FIITJEE Junior College, Saifabad<br><br>` +
           `• 🏫 <strong>Secondary Education (Class 10)</strong> (2017 - 2019)<br>` +
           `Sri Chaitanya Techno School, Kompally`;
  }

  // 7. SKILLS
  if (hasAny(words, ["skills", "skill", "technologies", "tech", "languages", "frameworks", "tools", "databases", "programming", "frontend", "backend", "developer", "know"])) {
    lastTopic = "skills";
    
    // Specifc subcategory matching
    if (hasAny(words, ["language", "languages"])) {
      return `Sonakshi writes code in: ${portfolioData.skills.languages}`;
    }
    if (hasAny(words, ["frontend", "design"])) {
      return `Her frontend stack includes: ${portfolioData.skills.frontend}`;
    }
    if (hasAny(words, ["backend", "api", "apis"])) {
      return `For backend engineering, she uses: ${portfolioData.skills.backend}`;
    }
    if (hasAny(words, ["database", "databases", "mongodb", "mysql"])) {
      return `She works with databases like: ${portfolioData.skills.database}`;
    }
    
    return portfolioData.skills.all;
  }

  // 8. CLUBS & LEADERSHIP
  if (hasAny(words, ["clubs", "club", "leadership", "extracurricular", "roles", "responsibility", "responsibilities", "diy", "rotaract", "toastmasters", "bnb", "gfg", "mlc", "secretary", "manager"])) {
    lastTopic = "clubs";
    
    if (hasAny(words, ["diy", "workshop"])) {
      return portfolioData.clubs.diy;
    }
    if (hasAny(words, ["rotaract", "service", "secretary"])) {
      return portfolioData.clubs.rotaract;
    }
    if (hasAny(words, ["toastmasters", "speaking"])) {
      return portfolioData.clubs.toastmasters;
    }
    if (hasAny(words, ["bnb", "finance", "stock", "market"])) {
      return portfolioData.clubs.bnb;
    }
    if (hasAny(words, ["mlc", "ml"])) {
      return portfolioData.clubs.mlc;
    }
    if (hasAny(words, ["gfg", "geeksforgeeks"])) {
      return portfolioData.clubs.gfg;
    }
    if (hasAny(words, ["mba"])) {
      return portfolioData.clubs.mba;
    }

    return `Sonakshi has taken on significant leadership roles in student chapters at VIT-AP:<br><br>` +
           `• 🔧 <strong>DIY Club</strong> (Event Management Lead): Managed 40-50 team members; conducted tech events for 200+ attendees.<br>` +
           `• 🤝 <strong>Rotaract Club</strong> (Joint Secretary): Board member overseeing community outreach and operations.<br>` +
           `• 🎤 <strong>Toastmasters</strong> (Marketing Co-Lead): Rejuvenated chapter meeting workflows and promotional bootcamps.<br>` +
           `• 📈 <strong>Bull's & Bear's Club</strong> (Core Member): Spread stock market financial literacy.<br>` +
           `• 📝 <strong>MBA Association</strong>, 🧠 <strong>ML Club</strong>, and 💻 <strong>GeeksforGeeks</strong> chapter technical roles.<br><br>` +
           `Select a club or ask me for details on Rotaract, DIY, or Toastmasters!`;
  }

  // 9. CERTIFICATIONS
  if (hasAny(words, ["certificates", "certification", "certifications", "certified", "sap", "btp", "course", "completion"])) {
    lastTopic = "certificates";
    return `Sonakshi holds multiple professional and technical certifications:<br><br>` +
           `• 🏅 <strong>SAP Certified</strong> in SAP Business Technology Platform (BTP) (Oct 2024)<br>` +
           `• 📜 <strong>InTrain Tech</strong>: Internship Certificate & Letter of Recommendation (Oct 2024)<br>` +
           `• 🎓 <strong>SkillForge</strong>: Certificate of Course & Project completion (Sep 2024)<br>` +
           `• 📊 <strong>MathWorks</strong>: MATLAB Course completion (Dec 2023)<br>` +
           `• 🏆 <strong>GFG CodeCrunch</strong> & <strong>Geekathon</strong>: Hackathon awards and competition participation.<br><br>` +
           `You can view the full certificate lightbox viewer in the Certificates gallery above.`;
  }

  // 10. CONTACT, EMAIL & RESUME
  if (hasAny(words, ["resume", "cv", "resume link", "download resume", "see resume"])) {
    lastTopic = "contact";
    return `Certainly! Here is Sonakshi's resume link:<br><br>${portfolioData.contact.resume}`;
  }

  if (hasAny(words, ["contact", "email", "phone", "whatsapp", "linkedin", "github", "connect", "reach", "hire", "details", "social", "socials", "call"])) {
    lastTopic = "contact";
    return `Here are the direct details to contact Sonakshi:<br><br>${portfolioData.contact.summary}`;
  }

  // 11. AVAILABILITY & HIRING
  if (hasAny(words, ["hiring", "hire", "available", "job", "offer", "opportunities", "role", "roles", "opportunity", "opening"])) {
    lastTopic = "contact";
    return `Yes! Sonakshi is <strong>actively looking for Software Engineering, Full-Stack Developer positions, and internships</strong>.<br><br>` +
           `She is ready to join a collaborative tech team and apply her experience in full-stack development and machine learning.<br><br>` +
           `Please reach out to her directly via Email: <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a> or WhatsApp: <a href="${portfolioData.contact.whatsapp}" target="_blank">+91 77025 34238</a>.`;
  }

  // 12. FALLBACK
  return `I'm not quite sure I understand that query, but I'm eager to help! 🤔<br><br>` +
         `Here are some things you can ask me about Sonakshi:<br>` +
         `• Her MERN stack AI project: <strong>Pixora</strong><br>` +
         `• Her safety navigation app: <strong>Nivriti</strong><br>` +
         `• Her 4-month internship at <strong>InTrain Tech</strong><br>` +
         `• Her B.Tech academic CGPA and coursework at <strong>VIT-AP</strong><br>` +
         `• Her leadership at campus **DIY and Rotaract clubs**<br>` +
         `• Her direct **contact links and resume**`;
}

// ===== DOM & Interactive Event Listeners =====
document.addEventListener("DOMContentLoaded", () => {
  const chatbotFab = document.getElementById("chatbotFab");
  const chatbotWindow = document.getElementById("chatbotWindow");
  const closeChatbot = document.getElementById("closeChatbot");
  const chatbotMessages = document.getElementById("chatbotMessages");
  const chatbotInput = document.getElementById("chatbotInput");
  const chatbotSend = document.getElementById("chatbotSend");
  const chatbotSuggestions = document.getElementById("chatbotSuggestions");
  const chatbotTooltip = document.getElementById("chatbotTooltip");
  const tooltipClose = document.getElementById("tooltipClose");

  // ===== Tooltip Logic =====
  // Show tooltip 2 seconds after page load (fresh each time, reset)
  setTimeout(() => {
    if (chatbotTooltip && !chatbotWindow.classList.contains("active")) {
      chatbotTooltip.classList.add("show");
    }
  }, 2000);

  // Close tooltip on cross button click
  if (tooltipClose) {
    tooltipClose.addEventListener("click", (e) => {
      e.stopPropagation(); // Avoid triggering FAB click
      if (chatbotTooltip) {
        chatbotTooltip.classList.remove("show");
      }
    });
  }

  // Hide tooltip helper function
  function hideTooltip() {
    if (chatbotTooltip) {
      chatbotTooltip.classList.remove("show");
    }
  }

  // ===== Chat Window Toggles =====
  chatbotFab.addEventListener("click", (e) => {
    e.stopPropagation();
    hideTooltip();
    chatbotWindow.classList.add("active");
    chatbotFab.classList.add("active");

    setTimeout(() => {
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      chatbotInput.focus();
    }, 200);
  });

  closeChatbot.addEventListener("click", (e) => {
    e.stopPropagation();
    chatbotWindow.classList.remove("active");
    chatbotFab.classList.remove("active");
  });

  // ===== Auto Minimize Behavior (Click Outside) =====
  document.addEventListener("click", (e) => {
    if (chatbotWindow.classList.contains("active")) {
      // If click was outside chatbotWindow and outside the chatbotFab button, minimize the chat
      if (!chatbotWindow.contains(e.target) && !chatbotFab.contains(e.target)) {
        chatbotWindow.classList.remove("active");
        chatbotFab.classList.remove("active");
      }
    }
  });

  // ===== Message Handling =====
  function appendMessage(text, isUser = false) {
    const msgWrapper = document.createElement("div");
    msgWrapper.className = `chatbot-msg-wrapper ${isUser ? 'user' : 'bot'}`;

    const bubble = document.createElement("div");
    bubble.className = "chatbot-bubble";
    bubble.innerHTML = text;

    const timestamp = document.createElement("div");
    timestamp.className = "chatbot-timestamp";
    const now = new Date();
    timestamp.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    msgWrapper.appendChild(bubble);
    msgWrapper.appendChild(timestamp);
    chatbotMessages.appendChild(msgWrapper);
    
    // Auto-scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function handleUserMessage(messageText) {
    if (!messageText.trim()) return;

    // Append user query bubble
    appendMessage(messageText, true);

    // Show blinking typing indicator
    const typingWrapper = document.createElement("div");
    typingWrapper.className = "chatbot-msg-wrapper bot typing-indicator-wrapper";
    typingWrapper.innerHTML = `
      <div class="chatbot-bubble typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    chatbotMessages.appendChild(typingWrapper);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Fetch reply from the NLP engine
    const botReply = getChatbotResponse(messageText);

    // Simulate smart thinking delay proportional to reply length (600ms to 1600ms max)
    const delay = Math.max(600, Math.min(600 + botReply.length * 1.2, 1600));
    setTimeout(() => {
      const loader = chatbotMessages.querySelector(".typing-indicator-wrapper");
      if (loader) loader.remove();
      
      appendMessage(botReply, false);
    }, delay);
  }

  // Send trigger
  chatbotSend.addEventListener("click", () => {
    const text = chatbotInput.value.trim();
    if (text) {
      handleUserMessage(text);
      chatbotInput.value = "";
    }
  });

  // Enter key trigger
  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = chatbotInput.value.trim();
      if (text) {
        handleUserMessage(text);
        chatbotInput.value = "";
      }
    }
  });

  // Suggestion chips handler
  if (chatbotSuggestions) {
    chatbotSuggestions.addEventListener("click", (e) => {
      const chip = e.target.closest(".suggestion-chip");
      if (chip) {
        handleUserMessage(chip.getAttribute("data-question"));
      }
    });
  }

  // ===== Initial Welcome Message =====
  // Always runs fresh on page load (resets conversation completely)
  appendMessage(
    `Hi, I'm Sonakshi's AI Assistant! 👋<br><br>` +
    `I can answer questions about her skills, experience, projects (such as <strong>Pixora</strong> or <strong>Nivriti</strong>), education at VIT-AP, and leadership roles.<br><br>` +
    `What would you like to know about Sonakshi today?`,
    false
  );

  // ===== Certificate Lightbox =====
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxClose = document.getElementById("lightboxClose");

  if (lightboxOverlay) {
    document.querySelectorAll(".premium-cert-card .lightbox-trigger, .cert-view-btn").forEach(btn => {
      const href = btn.getAttribute("href");
      // Only convert to lightbox for local image files
      if (href && (href.endsWith(".png") || href.endsWith(".jpg") || href.endsWith(".jpeg"))) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const card = btn.closest(".premium-cert-card");
          const title = card ? card.querySelector("h3").textContent : "Certificate";
          lightboxImg.src = href;
          lightboxTitle.textContent = title;
          lightboxOverlay.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      }
    });

    // Close lightbox actions
    lightboxClose.addEventListener("click", () => {
      lightboxOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) {
        lightboxOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    // ESC key close support
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightboxOverlay.classList.contains("active")) {
        lightboxOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
});
