// ===== Sonakshi's Portfolio AI Assistant – Conversational Logic =====

// Structured portfolio data to power the AI Assistant
const portfolioData = {
  about: {
    summary: "Sonakshi Jha is a B.Tech Computer Science Engineering student at VIT-AP (Vellore Institute of Technology, AP) graduating in August 2026. She is a Software Engineer specializing in the MERN stack, AI-driven platforms, and full-stack web applications. She co-authored an IEEE-published deep learning research paper on brain tumor detection (96% accuracy) and has interned at InTrain Tech as an AI Developer, Project Manager, and Frontend Developer.",
    goals: "Sonakshi aims to secure a Software Engineer or Full-Stack Developer position to build scalable, high-performance applications.",
    vitap: "Vellore Institute of Technology, AP (VIT-AP). She is a B.Tech Computer Science student (2022-2026) with a CGPA of 8.56."
  },
  skills: {
    all: "Here is Sonakshi's toolkit:<br><br>" +
         "• <strong>Languages</strong>: Java (OOPs), JavaScript, Python, TypeScript, MATLAB<br>" +
         "• <strong>Frontend</strong>: React.js, Next.js, HTML5, CSS3, Tailwind CSS, WordPress<br>" +
         "• <strong>Backend & Databases</strong>: Node.js, Express.js, MongoDB, MySQL / SQL<br>" +
         "• <strong>Tools & Platforms</strong>: Git, GitHub, Netlify, Render, Vercel, SAP BTP<br>" +
         "• <strong>Core CS & Management</strong>: Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, Project Management, Agile Roadmap, Sprint Planning",
    languages: "Java, JavaScript, Python, TypeScript, and MATLAB.",
    frontend: "React.js, Next.js, HTML5, CSS3, Tailwind CSS, and WordPress.",
    backend: "Node.js, Express.js, RESTful APIs, JWT authentication, and MVC architecture.",
    database: "MongoDB and MySQL.",
    tools: "Git, GitHub, Netlify, Render, Vercel, and SAP BTP.",
    core: "Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, Project Management, Agile Roadmap, and Sprint Planning."
  },
  projects: {
    pixora: {
      name: "Pixora – AI Image Generation SaaS",
      description: "Pixora is an AI-powered image generation SaaS built using the MERN stack (MongoDB, Express, React, Node.js). It features JWT authentication, protected API routes, Cloudinary storage, a daily credit reset system (100 credits per user) to manage image gen limits, and a clean, responsive layout. It is fully deployed on Netlify (frontend) and Render (backend).",
      tech: "MongoDB, Express.js, React.js, Node.js, JWT, and Cloudinary.",
      links: "<a href='https://pixorify.netlify.app/' target='_blank'>Pixora Live Demo</a> | <a href='https://github.com/SonakshiJha25' target='_blank'>GitHub Code</a>"
    },
    nivriti: {
      name: "Nivriti – Safety & Navigation Companion",
      description: "Nivriti is a safety-first route planning and community navigation dashboard designed to help users travel with peace of mind. Built with Next.js, TypeScript, and Tailwind CSS, it features route safety heatmaps (compiled from community reviews), live geolocation tracking, emergency contact notifications, and safety incident reporting workflows.",
      tech: "Next.js, TypeScript, Tailwind CSS, and Geospatial Mapping APIs.",
      links: "<a href='https://github.com/SonakshiJha25' target='_blank'>Nivriti GitHub Code</a>"
    },
    braintumor: {
      name: "Brain Tumor DL Classification & Detection",
      description: "A deep learning research project co-authored by Sonakshi and published on IEEE Xplore. The team applied ResNet50, VGG16, and Custom CNN architectures to classify brain tumor types from MRI scans, achieving a classification accuracy of 96%. She presented the findings at the ICMACC 2024 conference.",
      tech: "Python, TensorFlow, Keras, OpenCV, ResNet50, and VGG16.",
      links: "<a href='https://ieeexplore.ieee.org/document/10894311' target='_blank'>IEEE Xplore Research Paper</a> | <a href='https://github.com/SonakshiJha25/Brain-Tumor-Detection-using-CNN-and-its-Models-' target='_blank'>GitHub Code</a>"
    },
    iot: {
      name: "IoT Women Safety System",
      description: "An integrated hardware-software safety device incorporating real-time GPS tracking and emergency alert notifications. The device connects to a mobile app to send instant distress coordinates to emergency contacts.",
      tech: "IoT Microcontrollers, GPS modules, mobile notification APIs.",
      links: "<a href='https://github.com/SonakshiJha25/IOT-WOMEN-SAFTEY-SYSTEM' target='_blank'>IoT Project GitHub</a>"
    },
    dino: {
      name: "Dino Game Playing AI",
      description: "An automated computer vision bot that plays the Chrome offline Dino game. It runs OpenCV to capture and analyze visual frames in real-time, detecting obstacles, and triggers PyAutoGUI keystrokes to jump or duck automatically.",
      tech: "Python, OpenCV, and PyAutoGUI.",
      links: "<a href='https://github.com/SonakshiJha25/Dino-Game-Playing-AI' target='_blank'>Dino AI GitHub</a>"
    },
    url: {
      name: "URL Shortener Application",
      description: "A URL shortening REST service built with Node.js, Express, and MongoDB. It generates shortened URL hashes and logs redirect analytics.",
      tech: "Node.js, Express.js, MongoDB, and REST APIs.",
      links: "<a href='https://github.com/SonakshiJha25/url-shortener' target='_blank'>URL Shortener GitHub</a>"
    }
  },
  experience: {
    intrain: {
      company: "InTrain Tech",
      timeline: "Jul 2024 - Oct 2024 | Remote",
      summary: "During her internship at InTrain Tech, Sonakshi transitioned across multiple critical roles:<br><br>" +
               "1. <strong>AI Developer</strong> (Sep - Oct 2024): Built AI chatbot models and data processing pipelines using Python, NumPy, Pandas, TensorFlow, and OpenCV.<br>" +
               "2. <strong>Project Manager</strong> (Aug - Sep 2024): Managed the end-to-end product lifecycle for InterviewBot (interview.intraintech.com), organizing sprint planning, Agile roadmaps, and leading a 10-12 member cross-functional team.<br>" +
               "3. <strong>Frontend Developer Intern</strong> (Jul - Aug 2024): Developed and optimized responsive UI elements using WordPress, HTML5, CSS3, and JavaScript."
    }
  },
  clubs: {
    diy: "<strong>DIY Club (Event Management Lead)</strong>: Managed 40-50 operations members to organize hands-on technical workshops. She directed event logistics and budgeting for interactive campus activities attracting 200+ attendees (Jul 2023 - Apr 2024).",
    rotaract: "<strong>Rotaract Club (Joint Secretary)</strong>: Served as a core board member for one of VIT-AP's largest social service clubs, leading planning sessions and board meetings to coordinate community outreach programs (Jun 2024 - Apr 2025).",
    bnb: "<strong>Bull's & Bear's Club (Core Member)</strong>: Conducted stock market awareness bootcamps and workshops to promote financial literacy among engineering students (Jun 2024 - Jan 2025).",
    toastmasters: "<strong>Toastmasters (Marketing Co-Lead)</strong>: Restructured and revitalized a dormant campus chapter, running promotional campaigns and audience-engagement games to restore active membership (Sep 2023 - Feb 2024).",
    mba: "<strong>MBA Association (Documentation Lead)</strong>: Led reporting processes, drafting event proposals and archives for club operations (May 2024 - Sep 2024).",
    mlc: "<strong>Machine Learning Club (Technical Member)</strong>: Participated in collaborative study groups focusing on neural network architectures and bootcamps (Oct 2023 - Apr 2024).",
    gfg: "<strong>GeeksforGeeks Chapter (Technical Member)</strong>: Contributed to coordinating competitive programming challenges and web development hackathons (Aug 2022 - Apr 2023)."
  },
  contact: {
    summary: "You can reach Sonakshi through the following channels:<br><br>" +
             "• <strong>Email</strong>: <a href='mailto:sonakshijha254@gmail.com'>sonakshijha254@gmail.com</a><br>" +
             "• <strong>WhatsApp</strong>: <a href='https://wa.me/917702534238' target='_blank'>+91 77025 34238</a><br>" +
             "• <strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/sonakshi-jha/' target='_blank'>linkedin.com/in/sonakshi-jha</a><br>" +
             "• GitHub: <a href='https://github.com/SonakshiJha25' target='_blank'>github.com/SonakshiJha25</a><br>" +
             "• LeetCode: <a href='https://leetcode.com/u/sonakshi_j25/' target='_blank'>leetcode.com/u/sonakshi_j25/</a><br>" +
             "• HackerRank: <a href='https://www.hackerrank.com/profile/jhasonakshi25' target='_blank'>hackerrank.com/profile/jhasonakshi25</a>",
    resume: "<a href='https://drive.google.com/file/d/1CDieJNMHFREvPj9i9ODQcIDCYv7x53I0/view?usp=sharing' target='_blank'>View Resume (Google Drive)</a><br>" +
            "<a href='https://drive.google.com/uc?export=download&id=1CDieJNMHFREvPj9i9ODQcIDCYv7x53I0' target='_blank'>Download Resume (PDF)</a>",
    whatsapp: "https://wa.me/917702534238",
    email: "sonakshijha254@gmail.com"
  }
};

