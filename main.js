// scripts/main.js
// Simple script to populate dynamic sections: skills, projects, certifications, education, and handle UI interactions.

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Data ----------
  const skills = {
    "AI & Emerging Technologies": [
      "Artificial Intelligence", "Generative AI", "Large Language Models", "Prompt Engineering",
      "Context Engineering", "AI-Assisted Development", "LLM Tools"
    ],
    "Development": [
      "Python", "HTML5", "CSS3", "JavaScript", "Responsive Web Design",
      "FastAPI", "Flask", "REST API Design", "SQL", "PostgreSQL", "SQLite"
    ],
    "Tools & Productivity": [
      "AI Tools & Workflow Automation", "Automation", "Git", "GitHub", "API Integration", "Docker"
    ],
    "Engineering & Methodologies": [
      "Reverse Engineering", "Vibe Coding", "Rapid Prototyping", "Debugging & Troubleshooting", "Technical Research"
    ],
    "Soft Skills": [
      "Problem Solving", "Quick Learning", "Teamwork", "Leadership", "Communication", "Adaptability", "Creative Thinking"
    ]
  };

  const projects = [
    {
      id: "ai_resume_checker",
      title: "AI Resume Checker",
      domain: "Career Technology",
      description: "An AI‑powered web app that analyzes resumes and provides intelligent feedback.",
      problem: "Help job seekers improve their resumes using LLM‑generated suggestions.",
      technologies: ["Python", "FastAPI", "LLM", "HTML", "CSS", "JavaScript"],
      features: ["Resume upload", "Content extraction", "Skill identification", "AI‑generated feedback"],
      role: "Python backend & LLM integration",
      github: "https://github.com/tmanikandan2612-jpg/BUILDATHON-2026",
      liveDemo: null,
      image: "assets/projects/ai_resume_checker.jpg"
    },
    {
      id: "auto_founder_ai",
      title: "AUTO Founder AI",
      domain: "Startup Assistance",
      description: "An AI‑driven founder assistant that supports entrepreneurs with idea exploration and workflow automation.",
      problem: "Provide a low‑cost, always‑available brainstorming partner for early‑stage founders.",
      technologies: ["Python", "LLM", "FastAPI", "React"],
      features: ["Interactive AI chat", "Idea generation", "Content synthesis"],
      role: "Full‑stack Python + LLM implementation",
      github: "https://github.com/tmanikandan2612-jpg/FINSPARK26",
      liveDemo: null,
      image: "assets/projects/auto_founder_ai.jpg"
    },
    {
      id: "llm_web_app",
      title: "LLM‑Powered Web Application",
      domain: "Generative AI",
      description: "Web UI that integrates LLM responses for dynamic, context‑aware interaction.",
      problem: "Demonstrate real‑time LLM integration in a responsive web app.",
      technologies: ["Python", "FastAPI", "LLM API", "HTML", "CSS", "JS"],
      features: ["Prompt‑based responses", "Dynamic UI updates"],
      role: "Backend API & UI integration",
      github: "https://github.com/tmanikandan2612-jpg/bharat-indian-citizen",
      liveDemo: null,
      image: "assets/projects/ai_project.jpg"
    },
    {
      id: "agri_ai",
      title: "AgriOne",
      domain: "Agriculture",
      description: "Tool that provides crop recommendations, disease detection, and weather insights using AI.",
      problem: "Assist farmers with data‑driven decisions.",
      technologies: ["Python", "ML models", "API", "Web UI"],
      features: ["Crop recommendation", "Disease detection", "Weather prediction"],
      role: "Full‑stack development & AI integration",
      github: "https://github.com/tmanikandan2612-jpg/ATM-interface-",
      liveDemo: "https://darling-halva-5f830d.netlify.app/",
      image: "assets/projects/agri_ai.jpg"
    },
    {
      id: "healthcare_ai",
      title: "AI Healthcare Web Application",
      domain: "Healthcare",
      description: "Provides AI‑assisted information for health‑related queries (non‑diagnostic).",
      problem: "Showcase responsible AI use in health contexts.",
      technologies: ["Python", "LLM", "FastAPI", "HTML", "CSS"],
      features: ["User input processing", "AI‑generated info", "Responsive design"],
      role: "Backend & LLM integration",
      github: null,
      liveDemo: null,
      image: "assets/projects/healthcare_ai.jpg"
    },
    {
      id: "cyber_security",
      title: "Cyber Security & Threat Analysis System",
      domain: "Cybersecurity",
      description: "Web‑based platform demonstrating authentication concepts and threat‑analysis education.",
      problem: "Educate users on security best practices through interactive UI.",
      technologies: ["HTML", "CSS", "JavaScript", "Java (demo)"],
      features: ["Login UI", "Threat scenario walkthrough"],
      role: "Frontend implementation",
      github: null,
      liveDemo: null,
      image: "assets/projects/cyber_security.jpg"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      provider: "AWS Training & Certification",
      description: "Exam Prep Plan Overview: AWS Certified Cloud Practitioner (CLF-C02 - English).",
      link: "assets/certificates/aws_cloud.png",
      image: "assets/certificates/aws_cloud.png"
    },
    {
      name: "Enterprise Design Thinking Practitioner",
      provider: "IBM SkillsBuild",
      description: "Proficiency in enterprise design thinking and innovation.",
      link: "assets/certificates/ibm_practitioner.png",
      image: "assets/certificates/ibm_practitioner.png"
    },
    {
      name: "Microsoft SkillUp",
      provider: "Microsoft",
      description: "Microsoft technology skill development.",
      link: "assets/certificates/microsoft_skillup.jpg", // REPLACE THIS LINK
      image: "assets/certificates/microsoft_skillup.jpg" // REPLACE THIS IMAGE
    },
    {
      name: "Introduction to MS Excel",
      provider: "Simplilearn & SkillUp",
      description: "Demonstrated initiative and commitment to deepening Excel skills.",
      link: "assets/certificates/microsoft_excel.png",
      image: "assets/certificates/microsoft_excel.png"
    },
    {
      name: "AI for Beginners",
      provider: "HP LIFE",
      description: "Basic understanding of the impact of artificial intelligence on the technological landscape.",
      link: "assets/certificates/hp_life.png",
      image: "assets/certificates/hp_life.png"
    },
    {
      name: "Python Course for Beginners",
      provider: "Scaler Topics",
      description: "Mastering the Essentials: 121 Video Tutorials, 16 Modules, 10 Challenges.",
      link: "assets/certificates/python_programming.png",
      image: "assets/certificates/python_programming.png"
    }
  ];

  const education = [
    {
      degree: "B.Tech – Artificial Intelligence and Data Science",
      institution: "SNS College of Technology",
      duration: "2025 – 2029",
      details: "Current undergraduate student."
    }
  ];

  const contact = {
    name: "Manikandan D",
    email: "tmmanikandan2612@gmail.com",
    phone: "6382918362",
    linkedin: "https://www.linkedin.com/in/manikanda-n-dhavami",
    github: "https://github.com/tmanikandan2612-jpg"
  };

  // ---------- Helper Functions ----------
  const createSkillCategories = () => {
    const container = document.getElementById('skills-container');
    for (const [category, items] of Object.entries(skills)) {
      const div = document.createElement('div');
      div.className = 'skill-category reveal';
      div.style.transitionDelay = `${(Object.keys(skills).indexOf(category) % 3) * 0.1}s`;
      const h3 = document.createElement('h3');
      h3.textContent = category;
      div.appendChild(h3);
      items.forEach(item => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = item;
        div.appendChild(span);
      });
      container.appendChild(div);
    }
  };

  const createProjectFilters = () => {
    const categories = ['All'];
    projects.forEach(p => {
      if (!categories.includes(p.domain)) categories.push(p.domain);
    });
    const container = document.getElementById('project-filters');
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.category = cat;
      btn.textContent = cat;
      if (cat === 'All') btn.classList.add('active');
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProjects(cat);
      });
      container.appendChild(btn);
    });
  };

  const filterProjects = (category) => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const cardCat = card.dataset.domain;
      if (category === 'All' || cardCat === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  const createProjectCards = () => {
    const grid = document.getElementById('project-grid');
    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card reveal';
      card.dataset.domain = p.domain;
      card.style.transitionDelay = `${(projects.indexOf(p) % 3) * 0.1}s`;
      // Image
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = `${p.title} preview`;
      card.appendChild(img);
      // Body
      const body = document.createElement('div');
      body.className = 'card-body';
      const title = document.createElement('h3');
      title.textContent = p.title;
      body.appendChild(title);
      const domainBadge = document.createElement('span');
      domainBadge.className = 'badge';
      domainBadge.textContent = p.domain;
      body.appendChild(domainBadge);
      const desc = document.createElement('p');
      desc.textContent = p.description;
      body.appendChild(desc);
      // Tech tags
      const techDiv = document.createElement('div');
      techDiv.className = 'tech-stack';
      p.technologies.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'tech-badge';
        tag.textContent = t;
        techDiv.appendChild(tag);
      });
      body.appendChild(techDiv);
      // Actions
      const actions = document.createElement('div');
      actions.className = 'actions';
      const viewBtn = document.createElement('a');
      viewBtn.href = '#';
      viewBtn.textContent = 'View Project';
      viewBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(p); });
      actions.appendChild(viewBtn);
      const githubBtn = document.createElement('a');
      githubBtn.href = p.github ? p.github : '#';
      githubBtn.textContent = p.github ? 'GitHub' : 'Repo coming soon';
      githubBtn.style.pointerEvents = p.github ? 'auto' : 'none';
      actions.appendChild(githubBtn);
      const demoBtn = document.createElement('a');
      demoBtn.href = p.liveDemo ? p.liveDemo : '#';
      demoBtn.textContent = p.liveDemo ? 'Live Demo' : 'Demo coming soon';
      demoBtn.style.pointerEvents = p.liveDemo ? 'auto' : 'none';
      actions.appendChild(demoBtn);
      body.appendChild(actions);
      card.appendChild(body);
      grid.appendChild(card);
    });
  };

  const openModal = (project) => {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';
    const title = document.createElement('h3');
    title.textContent = project.title;
    modalBody.appendChild(title);
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `${project.title} image`;
    img.style.maxWidth = '100%';
    modalBody.appendChild(img);
    const domain = document.createElement('p');
    domain.innerHTML = `<strong>Domain:</strong> ${project.domain}`;
    modalBody.appendChild(domain);
    const desc = document.createElement('p');
    desc.innerHTML = `<strong>Description:</strong> ${project.description}`;
    modalBody.appendChild(desc);
    const problem = document.createElement('p');
    problem.innerHTML = `<strong>Problem:</strong> ${project.problem}`;
    modalBody.appendChild(problem);
    const tech = document.createElement('p');
    tech.innerHTML = `<strong>Technologies:</strong> ${project.technologies.join(', ')}`;
    modalBody.appendChild(tech);
    const features = document.createElement('ul');
    project.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      features.appendChild(li);
    });
    const featHeader = document.createElement('p');
    featHeader.innerHTML = '<strong>Key Features:</strong>';
    modalBody.appendChild(featHeader);
    modalBody.appendChild(features);
    const role = document.createElement('p');
    role.innerHTML = `<strong>My Role:</strong> ${project.role}`;
    modalBody.appendChild(role);
    const btnContainer = document.createElement('div');
    btnContainer.style.marginTop = '1rem';
    const githubLink = document.createElement('a');
    githubLink.href = project.github ? project.github : '#';
    githubLink.className = 'btn-primary';
    githubLink.textContent = project.github ? 'GitHub' : 'Repo coming soon';
    githubLink.style.pointerEvents = project.github ? 'auto' : 'none';
    btnContainer.appendChild(githubLink);
    const demoLink = document.createElement('a');
    demoLink.href = project.liveDemo ? project.liveDemo : '#';
    demoLink.className = 'btn-secondary';
    demoLink.textContent = project.liveDemo ? 'Live Demo' : 'Demo coming soon';
    demoLink.style.pointerEvents = project.liveDemo ? 'auto' : 'none';
    btnContainer.appendChild(demoLink);
    modalBody.appendChild(btnContainer);
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('open');
  };

  const closeModal = () => {
    const modal = document.getElementById('project-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('open');
  };

  // Modal close handler
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Navbar toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('show');
  });



  // Populate sections
  createSkillCategories();
  createProjectFilters();
  createProjectCards();

  // Education
  const eduContainer = document.getElementById('education-container');
  education.forEach(e => {
    const div = document.createElement('div');
    div.className = 'education-item reveal';
    div.innerHTML = `<h3>${e.degree}</h3><p><strong>Institution:</strong> ${e.institution}</p><p><strong>Duration:</strong> ${e.duration}</p><p>${e.details}</p>`;
    eduContainer.appendChild(div);
  });

  // Certifications
  const certGrid = document.getElementById('certifications-grid');
  certifications.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.style.transitionDelay = `${(certifications.indexOf(c) % 3) * 0.1}s`;
    card.style.background = 'rgba(255,255,255,0.07)';
    card.style.padding = 'var(--spacing-unit)';
    card.style.borderRadius = '6px';
    const name = document.createElement('h4');
    name.textContent = c.name;
    const provider = document.createElement('p');
    provider.innerHTML = `<strong>Provider:</strong> ${c.provider}`;
    const desc = document.createElement('p');
    desc.textContent = c.description;
    const link = document.createElement('a');
    link.href = c.link ? c.link : '#';
    link.target = c.link ? '_blank' : '_self'; // Open in new tab if link exists
    link.textContent = c.link ? 'View Certificate' : 'Certificate link coming soon';
    link.className = 'btn-secondary';
    link.style.display = 'inline-block';
    link.style.marginTop = '0.5rem';
    link.style.pointerEvents = c.link ? 'auto' : 'none';
    if (c.image) {
      const img = document.createElement('img');
      img.src = c.image;
      img.alt = `${c.name} certificate`;
      card.appendChild(img);
    }
    card.appendChild(name);
    card.appendChild(provider);
    card.appendChild(desc);
    card.appendChild(link);
    certGrid.appendChild(card);
  });

  // ---------- Contact Form Handling ----------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Setup status message element if not exists
      let statusMsg = contactForm.querySelector('.form-status-msg');
      if (!statusMsg) {
        statusMsg = document.createElement('div');
        statusMsg.className = 'form-status-msg';
        statusMsg.style.marginTop = '15px';
        statusMsg.style.fontWeight = 'bold';
        contactForm.appendChild(statusMsg);
      }
      statusMsg.textContent = ''; // clear previous

      // Setup loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      try {
        const response = await fetch('https://formspree.io/f/xnpjvbab', {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });

        const data = await response.json();

        if (response.ok && data.ok) {
          // Success State
          submitBtn.textContent = 'Message Sent Successfully!';
          submitBtn.style.backgroundColor = 'var(--color-accent)';
          submitBtn.style.color = '#fff';
          statusMsg.style.color = 'var(--color-accent)';
          statusMsg.textContent = "Your message was sent successfully. Thank you!";
          contactForm.reset();
        } else {
          // Error State from Formspree
          if (Object.hasOwn(data, 'errors')) {
            throw new Error(data["errors"].map(error => error["message"]).join(", "));
          } else if (Object.hasOwn(data, 'error')) {
            throw new Error(data.error);
          } else {
            throw new Error("Oops! There was a problem submitting your form.");
          }
        }
      } catch (error) {
        console.error("Formspree Error:", error);
        submitBtn.textContent = 'Failed to Send.';
        submitBtn.style.backgroundColor = '#e74c3c'; // red failure state
        submitBtn.style.color = '#fff';
        
        statusMsg.style.color = '#e74c3c';
        if (error.name === 'TypeError' || error.message === 'Failed to fetch') {
            statusMsg.textContent = "Network/CORS Error: Formspree blocked the request. Please verify your Formspree email or disable reCAPTCHA.";
        } else {
            statusMsg.textContent = error.message;
        }
      } finally {
        // Reset button after 4 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
        }, 4000);
      }
    });
  }

  // ---------- Animations & Observers ----------

  // Navbar Scrolled State
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Intersection Observer for Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
