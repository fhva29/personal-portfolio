document.addEventListener("DOMContentLoaded", () => {
  // Texto que será animado para cada idioma
  const texts = {
      "pt-br": {
          header: "Francisco Heitor Vasconcelos",
          subHeader: "Backend Python Developer | APIs Escaláveis & Microsserviços",
          about: "Sou um Desenvolvedor Backend Python com experiência em desenvolvimento de APIs escaláveis, microsserviços e sistemas distribuídos. Minha abordagem foca em entregar soluções robustas e eficientes, utilizando frameworks como Django, Flask e FastAPI.",
          projects: [
              {
                  title: "PecManager",
                  description: "Sistema de gerenciamento de caixa desenvolvido em Python, utilizando TinyDB e Textual para controle de entradas e saídas financeiras.",
                  linkText: "Ver no GitHub",
                  linkHref: "https://github.com/Lusqinha/PecManager",
                  iconClass: "fab fa-github"
              },
              {
                  title: "My-shell",
                  description: "Website pessoal inspirado em interfaces de terminal, destacando minha ligação com sistemas Unix-based e desenvolvimento frontend.",
                  linkText: "Acessar o Projeto",
                  linkHref: "https://terminal.devlucasborges.com",
                  iconClass: "fas fa-terminal"
              },
              {
                  title: "Cloud Manager",
                  description: "Projeto para gerenciamento de dados baseado na LGPD, utilizando Ubuntu Server e apache2 para interface web segura.",
                  linkText: "Projeto Privado",
                  linkHref: "#",
                  iconClass: "fas fa-lock"
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
                  title: "PecManager",
                  description: "A cash management system developed in Python, using TinyDB and Textual for controlling financial inflows and outflows.",
                  linkText: "View on GitHub",
                  linkHref: "https://github.com/Lusqinha/PecManager",
                  iconClass: "fab fa-github"
              },
              {
                  title: "My-shell",
                  description: "A personal website inspired by terminal interfaces, highlighting my connection with Unix-based systems and frontend development.",
                  linkText: "Access Project",
                  linkHref: "https://terminal.devlucasborges.com",
                  iconClass: "fas fa-terminal"
              },
              {
                  title: "Cloud Manager",
                  description: "A data management project based on GDPR, using Ubuntu Server and apache2 for a secure web interface.",
                  linkText: "Private Project",
                  linkHref: "#",
                  iconClass: "fas fa-lock"
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

  // Função para aplicar o efeito de digitação
  function typeEffect(text, element, callback) {
      let index = 0;
      element.textContent = ""; // Limpa o texto atual

      function type() {
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
              typingTimeout = setTimeout(type, 30);
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

  // Função para atualizar os textos na página
  function updateTexts() {
      const currentTexts = texts[currentLanguage];

      // Header
      headerH1.textContent = `> ${currentTexts.header}`;
      headerP.textContent = currentTexts.subHeader;

      // Sobre Mim com efeito de digitação
      typeEffect(currentTexts.about, sobreMimElement);

      // Projetos
      const projectItems = document.querySelectorAll(".project-item");
      currentTexts.projects.forEach((project, index) => {
          const item = projectItems[index];
          if (item) {
              item.querySelector(".cmd").textContent = `~/projetos/${project.title}`;
              item.querySelector("p").textContent = project.description;
              const link = item.querySelector(".project-link");

              // Atualiza o conteúdo HTML do link, preservando o ícone
              link.innerHTML = `<i class="${project.iconClass}"></i> ${project.linkText}`;
              link.href = project.linkHref;

              // Adicionar ou remover classe 'disabled'
              if ((currentLanguage === "pt-br" && project.linkText === "Projeto Privado") ||
                  (currentLanguage === "en" && project.linkText === "Private Project")) {
                  link.classList.add("disabled");
              } else {
                  link.classList.remove("disabled");
              }
          }
      });

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

  // Função para alternar o tema (opcional)
  // function toggleTheme() {
  //     document.documentElement.classList.toggle("light-theme");
  //     // Change button icon
  //     if (document.documentElement.classList.contains("light-theme")) {
  //         themeToggleButton.textContent = "🌞";
  //     } else {
  //         themeToggleButton.textContent = "🌙";
  //     }
  // }

  // Evento de clique no botão de idioma
  languageToggleButton.addEventListener("click", toggleLanguage);

  // Evento de clique no botão de tema (opcional)
  // themeToggleButton.addEventListener("click", toggleTheme);

  // Carrega os textos ao inicializar
  updateTexts();
});
