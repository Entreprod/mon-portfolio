'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-medium tracking-tight">Entreprod</div>
          
          <div className="flex items-center gap-10 text-sm">
            <a href="#competences" className="hover:text-white transition">Compétences</a>
            <a href="#projets" className="hover:text-white transition">Projets</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-zinc-800 transition"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO PRINCIPAL - Style que tu veux */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-700">
            <span className="text-emerald-400">●</span>
            <span className="text-sm tracking-widest">Disponible immédiatement - 78/92</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            Entreprod
          </h1>
          
          <p className="text-3xl md:text-4xl text-zinc-400 mb-4">
            Développeur Web &amp; Mobile Junior
          </p>
          
          <p className="max-w-md mx-auto text-zinc-500 text-lg mb-12">
            Bac+4 École d’Ingénieurs • React • Flutter • Next.js • React Native • Outils IA avancés
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projets"
              className="px-10 py-4 bg-white text-black font-medium rounded-2xl hover:bg-zinc-200 transition text-lg"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact"
              className="px-10 py-4 border border-zinc-700 font-medium rounded-2xl hover:bg-zinc-900 transition text-lg"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Sections suivantes (à compléter) */}
      <section id="competences" className="py-32 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Compétences</h2>
          {/* Tu peux ajouter tes skills ici plus tard */}
        </div>
      </section>

      <section id="projets" className="py-32 border-t border-zinc-800 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Projets</h2>
          <p className="text-center text-zinc-500">Projets disponibles sur Instagram @Entreprod</p>
        </div>
      </section>

      <section id="contact" className="py-32 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Prêt à collaborer ?</h2>
          <p className="text-xl text-zinc-400 mb-12">Disponible dans le 78 / 92 / ouest Paris</p>
          
          <a href="mailto:tonemail@gmail.com" className="text-2xl hover:text-emerald-400 transition">
            tonemail@gmail.com
          </a>
          
          <div className="flex justify-center gap-8 mt-16 text-4xl">
            <a href="https://github.com/Entreprod" target="_blank">🐙</a>
            <a href="https://www.instagram.com/Entreprod" target="_blank">📷</a>
            <a href="https://www.linkedin.com/in/loanngm" target="_blank">🔗</a>
          </div>
        </div>
      </section>
    </div>
  );
}
