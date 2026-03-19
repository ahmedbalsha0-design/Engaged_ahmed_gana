import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimeLeft() {
  const target = new Date('2026-04-08T16:00:00');
  const now = new Date();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const Countdown = () => {
  const [time, setTime] = useState(getTimeLeft());
  const { t } = useLanguage();
  const [revealRef, isVisible] = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time.days, label: t.days },
    { value: time.hours, label: t.hours },
    { value: time.minutes, label: t.minutes },
    { value: time.seconds, label: t.seconds },
  ];

  return (
    <section
      id="countdown"
      ref={revealRef}
      className={`py-24 flex flex-col items-center section-reveal ${isVisible ? 'visible' : ''}`}
      style={{ background: '#f0eeeb' }}
    >
      {/* Title */}
      <h2
        className="mb-2"
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          color: '#2d2d2d',
        }}
      >
        {t.countdown}
      </h2>
      <p
        className="mb-16 text-sm"
        style={{ fontFamily: 'var(--font-body)', color: '#aaa', letterSpacing: '0.03em' }}
      >
        {t.toBigDay}
      </p>

      {/* Timer */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 max-w-full">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-4 md:gap-10">
            <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
              <span className="countdown-number">{pad(u.value)}</span>
              <span className="countdown-label">{u.label}</span>
            </div>
            {i < units.length - 1 && (
              <span
                className="text-gray-300 mt-2 hidden sm:block"
                style={{ fontSize: '1.5rem', lineHeight: 1, fontFamily: 'serif' }}
              >
                ✦
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
