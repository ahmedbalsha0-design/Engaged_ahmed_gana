import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Details = () => {
  const { t } = useLanguage();
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section
      id="details"
      className="py-24 flex flex-col items-center px-4"
      style={{ background: '#f0eeeb' }}
    >
      {/* Title */}
      <div 
        ref={revealRef}
        className={`flex flex-col items-center text-center section-reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2
          className="mb-2"
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            color: '#2d2d2d',
          }}
        >
          {t.dayDetails}
        </h2>
        <p
          className="mb-14 text-sm"
          style={{ fontFamily: 'var(--font-body)', color: '#aaa' }}
        >
          {t.everythingKnow}
        </p>
      </div>

      {/* Card */}
      <a
        href={t.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full max-w-xl mx-auto rounded-2xl p-6 md:p-10 flex flex-col items-center text-center gap-4 transition-transform hover:scale-[1.02] reveal-zoom ${isVisible ? 'visible' : ''}`}
        style={{
          background: 'white',
          border: '1px solid #e8e4e0',
          boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
          textDecoration: 'none',
          display: 'flex'
        }}
      >
        {/* Location icon */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
          style={{ background: '#e8e4e0' }}
        >
          <MapPin className="w-6 h-6" style={{ color: '#555' }} />
        </div>

        <h3
          className="text-lg font-semibold"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#2d2d2d' }}
        >
          {t.location}
        </h3>

        <p
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#666', fontStyle: 'italic' }}
        >
          {t.venue}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#999' }}>
          {t.address}
        </p>

        <div className="w-full h-px my-2" style={{ background: '#eee' }} />

        <div className="flex items-center gap-2 text-sm" style={{ color: '#888', fontFamily: 'var(--font-body)' }}>
          <Clock className="w-4 h-4" />
          <span>{t.timeRange}</span>
        </div>

        <p className="mt-2 text-xs font-medium" style={{ color: '#c4923a', letterSpacing: '0.05em' }}>
          {t.dir === 'rtl' ? 'إضغط لفتح الخريطة ↗' : 'CLICK TO OPEN MAP ↗'}
        </p>
      </a>
    </section>
  );
};
