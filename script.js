document.addEventListener("DOMContentLoaded", () => {
    const profileLinks = {
        email: "fhva.dev@gmail.com",
        linkedin: "https://www.linkedin.com/in/fhva",
        github: "https://github.com/fhva29"
    };

    const texts = {
        "pt-br": {
            lang: "pt-br",
            button: "EN",
            themeLight: "Light",
            themeDark: "Dark",
            nav: {
                ariaLabel: "Navegação do site",
                items: [
                    { href: "#about", label: "sobre" },
                    { href: "#experience", label: "experiência" },
                    { href: "#projects", label: "projetos" },
                    { href: "#contact", label: "contato" }
                ]
            },
            hero: {
                eyebrow: "backend.systems -- production-ready",
                title: "Francisco Heitor Vasconcelos",
                subtitle: "Backend Python. APIs, filas e software que aguenta produção.",
                tags: ["Python", "Django", "FastAPI", "Celery"],
                projectsCta: "Ver projetos"
            },
            about: {
                title: "Sobre",
                text: "Atuo construindo serviços backend, integrações e automações com atenção a contratos de API, persistência de dados, filas assíncronas e manutenção em produção. Meu foco é transformar requisitos de negócio em software organizado, testável e fácil de operar.",
                systemTitle: "$ runtime.profile",
                facts: [
                    ["player", "Heitor"],
                    ["lvl", "4 · quatro anos construindo"],
                    ["class", "backend"]
                ],
                inventoryLabel: "inventory",
                inventory: [
                    "wellnova — produção · oil & gas",
                    "sidia — automação interna + integração"
                ],
                special: "Me dá o fluxo de negócio. Eu devolvo API, fila e produção estável."
            },
            skills: {
                title: "Stack e práticas",
                groups: [
                    {
                        name: "Backend",
                        items: ["Python", "Django", "Flask", "FastAPI", "REST APIs", "microsserviços"]
                    },
                    {
                        name: "Dados",
                        items: ["PostgreSQL", "Redis", "MongoDB", "modelagem de dados", "consultas e persistência"]
                    },
                    {
                        name: "Mensageria e automação",
                        items: ["Celery", "RabbitMQ", "workers assíncronos", "rotinas automatizadas", "integrações"]
                    },
                    {
                        name: "Entrega e engenharia",
                        items: ["Docker", "Git/GitHub", "CI/CD", "testabilidade", "observabilidade", "developer experience"]
                    }
                ]
            },
            experience: {
                title: "Experiência",
                items: [
                    {
                        role: "Backend Python Developer",
                        company: "Ouronova",
                        period: "2023 - Presente",
                        summary: "Desenvolvimento de aplicações web, automações e rotinas backend com Django, bancos de dados e filas com Celery.",
                        bullets: [
                            "Implementação de serviços e fluxos backend orientados a regras de negócio.",
                            "Uso de bancos de dados e processamento assíncrono para operações recorrentes.",
                            "Colaboração em sistemas que exigem manutenção, evolução e confiabilidade."
                        ]
                    },
                    {
                        role: "Software Engineer",
                        company: "Sidia Institute of Science and Technology",
                        period: "2022 - 2023",
                        summary: "Desenvolvimento de automações e aplicações web com Django e Flask, administração de bancos de dados e integração de sistemas distribuídos.",
                        bullets: [
                            "Construção de ferramentas internas e automações para reduzir trabalho manual.",
                            "Integração entre sistemas e serviços com foco em consistência operacional.",
                            "Atuação em ambiente técnico com demandas de engenharia e comunicação clara."
                        ]
                    }
                ]
            },
            projects: {
                title: "Projetos",
                detailsLabel: "Decisões",
                items: [
                    {
                        title: "Wellnova.ai",
                        type: "Plataforma SaaS | Oil & Gas",
                        pitch: "Apoia fluxos de integridade de poços, intervenções e campanhas de abandono com software especializado.",
                        proof: "produção · oil & gas",
                        decisions: [
                            "Modelagem de fluxos backend para processos complexos de domínio.",
                            "Organização de dados e rotinas para suportar análise técnica.",
                            "Ênfase em confiabilidade, rastreabilidade e evolução contínua."
                        ],
                        link: { label: "Site", href: "https://wellnova.ai/" }
                    },
                    {
                        title: "Currency Exchange API",
                        type: "API backend | FastAPI",
                        pitch: "Fornece taxas de câmbio, histórico e conversões de moedas por meio de uma API clara e reutilizável.",
                        proof: "API pública · FastAPI",
                        decisions: [
                            "Contratos HTTP simples para consulta e conversão.",
                            "Separação entre integração externa, regra de negócio e resposta da API.",
                            "Foco em documentação, previsibilidade e consumo por outros serviços."
                        ],
                        link: { label: "GitHub", href: "https://github.com/fhva29/currency-exchange-api" }
                    }
                ]
            },
            education: {
                title: "Formação",
                items: ["Bacharel em Engenharia Elétrica - Universidade Federal do Ceará (2014 - 2019)"]
            },
            certification: {
                title: "Certificação",
                items: [
                    {
                        label: "EF SET Certificate: C2 Proficient in English - EF Standard English Test 2025",
                        href: "https://cert.efset.org/9tNcDt"
                    }
                ]
            },
            contact: {
                title: "Contato",
                copy: "Aberto a conversas técnicas sobre backend, APIs, integrações, automações e sistemas em produção.",
                links: [
                    ["Email", `mailto:${profileLinks.email}`],
                    ["LinkedIn", profileLinks.linkedin],
                    ["GitHub", profileLinks.github]
                ]
            },
            footer: "© 2026 Francisco Heitor Vasconcelos. Portfolio backend em HTML, CSS e JavaScript puro."
        },
        en: {
            lang: "en",
            button: "PT-BR",
            themeLight: "Light",
            themeDark: "Dark",
            nav: {
                ariaLabel: "Site navigation",
                items: [
                    { href: "#about", label: "about" },
                    { href: "#experience", label: "experience" },
                    { href: "#projects", label: "projects" },
                    { href: "#contact", label: "contact" }
                ]
            },
            hero: {
                eyebrow: "backend.systems -- production-ready",
                title: "Francisco Heitor Vasconcelos",
                subtitle: "Backend Python. APIs, queues, and software that holds up in production.",
                tags: ["Python", "Django", "FastAPI", "Celery"],
                projectsCta: "View projects"
            },
            about: {
                title: "About",
                text: "I build backend services, integrations and automations with attention to API contracts, data persistence, asynchronous queues and production maintenance. My focus is turning business requirements into organized, testable and operable software.",
                systemTitle: "$ runtime.profile",
                facts: [
                    ["player", "Heitor"],
                    ["lvl", "4 · four years building"],
                    ["class", "backend"]
                ],
                inventoryLabel: "inventory",
                inventory: [
                    "wellnova — production · oil & gas",
                    "sidia — internal automation + integration"
                ],
                special: "Give me the business flow. I'll return an API, a queue, and stable production."
            },
            skills: {
                title: "Stack and practices",
                groups: [
                    {
                        name: "Backend",
                        items: ["Python", "Django", "Flask", "FastAPI", "REST APIs", "microservices"]
                    },
                    {
                        name: "Data",
                        items: ["PostgreSQL", "Redis", "MongoDB", "data modeling", "queries and persistence"]
                    },
                    {
                        name: "Messaging and automation",
                        items: ["Celery", "RabbitMQ", "async workers", "automated routines", "integrations"]
                    },
                    {
                        name: "Delivery and engineering",
                        items: ["Docker", "Git/GitHub", "CI/CD", "testability", "observability", "developer experience"]
                    }
                ]
            },
            experience: {
                title: "Experience",
                items: [
                    {
                        role: "Backend Python Developer",
                        company: "Ouronova",
                        period: "2023 - Present",
                        summary: "Developing web applications, automations and backend routines with Django, databases and Celery queues.",
                        bullets: [
                            "Implemented backend services and flows guided by business rules.",
                            "Used databases and asynchronous processing for recurring operations.",
                            "Collaborated on systems that require maintenance, evolution and reliability."
                        ]
                    },
                    {
                        role: "Software Engineer",
                        company: "Sidia Institute of Science and Technology",
                        period: "2022 - 2023",
                        summary: "Developed automations and web applications with Django and Flask, administered databases and integrated distributed systems.",
                        bullets: [
                            "Built internal tools and automations to reduce manual work.",
                            "Integrated systems and services with a focus on operational consistency.",
                            "Worked in a technical environment with engineering demands and clear communication."
                        ]
                    }
                ]
            },
            projects: {
                title: "Projects",
                detailsLabel: "Decisions",
                items: [
                    {
                        title: "Wellnova.ai",
                        type: "SaaS platform | Oil & Gas",
                        pitch: "Supports well integrity workflows, interventions and plug and abandonment campaigns with specialized software.",
                        proof: "production · oil & gas",
                        decisions: [
                            "Backend flow modeling for complex domain processes.",
                            "Data organization and routines to support technical analysis.",
                            "Emphasis on reliability, traceability and continuous evolution."
                        ],
                        link: { label: "Site", href: "https://wellnova.ai/" }
                    },
                    {
                        title: "Currency Exchange API",
                        type: "Backend API | FastAPI",
                        pitch: "Provides exchange rates, history and currency conversion through a clear and reusable API.",
                        proof: "public API · FastAPI",
                        decisions: [
                            "Simple HTTP contracts for query and conversion flows.",
                            "Separation between external integration, business rules and API response.",
                            "Focus on documentation, predictability and consumption by other services."
                        ],
                        link: { label: "GitHub", href: "https://github.com/fhva29/currency-exchange-api" }
                    }
                ]
            },
            education: {
                title: "Education",
                items: ["Bachelor in Electrical Engineering - Federal University of Ceará (2014 - 2019)"]
            },
            certification: {
                title: "Certification",
                items: [
                    {
                        label: "EF SET Certificate: C2 Proficient in English - EF Standard English Test 2025",
                        href: "https://cert.efset.org/9tNcDt"
                    }
                ]
            },
            contact: {
                title: "Contact",
                copy: "Open to technical conversations about backend, APIs, integrations, automation and production systems.",
                links: [
                    ["Email", `mailto:${profileLinks.email}`],
                    ["LinkedIn", profileLinks.linkedin],
                    ["GitHub", profileLinks.github]
                ]
            },
            footer: "© 2026 Francisco Heitor Vasconcelos. Backend portfolio built with plain HTML, CSS and JavaScript."
        }
    };

    const state = {
        language: localStorage.getItem("portfolio-language") || "pt-br",
        theme: localStorage.getItem("portfolio-theme") || "dark",
        typingTimeout: null
    };

    const elements = {
        html: document.documentElement,
        themeColor: document.querySelector('meta[name="theme-color"]'),
        languageToggle: document.getElementById("language-toggle"),
        themeToggle: document.getElementById("theme-toggle"),
        siteNav: document.getElementById("site-nav"),
        navLinks: document.getElementById("nav-links"),
        heroEyebrow: document.getElementById("hero-eyebrow"),
        heroTitle: document.getElementById("hero-title"),
        heroSubtitle: document.getElementById("hero-subtitle"),
        heroTags: document.getElementById("hero-tags"),
        projectsCta: document.getElementById("projects-cta"),
        aboutTitle: document.getElementById("about-title"),
        aboutText: document.getElementById("about-text"),
        systemTitle: document.getElementById("system-title"),
        systemProfile: document.getElementById("system-profile"),
        inventoryLabel: document.getElementById("inventory-label"),
        systemInventory: document.getElementById("system-inventory"),
        systemSpecial: document.getElementById("system-special"),
        skillsTitle: document.getElementById("skills-title"),
        skillsGrid: document.getElementById("skills-grid"),
        experienceTitle: document.getElementById("experience-title"),
        experienceList: document.getElementById("experience-list"),
        projectsTitle: document.getElementById("projects-title"),
        projectList: document.getElementById("project-list"),
        educationTitle: document.getElementById("education-title"),
        educationList: document.getElementById("education-list"),
        certificationTitle: document.getElementById("certification-title"),
        certificationList: document.getElementById("certification-list"),
        contactTitle: document.getElementById("contact-title"),
        contactCopy: document.getElementById("contact-copy"),
        contactList: document.getElementById("contact-list"),
        footerText: document.getElementById("footer-text")
    };

    function createElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text) element.textContent = text;
        return element;
    }

    function createExternalLink(label, href, className) {
        const link = createElement("a", className, label);
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        return link;
    }

    function renderList(container, items) {
        container.innerHTML = "";
        items.forEach((item) => {
            container.appendChild(createElement("li", "", item));
        });
    }

    function typeText(text) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        clearTimeout(state.typingTimeout);
        elements.aboutText.textContent = "";

        if (prefersReducedMotion) {
            elements.aboutText.textContent = text;
            return;
        }

        let index = 0;
        function tick() {
            elements.aboutText.textContent += text.charAt(index);
            index += 1;
            if (index < text.length) {
                state.typingTimeout = setTimeout(tick, 12);
            }
        }
        tick();
    }

    function renderNav(content) {
        elements.siteNav.setAttribute("aria-label", content.ariaLabel);
        elements.navLinks.innerHTML = "";
        content.items.forEach((item) => {
            const listItem = createElement("li");
            const link = createElement("a", "", `> ${item.label}`);
            link.href = item.href;
            listItem.appendChild(link);
            elements.navLinks.appendChild(listItem);
        });
    }

    function renderHero(content) {
        elements.heroEyebrow.textContent = `> ${content.eyebrow}`;
        elements.heroTitle.textContent = content.title;
        elements.heroSubtitle.textContent = content.subtitle;
        elements.projectsCta.textContent = content.projectsCta;
        elements.heroTags.innerHTML = "";
        content.tags.forEach((tag) => {
            elements.heroTags.appendChild(createElement("span", "tag", tag));
        });
    }

    function renderAbout(content) {
        elements.aboutTitle.textContent = `> ${content.title}`;
        elements.systemTitle.textContent = content.systemTitle;
        elements.systemProfile.innerHTML = "";
        content.facts.forEach(([key, value]) => {
            elements.systemProfile.appendChild(createElement("dt", "", key));
            elements.systemProfile.appendChild(createElement("dd", "", value));
        });
        elements.inventoryLabel.textContent = content.inventoryLabel;
        renderList(elements.systemInventory, content.inventory);
        elements.systemSpecial.textContent = content.special;
        typeText(content.text);
    }

    function renderSkills(content) {
        elements.skillsTitle.textContent = `> ${content.title}`;
        elements.skillsGrid.innerHTML = "";
        content.groups.forEach((group) => {
            const card = createElement("article", "skill-card");
            card.appendChild(createElement("h3", "", group.name));
            const list = createElement("ul");
            renderList(list, group.items);
            card.appendChild(list);
            elements.skillsGrid.appendChild(card);
        });
    }

    function renderExperience(content) {
        elements.experienceTitle.textContent = `> ${content.title}`;
        elements.experienceList.innerHTML = "";
        content.items.forEach((item) => {
            const card = createElement("article", "experience-item");
            const header = createElement("header");
            const heading = createElement("h3", "", `${item.role} @ ${item.company}`);
            const period = createElement("span", "period", item.period);
            const summary = createElement("p", "", item.summary);
            const list = createElement("ul", "clean-list");

            renderList(list, item.bullets);
            header.appendChild(heading);
            header.appendChild(period);
            card.appendChild(header);
            card.appendChild(summary);
            card.appendChild(list);
            elements.experienceList.appendChild(card);
        });
    }

    function renderProjects(content) {
        elements.projectsTitle.textContent = `> ${content.title}`;
        elements.projectList.innerHTML = "";
        content.items.forEach((project) => {
            const card = createElement("article", "project-card");
            const title = createElement("h3", "", project.title);
            const meta = createElement("span", "project-meta", project.type);
            const pitch = createElement("p", "project-pitch", project.pitch);
            const proof = createElement("p", "project-proof", project.proof);
            const actions = createElement("div", "project-actions");

            card.appendChild(meta);
            card.appendChild(title);
            card.appendChild(pitch);
            card.appendChild(proof);

            if (project.decisions && project.decisions.length) {
                const details = createElement("details", "project-details");
                details.appendChild(createElement("summary", "", content.detailsLabel));
                const decisions = createElement("ul", "decision-list");
                renderList(decisions, project.decisions);
                details.appendChild(decisions);
                card.appendChild(details);
            }

            actions.appendChild(createExternalLink(project.link.label, project.link.href, "project-link"));
            card.appendChild(actions);
            elements.projectList.appendChild(card);
        });
    }

    function renderEducation(content) {
        elements.educationTitle.textContent = `> ${content.title}`;
        renderList(elements.educationList, content.items);
    }

    function renderCertification(content) {
        elements.certificationTitle.textContent = `> ${content.title}`;
        elements.certificationList.innerHTML = "";
        content.items.forEach((item) => {
            const listItem = createElement("li");
            listItem.appendChild(createExternalLink(item.label, item.href, ""));
            elements.certificationList.appendChild(listItem);
        });
    }

    function renderContact(content) {
        elements.contactTitle.textContent = `> ${content.title}`;
        elements.contactCopy.textContent = content.copy;
        elements.contactList.innerHTML = "";
        content.links.forEach(([label, href]) => {
            const listItem = createElement("li");
            listItem.appendChild(createExternalLink(label, href, ""));
            elements.contactList.appendChild(listItem);
        });
    }

    function applyTheme() {
        const isLight = state.theme === "light";
        elements.html.classList.toggle("light-theme", isLight);
        elements.themeToggle.setAttribute("aria-pressed", String(isLight));
        elements.themeToggle.textContent = isLight ? texts[state.language].themeDark : texts[state.language].themeLight;
        if (elements.themeColor) {
            elements.themeColor.setAttribute("content", isLight ? "#e8dfcc" : "#1a1714");
        }
    }

    function updateTexts() {
        const current = texts[state.language];
        elements.html.lang = current.lang;
        elements.languageToggle.textContent = current.button;
        renderNav(current.nav);
        renderHero(current.hero);
        renderAbout(current.about);
        renderSkills(current.skills);
        renderExperience(current.experience);
        renderProjects(current.projects);
        renderEducation(current.education);
        renderCertification(current.certification);
        renderContact(current.contact);
        elements.footerText.textContent = current.footer;
        applyTheme();
    }

    elements.languageToggle.addEventListener("click", () => {
        state.language = state.language === "pt-br" ? "en" : "pt-br";
        localStorage.setItem("portfolio-language", state.language);
        updateTexts();
    });

    elements.themeToggle.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("portfolio-theme", state.theme);
        applyTheme();
    });

    updateTexts();
});
