import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero = () => {
  const { lang, t, toggleLang } = useLanguage();
  const [revealRef, isVisible] = useScrollReveal();

  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/WhatsApp Video 2026-03-19 at 4.13.47 AM.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-0 text-transparent"
        style={{ background: 'rgba(20, 15, 10, 0.55)' }}
      />

      {/* Language toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium border border-white/30 bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
        >
          <span className={lang === 'en' ? 'text-white' : 'opacity-60 text-white'}>EN</span>
          <span className="w-px h-3 bg-white/30 mx-1" />
          <span className={lang === 'ar' ? 'text-white' : 'opacity-60 text-white'}>عربي</span>
        </button>
      </div>

      {/* Main content */}
      <div 
        ref={revealRef}
        className={`relative z-10 flex flex-col items-center text-center text-white px-6 reveal-zoom ${isVisible ? 'visible' : ''}`}
      >
        {/* "WE'RE GETTING ENGAGED" */}
        <p
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/90 mb-6"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
        >
          {t.gettingMarried}
        </p>

        {/* Names */}
        <div className="flex flex-col items-center">
          <h1
            className="m-0 leading-[1.1]"
            style={{
              fontFamily: 'var(--font-script2)',
              fontSize: 'clamp(4.5rem, 14vw, 8.5rem)',
              color: 'white',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            {t.name_boy}
          </h1>

          <p
            className="my-1"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: 'var(--color-gold)',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            {t.and}
          </p>

          <h1
            className="m-0 leading-[1.1]"
            style={{
              fontFamily: 'var(--font-script2)',
              fontSize: 'clamp(4.5rem, 14vw, 8.5rem)',
              color: 'white',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            {t.name_girl}
          </h1>
        </div>

        {/* Gold divider */}
        <div className="gold-divider my-8">
          <div className="gold-divider-line" />
          <div className="gold-sparkle">✦</div>
          <div className="gold-divider-line" />
        </div>

        {/* Date */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '0.05em',
          }}
        >
          {t.date}
        </p>
      </div>

      {/* "Confirm your attendance" CTA at bottom */}
      <button
        onClick={scrollToRSVP}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          {t.confirmAttendance}
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce-slow" />
      </button>
    </section>
  );
};