// Keywords related to Sonakshi's portfolio to filter unrelated/off-topic queries
const relatedKeywords = [
  "sonakshi", "jha", "portfolio", "projects", "skills", "experience", "education",
  "contact", "resume", "cv", "email", "phone", "whatsapp", "linkedin", "github",
  "leetcode", "hackerrank", "vit", "vitap", "btech", "gpa", "cgpa", "grades",
  "mern", "react", "next.js", "nextjs", "node.js", "nodejs", "express", "mongodb",
  "mysql", "sql", "java", "javascript", "python", "typescript", "matlab",
  "html5", "html", "css3", "css", "tailwind", "wordpress", "git", "netlify", "render",
  "vercel", "sap", "btp", "dsa", "dbms", "os", "operating systems", "computer networks",
  "project management", "agile", "scrum", "roadmap", "sprint planning",
  "pixora", "pixorify", "nivriti", "safety", "navigation", "brain tumor",
  "mri", "ieee", "resnet50", "resnet", "vgg16", "vgg", "cnn", "icmacc",
  "iot", "dino", "opencv", "pyautogui", "url shortener", "intrain", "intrain tech",
  "interviewbot", "diy", "rotaract", "toastmasters", "bulls", "bears", "gfg",
  "geeksforgeeks", "mlc", "machine learning", "mba", "certificate", "certificates",
  "certification", "awards", "award", "contest", "competitions", "hiring", "hire",
  "available", "job", "career", "goal", "goals", "future", "ambition", "roles",
  "about", "who is", "tell me", "introduce", "study", "college", "school",
  "technologies", "technology", "use", "uses", "used", "know", "knows", "known",
  "stack", "stacks", "tool", "tools", "framework", "frameworks", "language",
  "languages", "program", "programs", "programming", "develop", "development",
  "developer"
];

