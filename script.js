// Typing effect
const texts = ["MERN Stack Developer", "AI/ML Enthusiast", "Full Stack Developer", "Software Engineer"];
let index = 0, char = 0, isDeleting = false;
const typedElem = document.getElementById('typed-text');
function type() {
  const current = texts[index];
  typedElem.textContent = current.substring(0, char);
  if (!isDeleting) { char++; if (char > current.length) { isDeleting = true; setTimeout(type, 1000); return; } }
  else { char--; if (char === 0) { isDeleting = false; index = (index + 1) % texts.length; } }
  setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener('DOMContentLoaded', type);

// Scroll reveal & active nav highlight & progress bar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const scrollProgress = document.getElementById('scrollProgress');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => { 
  sec.style.opacity = '0'; 
  sec.style.transform = 'translateY(20px)'; 
  observer.observe(sec); 
});

window.addEventListener('scroll', () => {
  // 1. Scroll Progress Bar
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + '%';
  }

  // 2. Active Link Highlighting
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 180) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-nav');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active-nav');
    }
  });
});

// Menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');
toggleBtn.addEventListener('click', () => nav.classList.toggle('active'));

// ✅ Circular Theme transition wipe + Video toggle
const toggleSwitch = document.getElementById("toggleSwitch");
const video = document.getElementById("bgVideo");

// Set correct video source based on theme state
function updateThemeVideo() {
  const isLight = document.body.classList.contains("light");
  if (video) {
    const source = video.querySelector("source");
    if (source) {
      source.src = isLight ? "video/your-video-light.mp4" : "video/your-video.mp4";
      video.load();
    }
  }
}

// Set up transition overlay element dynamically
const transitionOverlay = document.createElement('div');
transitionOverlay.className = 'theme-transition-overlay';
document.body.appendChild(transitionOverlay);

// Sync toggle switch checkbox with body class on page load
if (toggleSwitch) {
  toggleSwitch.checked = !document.body.classList.contains("light");
}

// Run theme update once on page load
updateThemeVideo();

// Circular Screen Wipe Transition trigger
if (toggleSwitch) {
  toggleSwitch.addEventListener("change", (e) => {
    // 1. Get toggle trigger coordinates
    const rect = toggleSwitch.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Set CSS circular center variables on document
    document.documentElement.style.setProperty('--toggle-x', `${x}px`);
    document.documentElement.style.setProperty('--toggle-y', `${y}px`);

    // Invert mapping: checked = Dark Mode, unchecked = Light Mode
    const willBeLight = !toggleSwitch.checked;

    // 2. Set overlay color matching the incoming theme
    transitionOverlay.style.background = willBeLight ? '#ffffff' : '#0f141c';

    // 3. Start wipe animation
    transitionOverlay.classList.add('animating');

    // 4. Toggle body theme class halfway through (400ms)
    setTimeout(() => {
      document.body.classList.toggle("light", willBeLight);
      updateThemeVideo();
    }, 400);

    // 5. Reset transition overlay after completion (850ms)
    setTimeout(() => {
      transitionOverlay.classList.remove('animating');
    }, 850);
  });
}

// ✅ Cursor Glow spotlight coordinate mouse tracker
document.addEventListener('mousemove', e => {
  document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// ✅ Dynamic Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ✅ Dynamic Skill Filtering (Skill Matrix)
const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

skillFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    skillFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    skillCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ✅ Leadership Hub Tab Switching
const leadershipTabs = document.querySelectorAll('.leadership-tab-btn');
const leadershipContents = document.querySelectorAll('.leadership-content');

leadershipTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    leadershipTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const targetTab = tab.getAttribute('data-tab');

    leadershipContents.forEach(content => {
      content.classList.remove('active');
      if (content.getAttribute('id') === targetTab) {
        setTimeout(() => {
          content.classList.add('active');
          // Restart anim for bar-fill
          const bar = content.querySelector('.metric-bar-fill');
          if (bar) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = width;
            }, 50);
          }
        }, 50);
      }
    });
  });
});

// ✅ Contact Form Submission Handler
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Sending your message...";
    formStatus.className = "form-status";
    
    setTimeout(() => {
      formStatus.textContent = "Thank you! Your message has been sent successfully. 😊";
      formStatus.className = "form-status success";
      contactForm.reset();
    }, 1000);
  });
}


