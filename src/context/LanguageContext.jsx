import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    name_boy: "Ahmed",
    name_girl: "Gana",
    invitationFor: "A Special Invitation For",
    guest: "Guest",
    tapToOpen: "Tap to Open",
    weddingInvitation: "Engagement Invitation",
    gettingMarried: "We're Getting Engaged",
    and: "&",
    date: "April 8, 2026",
    confirmAttendance: "Confirm Your Attendance",
    countdown: "Countdown",
    toBigDay: "To the big day",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    dayDetails: "Day Details",
    everythingKnow: "Everything you need to know",
    location: "Location",
    venue: "Viola Hall",
    address: "Tanta - Mahalla Al-Kubra Rd, Safat Turab",
    timeRange: "From 08:00 PM to night",
    confirmTitle: "Confirm your attendance",
    fullName: "Full Name",
    yourFullName: "Your full name",
    willAttend: "Will you attend?",
    yesAttend: "Yes, I'll be there! 🎉",
    noAttend: "Sorry, I can't make it 😢",
    messageCouple: "Message for the couple",
    writeMessage: "Write a message...",
    signature: "Signature",
    clear: "Clear",
    drawSignature: "Draw your signature above",
    sendConfirmation: "Send Confirmation",
    sending: "Sending...",
    thankYou: "Thank You!",
    receivedResponse: "We have received your response and can't wait to see you!",
    waitingForYou: "We are waiting for you!",
    madeWith: "Made with ♥ for Ahmed & Gana",
    mapLink: "https://maps.app.goo.gl/RG4YozC3zzmGh35h8",
    dir: "ltr"
  },
  ar: {
    name_boy: "أحمد",
    name_girl: "جنة",
    invitationFor: "دعوة خاصة لـ",
    guest: "ضيفنا العزيز",
    tapToOpen: "إضغط للفتح",
    weddingInvitation: "دعوة خطوبة",
    gettingMarried: "نحن نخطب",
    and: "و",
    date: "٨ أبريل ٢٠٢٦",
    confirmAttendance: "تأكيد الحضور",
    countdown: "العد التنازلي",
    toBigDay: "لليوم الكبير",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني",
    dayDetails: "تفاصيل اليوم",
    everythingKnow: "كل ما تحتاج لمعرفته",
    location: "الموقع",
    venue: "قاعه فيولا",
    address: "طريق طنطا - المحلة الكبري، صفط تراب",
    timeRange: "من ٠٨:٠٠ مساءً حتى السهرة",
    confirmTitle: "أكد حضورك",
    fullName: "الاسم الكامل",
    yourFullName: "اسمك الكامل",
    willAttend: "هل ستحضر؟",
    yesAttend: "نعم، سأكون هناك! 🎉",
    noAttend: "عذراً، لا أستطيع الحضور 😢",
    messageCouple: "رسالة للعروسين",
    writeMessage: "اكتب رسالة...",
    signature: "التوقيع",
    clear: "مسح",
    drawSignature: "ارسم توقيعك أعلاه",
    sendConfirmation: "إرسال التأكيد",
    sending: "جاري الإرسال...",
    thankYou: "شكراً لك!",
    receivedResponse: "لقد استلمنا ردك ولا يمكننا الانتظار لرؤيتك!",
    waitingForYou: "نحن بانتظارك!",
    madeWith: "Made with ♥ for Ahmed & Gana",
    mapLink: "https://maps.app.goo.gl/RG4YozC3zzmGh35h8",
    dir: "rtl"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
