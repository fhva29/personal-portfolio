document.addEventListener("DOMContentLoaded", () => {
    // Textos para cada idioma, incluindo as novas seções
    const texts = {
      "pt-br": {
        header: "Francisco Heitor Vasconcelos",
        subHeader: "Backend Python Developer | APIs Escaláveis & Microsserviços",
        about: "Sou um Desenvolvedor Backend Python com experiência em desenvolvimento de APIs escaláveis, microsserviços e sistemas distribuídos. Minha abordagem foca em entregar soluções robustas e eficientes, utilizando frameworks como Django, Flask e FastAPI.",
        skills: {
          title: "Competências Técnicas:",
          items: [
            "Python, Django, Flask, FastAPI",
            "APIs Escaláveis & Microsserviços",
            "Banco de Dados (PostgreSQL, Redis, MongoDB)",
            "Docker, CI/CD, Git, GitHub",
            "Celery, RabbitMQ, Redis"
          ]
        },
        experience: {
          title: "Experiência:",
          items: [
            {
              role: "Backend Python Developer",
              company: "Ouronova",
              period: "2023 – Presente",
              description: "Desenvolvimento de aplicações web e automações usando Django, gerenciamento de bancos de dados e implementação de filas com Celery."
            },
            {
              role: "Software Engineer",
              company: "Sidia Institute of Science and Technology",
              period: "2022 – 2023",
              description: "Desenvolvimento de automações e aplicações web com Django e Flask, administração de bancos de dados e integração de sistemas distribuídos."
            }
          ]
        },
        education: {
          title: "Educação:",
          items: [
            {
              degree: "Bacharel em Engenharia Elétrica",
              institution: "Universidade Federal do Ceará",
              period: "2014 – 2019"
            }
          ]
        },
        certification: {
          title: "Certificação:",
          items: [
            {
              name: "EF SET Certificate",
              detail: "C2 Proficient in English – EF Standard English Test 2025",
              link: "https://cert.efset.org/9tNcDt"
            }
          ]
        },
        projects: [
          {
            title: "Wellnova.ai",
            description: "A Wellnova é uma plataforma de software que utiliza inteligência artificial para otimizar a gestão da integridade de poços de petróleo e gás. Ela auxilia operadores e prestadores de serviços em diversas etapas, como construção de poços, intervenções e campanhas de abandono (P&A).",
            linkText: "Visitar Site",
            linkHref: "https://wellnova.ai/",
            iconClass: "fas fa-robot"
          },
          {
            title: "Currency Exchange API",
            description: "Uma API robusta desenvolvida para fornecer taxas de câmbio, dados históricos e realizar conversões de moedas em tempo real. Implementada em Python utilizando o framework FastAPI.",
            linkText: "Ver no GitHub",
            linkHref: "https://github.com/fhva29/currency-exchange-api",
            iconClass: "fab fa-github"
          }
        ],
        contact: "Contato",
        email: "fhva.dev@gmail.com",
        linkedin: "Linkedin",
        github: "Github",
        button: "EN"
      },
      "en": {
        header: "Francisco Heitor Vasconcelos",
        subHeader: "Backend Python Developer | Scalable APIs & Microservices",
        about: "I am a Backend Python Developer with experience in developing scalable APIs, microservices, and distributed systems. My approach focuses on delivering robust and efficient solutions using frameworks like Django, Flask, and FastAPI.",
        skills: {
          title: "Technical Skills:",
          items: [
            "Python, Django, Flask, FastAPI",
            "Scalable APIs & Microservices",
            "Database Management (PostgreSQL, Redis, MongoDB)",
            "Docker, CI/CD, Git, GitHub",
            "Celery, RabbitMQ, Redis"
          ]
        },
        experience: {
          title: "Experience:",
          items: [
            {
              role: "Backend Python Developer",
              company: "Ouronova",
              period: "2023 – Present",
              description: "Developing web applications and automations using Django, managing databases and implementing task queues with Celery."
            },
            {
              role: "Software Engineer",
              company: "Sidia Institute of Science and Technology",
              period: "2022 – 2023",
              description: "Developed automations and web applications using Django and Flask, administered databases, and integrated distributed systems."
            }
          ]
        },
        education: {
          title: "Education:",
          items: [
            {
              degree: "Bachelor in Electrical Engineering",
              institution: "Federal University of Ceará",
              period: "2014 – 2019"
            }
          ]
        },
        certification: {
          title: "Certification:",
          items: [
            {
              name: "EF SET Certificate",
              detail: "C2 Proficient in English – EF Standard English Test 2025",
              link: "https://cert.efset.org/9tNcDt"
            }
          ]
        },
        projects: [
          {
            title: "Wellnova.ai",
            description: "Wellnova is a software platform that uses artificial intelligence to optimize the management of oil and gas well integrity. It assists operators and service providers in various stages such as well construction, interventions, and plug and abandonment (P&A) campaigns.",
            linkText: "Visit Site",
            linkHref: "https://wellnova.ai/",
            iconClass: "fas fa-robot"
          },
          {
            title: "Currency Exchange API",
            description: "A robust API developed to provide exchange rates, historical data, and perform real-time currency conversions. Implemented in Python using the FastAPI framework.",
            linkText: "View on GitHub",
            linkHref: "https://github.com/fhva29/currency-exchange-api",
            iconClass: "fab fa-github"
          }
        ],
        contact: "Contact",
        email: "fhva.dev@gmail.com",
        linkedin: "Linkedin",
        github: "Github",
        button: "PT-BR"
      }
    };
  
    let currentLanguage = "pt-br";
    let typingTimeout;
    let isTyping = false;
  
    const sobreMimElement = document.getElementById("sobre-mim-text");
    const languageToggleButton = document.getElementById("language-toggle");
    const themeToggleButton = document.getElementById("theme-toggle");
    const headerH1 = document.querySelector("header h1");
    const headerP = document.querySelector("header p");
    const projectListElement = document.getElementById("project-list");
  
    // Efeito de digitação
    function typeEffect(text, element, callback) {
        let index = 0;
        element.innerHTML = "";
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                typingTimeout = setTimeout(type, 20);
            } else {
                isTyping = false;
                if (callback) callback();
            }
        }
        if (isTyping) {
            clearTimeout(typingTimeout);
        }
        isTyping = true;
        type();
    }
  
    // Renderiza a lista de projetos
    function renderProjects() {
        const projects = texts[currentLanguage].projects;
        projectListElement.innerHTML = "";
        projects.forEach((project) => {
            const projectItem = document.createElement("div");
            projectItem.className = "project-item";
            const cmdSpan = document.createElement("span");
            cmdSpan.className = "cmd";
            cmdSpan.textContent = `~/projetos/${project.title}`;
            const descriptionParagraph = document.createElement("p");
            descriptionParagraph.textContent = project.description;
            const projectLink = document.createElement("a");
            projectLink.href = project.linkHref;
            projectLink.target = "_blank";
            projectLink.className = "project-link";
            projectLink.innerHTML = `<i class="${project.iconClass}"></i> ${project.linkText}`;
            projectItem.appendChild(cmdSpan);
            projectItem.appendChild(descriptionParagraph);
            projectItem.appendChild(projectLink);
            projectListElement.appendChild(projectItem);
        });
    }
  
    // Atualiza todos os textos e seções
    function updateTexts() {
        const currentTexts = texts[currentLanguage];
  
        // Header
        headerH1.textContent = `> ${currentTexts.header}`;
        headerP.textContent = currentTexts.subHeader;
  
        // Sobre Mim
        typeEffect(currentTexts.about, sobreMimElement);
  
        // Skills / Competências Técnicas
        document.getElementById("skills-title").textContent = `> ${currentTexts.skills.title}`;
        const skillsList = document.getElementById("skills-list");
        skillsList.innerHTML = "";
        currentTexts.skills.items.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });
  
        // Experiência
        document.getElementById("experience-title").textContent = `> ${currentTexts.experience.title}`;
        const expList = document.getElementById("experience-list");
        expList.innerHTML = "";
        currentTexts.experience.items.forEach(exp => {
            const expDiv = document.createElement("div");
            expDiv.className = "experience-item";
            expDiv.innerHTML = `<strong>${exp.role}</strong> @ ${exp.company} (${exp.period})<br>${exp.description}`;
            expList.appendChild(expDiv);
        });
  
        // Projetos
        renderProjects();
  
        // Educação
        document.getElementById("education-title").textContent = `> ${currentTexts.education.title}`;
        const eduList = document.getElementById("education-list");
        eduList.innerHTML = "";
        currentTexts.education.items.forEach(edu => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${edu.degree}</strong> - ${edu.institution} (${edu.period})`;
            eduList.appendChild(li);
        });
  
        // Certificação
        document.getElementById("certification-title").textContent = `> ${currentTexts.certification.title}`;
        const certList = document.getElementById("certification-list");
        certList.innerHTML = "";
        currentTexts.certification.items.forEach(cert => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${cert.name}</strong>: ${cert.detail} <a href="${cert.link}" target="_blank">Ver Certificado</a>`;
            certList.appendChild(li);
        });
  
        // Contato
        const contactList = document.getElementById("contact-list");
        contactList.innerHTML = `
            <li>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:${currentTexts.email}" class="social-link" target="_blank">
                   ${currentTexts.email}
                </a>
            </li>
            <li>
                <i class="devicon-linkedin-plain"></i>
                <a href="https://www.linkedin.com/in/heitor-vasconcelos-472028121/" class="social-link" target="_blank">
                   ${currentTexts.linkedin}
                </a>
            </li>
            <li>
                <i class="devicon-github-original"></i>
                <a href="https://github.com/fhva29" class="social-link" target="_blank">
                   ${currentTexts.github}
                </a>
            </li>
        `;
  
        // Botão de idioma
        languageToggleButton.textContent = currentTexts.button;
    }
  
    // Alterna idioma
    function toggleLanguage() {
        currentLanguage = currentLanguage === "pt-br" ? "en" : "pt-br";
        updateTexts();
    }
  
    // Alterna tema
    function toggleTheme() {
        document.documentElement.classList.toggle("light-theme");
        themeToggleButton.textContent = document.documentElement.classList.contains("light-theme") ? "🌞" : "🌙";
    }
  
    languageToggleButton.addEventListener("click", toggleLanguage);
    themeToggleButton.addEventListener("click", toggleTheme);
    updateTexts();
  });
  