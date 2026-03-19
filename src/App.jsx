import { useState } from 'react';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Details } from './components/Details';
import { RSVP } from './components/RSVP';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [opened, setOpened] = useState(false);
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Envelope cover — shown first, fades away on open */}
      {!opened && <Envelope onOpen={() => setOpened(true)} />}

      {/* Main invitation content */}
      <div
        style={{
          opacity: opened ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
          pointerEvents: opened ? 'all' : 'none',
        }}
      >
        <main>
          <Hero />
          <Countdown />
          <Details />
          <RSVP />
        </main>

        {/* Footer */}
        <footer
          className="py-16 flex flex-col items-center text-center"
          style={{ background: '#2a4a3d', color: 'white' }}
        >
          <h2
            className="mb-1"
            style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', color: 'white' }}
            dir="ltr"
          >
            {t.name_boy} {t.and} {t.name_girl}
          </h2>
          <p
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}
          >
            {t.date}
          </p>
          <p
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}
          >
            {t.waitingForYou}
          </p>
          <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)', margin: '24px auto' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
            {t.madeWith}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
