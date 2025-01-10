document.addEventListener("DOMContentLoaded", () => {
  // Texto que será animado para cada idioma
  const texts = {
      "pt-br": {
          header: "Francisco Heitor Vasconcelos",
          subHeader: "Backend Python Developer | APIs Escaláveis & Microsserviços",
          about: "Sou um Desenvolvedor Backend Python com experiência em desenvolvimento de APIs escaláveis, microsserviços e sistemas distribuídos. Minha abordagem foca em entregar soluções robustas e eficientes, utilizando frameworks como Django, Flask e FastAPI.",
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

  // Função para aplicar o efeito de digitação
  function typeEffect(text, element, callback) {
      let index = 0;
      element.innerHTML = ""; // Limpa o conteúdo atual

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

  // Função para atualizar os projetos na página
  function renderProjects() {
      const projects = texts[currentLanguage].projects;
      projectListElement.innerHTML = ""; // Limpa a lista de projetos

      projects.forEach((project) => {
          // Cria o item do projeto
          const projectItem = document.createElement("div");
          projectItem.className = "project-item";

          // Comando do projeto
          const cmdSpan = document.createElement("span");
          cmdSpan.className = "cmd";
          cmdSpan.textContent = `~/projetos/${project.title}`;

          // Descrição do projeto
          const descriptionParagraph = document.createElement("p");
          descriptionParagraph.textContent = project.description;

          // Link do projeto
          const projectLink = document.createElement("a");
          projectLink.href = project.linkHref;
          projectLink.target = "_blank";
          projectLink.className = "project-link";
          projectLink.innerHTML = `<i class="${project.iconClass}"></i> ${project.linkText}`;

          // Adiciona os elementos ao item do projeto
          projectItem.appendChild(cmdSpan);
          projectItem.appendChild(descriptionParagraph);
          projectItem.appendChild(projectLink);

          // Adiciona o item do projeto à lista de projetos
          projectListElement.appendChild(projectItem);
      });
  }

  // Função para atualizar os textos na página
  function updateTexts() {
      const currentTexts = texts[currentLanguage];

      // Header
      headerH1.textContent = `> ${currentTexts.header}`;
      headerP.textContent = currentTexts.subHeader;

      // Sobre Mim com efeito de digitação
      typeEffect(currentTexts.about, sobreMimElement);

      // Atualiza os projetos
      renderProjects();

      // Contato
      const contactSection = document.querySelectorAll(".line")[2];
      contactSection.querySelector(".prompt").textContent = `> ${currentTexts.contact}:`;
      contactSection.querySelector("ul").innerHTML = `
          <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:${currentTexts.email}" 
                 class="social-link" 
                 target="_blank">
                 ${currentTexts.email}
              </a>
          </li>
          <li>
              <i class="devicon-linkedin-plain"></i>
              <a href="https://www.linkedin.com/in/heitor-vasconcelos-472028121/" 
                 class="social-link" 
                 target="_blank">
                 ${currentTexts.linkedin}
              </a>
          </li>
          <li>
              <i class="devicon-github-original"></i>
              <a href="https://github.com/fhva29" 
                 class="social-link" 
                 target="_blank">
                 ${currentTexts.github}
              </a>
          </li>
      `;

      // Botão de linguagem
      languageToggleButton.textContent = currentTexts.button;
  }

  // Função para alternar o idioma
  function toggleLanguage() {
      currentLanguage = currentLanguage === "pt-br" ? "en" : "pt-br";
      updateTexts();
  }

  // Função para alternar o tema
  function toggleTheme() {
      document.documentElement.classList.toggle("light-theme");
      // Change button icon
      if (document.documentElement.classList.contains("light-theme")) {
          themeToggleButton.textContent = "🌞";
      } else {
          themeToggleButton.textContent = "🌙";
      }
  }

  // Evento de clique no botão de idioma
  languageToggleButton.addEventListener("click", toggleLanguage);

  // Evento de clique no botão de tema
  themeToggleButton.addEventListener("click", toggleTheme);

  // Carrega os textos ao inicializar
  updateTexts();
});