// Global context tracker to handle follow-up questions
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
  const query = userQuery.toLowerCase().trim();
  const words = tokenize(query);

  if (!query) {
    return "Please ask me anything about Sonakshi's portfolio!";
  }

  // 1. GREETINGS & SMALL TALK
  const greetings = ["hello", "hi", "hey", "hola", "yo", "sup", "greetings", "morning", "afternoon", "evening"];
  if (hasAny(words, greetings)) {
    return "Hi, I am Sonakshi's portfolio assistant. I can answer questions about her education, projects, skills, and experience. How can I help you?";
  }

  if (hasAny(words, ["how"]) && (hasAny(words, ["are"]) || hasAny(words, ["you"])) && (hasAny(words, ["doing", "feeling", "you"]))) {
    return "I am doing well, thank you. I am here to help you explore Sonakshi's portfolio. What would you like to know?";
  }

  if (hasAny(words, ["thank", "thanks", "thankyou", "awesome", "perfect", "great", "cool"])) {
    return "You're welcome! Please let me know if you have any other questions about Sonakshi's work.";
  }

  // 2. PRIVATE / PERSONAL INFORMATION CHECK
  const privateKeywords = ["instagram", "insta", "snapchat", "facebook", "twitter", "family", "parents", "father", "mother", "siblings", "brother", "sister", "age", "birthday", "birth", "address", "home", "hometown", "personal", "private", "hobby", "hobbies"];
  if (hasAny(words, privateKeywords)) {
    return "I don't have access to that information. You can reach Sonakshi directly:<br><br>" +
           "• <strong>Email</strong>: <a href='mailto:sonakshijha254@gmail.com'>sonakshijha254@gmail.com</a><br>" +
           "• <strong>WhatsApp</strong>: <a href='https://wa.me/917702534238' target='_blank'>+91 77025 34238</a><br>" +
           "• <strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/sonakshi-jha/' target='_blank'>linkedin.com/in/sonakshi-jha</a>";
  }

  // 3. UNRELATED QUESTION CHECK
  const hasRelatedKeyword = relatedKeywords.some(keyword => {
    if (keyword.includes(" ")) {
      return query.includes(keyword);
    }
    return words.includes(keyword);
  });

  if (!hasRelatedKeyword) {
    return "I can only answer questions about Sonakshi's portfolio. For anything else, please contact her directly:<br><br>" +
           "• <strong>Email</strong>: <a href='mailto:sonakshijha254@gmail.com'>sonakshijha254@gmail.com</a><br>" +
           "• <strong>WhatsApp</strong>: <a href='https://wa.me/917702534238' target='_blank'>+91 77025 34238</a><br>" +
           "• <strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/sonakshi-jha/' target='_blank'>linkedin.com/in/sonakshi-jha</a>";
  }

  // 4. CONTEXT RESOLUTION (Follow-ups)
  if (lastTopic) {
    if (hasAny(words, ["link", "links", "url", "demo", "website", "online", "github", "code", "repo", "repository", "address", "git"])) {
      if (lastTopic === "pixora") return `Here are the links for <strong>Pixora</strong>:<br>${portfolioData.projects.pixora.links}`;
      if (lastTopic === "nivriti") return `Here is the link to the <strong>Nivriti</strong> repository:<br>${portfolioData.projects.nivriti.links}`;
      if (lastTopic === "braintumor") return `Here are the research and code links for the <strong>Brain Tumor Detection</strong> project:<br>${portfolioData.projects.braintumor.links}`;
      if (lastTopic === "dino") return `You can check out the source code for the <strong>Dino Game AI</strong> here:<br>${portfolioData.projects.dino.links}`;
      if (lastTopic === "iot") return `Here is the repository for the <strong>IoT Women Security System</strong>:<br>${portfolioData.projects.iot.links}`;
      if (lastTopic === "url") return `Here is the source code for the <strong>URL Shortener</strong>:<br>${portfolioData.projects.url.links}`;
      if (lastTopic === "experience" || lastTopic === "intrain") return `Sonakshi worked on InterviewBot during her internship. The platform is hosted at <a href="https://interview.intraintech.com" target="_blank">interview.intraintech.com</a>.`;
      if (lastTopic === "contact") {
        return `You can check out Sonakshi's profiles here:<br><br>` +
               `GitHub: <a href="${portfolioData.contact.github}" target="_blank">SonakshiJha25</a><br>` +
               `LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank">sonakshi-jha</a>`;
      }
    }

    if (hasAny(words, ["tech", "stack", "tools", "languages", "build", "built", "libraries", "framework", "frameworks", "technologies", "use", "used"])) {
      if (lastTopic === "pixora") return `<strong>Pixora</strong> was built using the MERN stack: React.js, Node.js, Express.js, MongoDB, and Cloudinary.`;
      if (lastTopic === "nivriti") return `<strong>Nivriti</strong> is developed using Next.js (React), TypeScript, Tailwind CSS, and Geospatial Mapping APIs.`;
      if (lastTopic === "braintumor") return `The model utilizes Python, TensorFlow, Keras, OpenCV, ResNet50, and VGG16.`;
      if (lastTopic === "dino") return `The bot utilizes Python, OpenCV for screen analysis, and PyAutoGUI for action execution.`;
      if (lastTopic === "url") return `The URL Shortener stack is Node.js, Express.js, MongoDB, and REST APIs.`;
      if (lastTopic === "experience" || lastTopic === "intrain") {
        return `She used Python, NumPy, Pandas, TensorFlow, OpenCV (AI role) and WordPress, HTML5, CSS3, JavaScript (Frontend role).`;
      }
    }
  }

  // 5. PORTFOLIO TOPIC MATCHES (CONFIDENT ANSWERS)
  // About Sonakshi
  if (hasAny(words, ["sonakshi", "yourself", "background", "bio", "profile", "summary", "about"])) {
    lastTopic = "about";
    return `Sonakshi Jha is a B.Tech Computer Science Engineering student at VIT-AP (graduating August 2026). She is a Software Engineer specializing in the MERN stack, full-stack development, and AI integration. She co-authored an IEEE-published deep learning research paper and has interned as a developer and product manager.`;
  }

  if (hasAny(words, ["goal", "goals", "future", "ambition", "career", "objectives", "objective"])) {
    lastTopic = "about";
    return `Sonakshi's immediate goal is to secure a Software Engineering or Full-Stack Developer position where she can build scalable applications.`;
  }

  // Experience
  if (hasAny(words, ["experience", "internship", "intern", "job", "work", "intrain", "intraintech"])) {
    lastTopic = "experience";
    return `Sonakshi interned at <strong>InTrain Tech</strong> (Jul 2024 - Oct 2024) in three roles:<br><br>` +
           `• <strong>AI Developer</strong>: Developed AI chatbot systems using Python, NumPy, Pandas, TensorFlow, OpenCV.<br>` +
           `• <strong>Project Manager</strong>: Managed the end-to-end product lifecycle for InterviewBot, sprint planning, and team coordination.<br>` +
           `• <strong>Frontend Developer</strong>: Built responsive UI elements using WordPress and HTML/CSS/JS.`;
  }

  // Specific projects
  if (words.includes("pixora") || words.includes("pixorify")) {
    lastTopic = "pixora";
    return `<strong>Pixora</strong> is an AI Image Generation MERN SaaS built by Sonakshi. It features JWT authentication, protected API routes, and credit-based reset limits.<br><br>${portfolioData.projects.pixora.links}`;
  }

  if (words.includes("nivriti") || (words.includes("safety") && words.includes("navigation"))) {
    lastTopic = "nivriti";
    return `<strong>Nivriti</strong> is a safety route planning and dashboard app built with Next.js, TypeScript, and Tailwind CSS.<br><br>${portfolioData.projects.nivriti.links}`;
  }

  if (hasAny(words, ["tumor", "brain", "ieee", "paper", "research", "publication", "published", "resnet", "vgg", "icmacc", "cnn"])) {
    lastTopic = "braintumor";
    return `Sonakshi co-authored a deep learning research paper published on <strong>IEEE Xplore</strong>. The project achieved a 96% accuracy in brain tumor classification using ResNet50 and CNNs.<br><br>${portfolioData.projects.braintumor.links}`;
  }

  if (hasAny(words, ["iot", "hardware", "women", "gps"])) {
    lastTopic = "iot";
    return `The <strong>IoT Women Security System</strong> is a hardware tracking system that triggers real-time GPS coordinate updates to emergency contacts.<br><br>${portfolioData.projects.iot.links}`;
  }

  if (hasAny(words, ["dino", "dinosaur", "game"])) {
    lastTopic = "dino";
    return `The <strong>Dino Game Playing AI</strong> bot automatically plays Chrome's offline Dino game using OpenCV and PyAutoGUI.<br><br>${portfolioData.projects.dino.links}`;
  }

  if (hasAny(words, ["shortener", "url"])) {
    lastTopic = "url";
    return `The <strong>URL Shortener</strong> is a MERN-based RESTful service for creating shortened links and redirect analytics.<br><br>${portfolioData.projects.url.links}`;
  }

  // General Projects Query
  if (hasAny(words, ["projects", "portfolio", "builds", "apps", "software", "development"])) {
    lastTopic = "projects";
    return `Sonakshi's projects include:<br>` +
           `• <strong>Pixora</strong>: AI MERN SaaS<br>` +
           `• <strong>Nivriti</strong>: Route safety visualizer<br>` +
           `• <strong>Brain Tumor DL</strong>: IEEE-published paper (96% accuracy)<br>` +
           `• <strong>IoT Women Safety</strong><br>` +
           `• <strong>Dino Game AI</strong><br>` +
           `• <strong>URL Shortener</strong>`;
  }

  // Education
  if (hasAny(words, ["education", "study", "college", "school", "vit", "vitap", "gpa", "cgpa", "btech", "degree", "academics", "grade", "grades", "12th", "intermediate", "high school"])) {
    lastTopic = "education";
    return `Sonakshi is pursuing a B.Tech in CSE at VIT-AP (2022-2026) with an <strong>8.56 CGPA</strong>. She studied Intermediate at FIITJEE Saifabad and Secondary Education at Sri Chaitanya Techno School.`;
  }

  // Skills
  if (hasAny(words, ["skills", "skill", "technologies", "technology", "tech", "stack", "languages", "language", "frameworks", "framework", "tools", "tool", "databases", "database", "programming"])) {
    lastTopic = "skills";
    if (hasAny(words, ["language", "languages"])) return `Sonakshi codes in: ${portfolioData.skills.languages}`;
    if (hasAny(words, ["frontend", "design"])) return `Her frontend stack: ${portfolioData.skills.frontend}`;
    if (hasAny(words, ["backend", "api", "apis"])) return `For backend, she uses: ${portfolioData.skills.backend}`;
    if (hasAny(words, ["database", "databases"])) return `Databases: ${portfolioData.skills.database}`;
    return portfolioData.skills.all;
  }

  // Clubs / Leadership
  if (hasAny(words, ["clubs", "club", "leadership", "extracurricular", "roles", "responsibility", "diy", "rotaract", "toastmasters", "bnb", "gfg", "mlc", "mba"])) {
    lastTopic = "clubs";
    if (hasAny(words, ["diy"])) return portfolioData.clubs.diy;
    if (hasAny(words, ["rotaract"])) return portfolioData.clubs.rotaract;
    if (hasAny(words, ["toastmasters"])) return portfolioData.clubs.toastmasters;
    if (hasAny(words, ["bnb"])) return portfolioData.clubs.bnb;
    if (hasAny(words, ["gfg"])) return portfolioData.clubs.gfg;
    if (hasAny(words, ["mlc"])) return portfolioData.clubs.mlc;
    if (hasAny(words, ["mba"])) return portfolioData.clubs.mba;
    return `Sonakshi has held key roles:<br>• DIY Club Event Lead<br>• Rotaract Joint Secretary<br>• Toastmasters Marketing Co-Lead<br>• Core Member at BnB Club.`;
  }

  // Certifications / Awards
  if (hasAny(words, ["certificates", "certification", "certifications", "certified", "sap", "btp", "course", "completion", "contest", "award"])) {
    lastTopic = "certificates";
    return `Sonakshi's certifications:<br>` +
           `• SAP BTP Certified (Oct 2024)<br>` +
           `• InTrain Tech Internship & LOR (Oct 2024)<br>` +
           `• Algorithmic Coding Contest (NullClass Award) & GFG CodeCrunch<br>` +
           `• SkillForge Course & Project (Sep 2024)<br>` +
           `• MathWorks MATLAB Completion (Dec 2023)`;
  }

  // Resume
  if (hasAny(words, ["resume", "cv", "resume link", "download resume", "see resume"])) {
    lastTopic = "contact";
    return `You can view or download Sonakshi's resume here:<br><br>${portfolioData.contact.resume}`;
  }

  // Contact
  if (hasAny(words, ["contact", "email", "phone", "whatsapp", "linkedin", "github", "connect", "reach", "hire", "details"])) {
    lastTopic = "contact";
    return `You can contact Sonakshi via:<br><br>${portfolioData.contact.summary}`;
  }

  // Availability
  if (hasAny(words, ["hiring", "hire", "available", "job", "offer", "opportunities", "role", "roles"])) {
    lastTopic = "contact";
    return `Yes! Sonakshi is actively seeking Software Engineering or Full-Stack Developer positions. Reach out directly at <a href="mailto:sonakshijha254@gmail.com">sonakshijha254@gmail.com</a>.`;
  }

  // 6. CONFIDENCE / FALLBACK
  return "I couldn't find that information in Sonakshi's portfolio. You can contact her directly for more details:<br><br>" +
         "• <strong>Email</strong>: <a href='mailto:sonakshijha254@gmail.com'>sonakshijha254@gmail.com</a><br>" +
         "• <strong>WhatsApp</strong>: <a href='https://wa.me/917702534238' target='_blank'>+91 77025 34238</a><br>" +
         "• <strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/sonakshi-jha/' target='_blank'>linkedin.com/in/sonakshi-jha</a>";
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
    `Hi there! I am Sonakshi's Portfolio Assistant.<br><br>` +
    `I can help you explore her work, skills, and background. Feel free to ask me about:<br>` +
    `• <strong>Projects</strong> (like <em>Pixora</em> or <em>Nivriti</em>)<br>` +
    `• <strong>Education</strong> (B.Tech at VIT-AP & research)<br>` +
    `• <strong>Technical Skills</strong> (MERN Stack, Python, SAP BTP)<br>` +
    `• <strong>Experience</strong> (Internship at InTrain Tech)<br><br>` +
    `What would you like to know?`,
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
