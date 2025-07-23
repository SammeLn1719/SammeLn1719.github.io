import React from "react";

const experience = [
  {
    company: "Landing Page Studio",
    role: "Full-stack Developer",
    period: "2022 — 2024",
    description: "Разработка и поддержка лендингов и интернет-магазинов с интеграцией платёжных сервисов. Оптимизация SEO, внедрение CI/CD.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Stripe", "Docker"],
    link: "https://test-landing.example.com",
  },
  {
    company: "Bitrix Integrator",
    role: "Web Developer (Bitrix/Bitrix24)",
    period: "2021 — 2022",
    description: "Создание и кастомизация сайтов на 1C-Битрикс и Bitrix24, интеграция с внешними сервисами, настройка бизнес-процессов.",
    technologies: ["PHP", "Bitrix", "Bitrix24", "JavaScript", "MySQL"],
    link: "https://test-bitrix.example.com",
  },
  {
    company: "amoCRM Solutions",
    role: "Module Developer (JS/PHP)",
    period: "2020 — 2021",
    description: "Разработка модулей и интеграций для amoCRM на JavaScript и PHP, автоматизация бизнес-процессов, работа с API.",
    technologies: ["JavaScript", "PHP", "amoCRM API"],
    link: "https://test-amocrm.example.com",
  },
  {
    company: "Mobile Apps Studio",
    role: "React Native Developer (Expo Go)",
    period: "2023 — 2024",
    description: "Разработка кроссплатформенных мобильных приложений на React Native с использованием Expo Go. Интеграция с REST API, публикация в App Store и Google Play, настройка push-уведомлений.",
    technologies: ["React Native", "Expo Go", "TypeScript", "REST API", "Push Notifications"],
    link: "https://test-expo-app.example.com",
  },
];

const Experience: React.FC = () => (
  <section className="w-full max-w-3xl mx-auto py-8 animate-fade-in-up">
    <h3 className="text-2xl font-bold mb-6 text-center">Опыт работы</h3>
    <ol className="relative border-l border-gray-300 dark:border-gray-700">
      {experience.map((item, idx) => (
        <li key={item.company + idx} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
              {item.company}
            </a>
            <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{item.period}</span>
          </div>
          <div className="text-base font-medium text-primary/90">{item.role}</div>
          <div className="text-sm text-muted-foreground mb-2">{item.description}</div>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded font-mono">
                {tech}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience; 