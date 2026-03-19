import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const RSVP = () => {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(null); // 'yes' | 'no'
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [revealRef, isVisible] = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!attending) return;
    
    setIsSubmitting(true);

    // Format WhatsApp message
    const status = attending === 'yes' ? 'Yes, I\'ll be there! 🎉' : 'Sorry, I can\'t make it 😢';
    const statusAr = attending === 'yes' ? 'نعم، سأحضر! 🎉' : 'عذراً، لا أستطيع الحضور 😢';
    
    let text = '';
    if (lang === 'ar') {
      text = `*رد دعوة الخطوبة*\n\n*الاسم:* ${name}\n*الحالة:* ${statusAr}\n*الرسالة:* ${message || '---'}`;
    } else {
      text = `*Engagement RSVP*\n\n*Name:* ${name}\n*Attending:* ${status}\n*Message:* ${message || '---'}`;
    }

    const encodedText = encodeURIComponent(text);
    const phoneNumber = '201061144574'; // Updated with the provided Egyptian number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <section
      id="rsvp"
      ref={revealRef}
      className={`py-24 flex flex-col items-center px-4 section-reveal ${isVisible ? 'visible' : ''}`}
      style={{ background: '#f0eeeb' }}
    >
      {/* Title */}
      <h2
        className="mb-8 text-center"
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(2.2rem, 5vw, 3rem)',
          color: '#2d2d2d',
        }}
      >
        {t.confirmTitle}
      </h2>

      {isSuccess ? (
        <div
          className="w-full max-w-lg rounded-2xl p-14 flex flex-col items-center text-center"
          style={{ background: 'white', border: '1px solid #e8e4e0', boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}
        >
          <h3
            style={{ fontFamily: 'var(--font-script)', fontSize: '3.5rem', color: 'var(--color-gold)', marginBottom: '12px' }}
          >
            {t.thankYou}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', color: '#888', fontSize: '0.9rem' }}>
            {t.receivedResponse}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col gap-6"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {t.fullName}
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t.yourFullName}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                padding: '14px 16px',
                border: '1.5px solid #ddd',
                borderRadius: '10px',
                background: 'white',
                outline: 'none',
                color: '#2d2d2d',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#2a4a3d'}
              onBlur={e => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Will you attend? */}
          <div className="flex flex-col gap-3">
            <label
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {t.willAttend}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setAttending('yes')}
                className={`attend-card ${attending === 'yes' ? 'selected-yes' : ''}`}
              >
                {t.yesAttend}
              </button>
              <button
                type="button"
                onClick={() => setAttending('no')}
                className={`attend-card ${attending === 'no' ? 'selected-no' : ''}`}
              >
                {t.noAttend}
              </button>
            </div>
          </div>

          {/* Message for the couple */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {t.messageCouple}
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={t.writeMessage}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                padding: '14px 16px',
                border: '1.5px solid #ddd',
                borderRadius: '10px',
                background: 'white',
                outline: 'none',
                color: '#2d2d2d',
                resize: 'vertical',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#2a4a3d'}
              onBlur={e => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || !attending}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '16px',
              background: isSubmitting || !attending ? '#aaa' : '#2a4a3d',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: isSubmitting || !attending ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {isSubmitting ? t.sending : t.sendConfirmation}
          </button>
          
          <p className="text-center text-[10px] text-gray-400 mt-2" style={{ fontFamily: 'var(--font-body)' }}>
            * This will send your RSVP details via WhatsApp.
          </p>
        </form>
      )}
    </section>
  );
};
