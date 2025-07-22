import React from "react";

const Header: React.FC = () => (
  <header className="w-full flex flex-col items-center gap-4 py-8 animate-fade-in">
    <img
      src="/avatar.png"
      alt="Sammeln avatar"
      className="w-24 h-24 rounded-full border-4 border-primary shadow-lg mb-2"
      loading="lazy"
    />
    <h1 className="text-3xl font-bold tracking-tight">Sammeln</h1>
    <h2 className="text-xl font-semibold text-primary/80">Full-stack Developer (React, Next.js, E-commerce, Payments)</h2>
    <p className="max-w-xl text-center text-base text-muted-foreground">
      Разрабатываю современные интернет-магазины и интегрирую платёжные сервисы. Опыт во фронтенде и бэкенде, автоматизация, оптимизация, масштабируемые решения для e-commerce.
    </p>
    <div className="flex gap-4 mt-2">
      <a href="https://github.com/SammeLn1719" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform"><svg width="24" height="24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg></a>
      <a href="mailto:sammeln.dev@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform"><svg width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg></a>
      <a href="https://www.figma.com/@sammeln" target="_blank" rel="noopener noreferrer" aria-label="Figma" className="hover:scale-110 transition-transform"><svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M12 7.5A2.5 2.5 0 1 0 12 12h2.5A2.5 2.5 0 1 0 12 7.5zm0 0V12m0 0v4.5" stroke="#333" strokeWidth="2" strokeLinecap="round"/></svg></a>
    </div>
  </header>
);

export default Header; 