import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Envelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [visible, setVisible] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        background: '#f0eeeb',
        transition: 'opacity 0.5s ease',
        opacity: isOpening ? 0 : 1,
      }}
    >
      {/* Language toggle top-right */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1.5 text-xs font-medium shadow border border-gray-200 transition-colors hover:bg-white"
        >
          <span className={lang === 'en' ? 'text-gray-800' : 'text-gray-400'}>EN</span>
          <span className="w-px h-3 bg-gray-300 mx-1" />
          <span className={lang === 'ar' ? 'text-gray-800' : 'text-gray-400'}>عربي</span>
        </button>
      </div>

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
        className="flex flex-col items-center gap-8"
      >
        {/* "A special invitation for Guest" text */}
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-2">{t.invitationFor}</p>
          <p
            className="text-3xl text-gray-700 font-script"
          >
            {t.guest}
          </p>
        </div>

        {/* Envelope */}
        <div
          className="envelope"
          onClick={handleClick}
          style={{
            transform: isOpening ? 'translateY(-30px) scale(0.92)' : 'scale(min(1, calc(100vw / 380)))',
            transition: 'transform 0.8s ease',
          }}
        >
          {/* Envelope body */}
          <div className="envelope-body" />

          {/* Left flap */}
          <div className="envelope-left-flap" />
          {/* Right flap */}
          <div className="envelope-right-flap" />
          {/* Bottom flap */}
          <div className="envelope-bottom-flap" />

          {/* Envelope card inside */}
          <div className="envelope-card font-script">{t.weddingInvitation}</div>

          {/* Top flap */}
          <div
            className="envelope-flap"
            style={{
              transform: isOpening ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              transition: 'transform 0.7s ease',
            }}
          />

          {/* Wax seal */}
          <div className="wax-seal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>

        {/* "Tap to open" */}
        <div
          className="text-center animate-bounce-slow"
          style={{ opacity: isOpening ? 0 : 1, transition: 'opacity 0.3s' }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400">{t.tapToOpen}</p>
        </div>
      </div>
    </div>
  );
};
