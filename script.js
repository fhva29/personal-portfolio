document.addEventListener("DOMContentLoaded", () => {
  // Texto que será animado
  const text = "Sou um Desenvolvedor Python Backend com experiência em desenvolvimento de APIs escaláveis, microsserviços e sistemas distribuídos. Minha abordagem foca em entregar soluções robustas e eficientes, utilizando frameworks como Django, Flask e FastAPI.";
  const sobreMimElement = document.getElementById("sobre-mim-text");

  // Efeito de digitação
  let index = 0;
  function typeEffect() {
      if (index < text.length) {
          sobreMimElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeEffect, 30);
      }
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
  const texts = {
    "pt-br": {
      header: "Desenvolvedor Backend Python | APIs Escaláveis & Microsserviços",
      about: "Sou um Backend Python Developer com experiência em desenvolvimento de APIs escaláveis, microsserviços e sistemas distribuídos. Minha abordagem foca em entregar soluções robustas e eficientes, utilizando frameworks como Django, Flask e FastAPI.",
      projects: [
        {
          title: "PecManager",
          description: "Sistema de gerenciamento de caixa desenvolvido em Python, utilizando TinyDB e Textual para controle de entradas e saídas financeiras.",
          link: "Ver no GitHub"
        },
        {
          title: "My-shell",
          description: "Website pessoal inspirado em interfaces de terminal, destacando minha ligação com sistemas Unix-based e desenvolvimento frontend.",
          link: "Acessar o Projeto"
        },
        {
          title: "Cloud Manager",
          description: "Projeto para gerenciamento de dados baseado na LGPD, utilizando Ubuntu Server e apache2 para interface web segura.",
          link: "Projeto Privado"
        }
      ],
      contact: "Contato",
      email: "fhva.dev@gmail.com",
      linkedin: "Linkedin",
      github: "Github",
      button: "EN"
    },
    "en": {
      header: "Backend Python Developer | Scalable APIs & Microservices",
      about: "I am a Backend Python Developer with experience in developing scalable APIs, microservices, and distributed systems. My approach focuses on delivering robust and efficient solutions using frameworks like Django, Flask, and FastAPI.",
      projects: [
        {
          title: "PecManager",
          description: "A cash management system developed in Python, using TinyDB and Textual for controlling financial inflows and outflows.",
          link: "View on GitHub"
        },
        {
          title: "My-shell",
          description: "A personal website inspired by terminal interfaces, highlighting my connection with Unix-based systems and frontend development.",
          link: "Access Project"
        },
        {
          title: "Cloud Manager",
          description: "A data management project based on GDPR, using Ubuntu Server and apache2 for a secure web interface.",
          link: "Private Project"
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

  // Alternar idioma
  const toggleLanguage = () => {
    currentLanguage = currentLanguage === "pt-br" ? "en" : "pt-br";
    updateTexts();
  };

  // Atualizar textos
  const updateTexts = () => {
    // Header
    document.querySelector("header p").textContent = texts[currentLanguage].header;

    // Sobre Mim
    document.querySelector(".line .text").textContent = texts[currentLanguage].about;

    // Projetos
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item, index) => {
      item.querySelector(".cmd").textContent = `~/projects/${texts[currentLanguage].projects[index].title}`;
      item.querySelector("p").textContent = texts[currentLanguage].projects[index].description;
      const link = item.querySelector(".project-link");

      link.textContent = texts[currentLanguage].projects[index].link;
      // Se for "Private Project"/"Projeto Privado", link vira "#"
      if (
        texts[currentLanguage].projects[index].link === "Private Project" ||
        texts[currentLanguage].projects[index].link === "Projeto Privado"
      ) {
        link.href = "#";
      }
    });

    // Contato
    const contactSection = document.querySelector(".line:last-of-type");
    contactSection.querySelector(".prompt").textContent = `> ${texts[currentLanguage].contact}:`;
    contactSection.querySelector("ul").innerHTML = `
      <li>
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:${texts[currentLanguage].email}" 
           class="social-link" 
           target="_blank">
           ${texts[currentLanguage].email}
        </a>
      </li>
      <li>
        <i class="devicon-linkedin-plain"></i>
        <a href="https://www.linkedin.com/in/heitor-vasconcelos-472028121/" 
           class="social-link" 
           target="_blank">
           ${texts[currentLanguage].linkedin}
        </a>
      </li>
      <li>
        <i class="devicon-github-original"></i>
        <a href="https://github.com/fhva29" 
           class="social-link" 
           target="_blank">
           ${texts[currentLanguage].github}
        </a>
      </li>
    `;

    // Botão de linguagem
    document.getElementById("language-toggle").textContent = texts[currentLanguage].button;
  };

  // Evento de clique no botão de idioma
  document.getElementById("language-toggle").addEventListener("click", toggleLanguage);

  // Carrega ao inicializar
  updateTexts();
});