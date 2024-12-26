import { useState, useEffect } from 'react';
import './AboutMe.css'; 

const AboutMe = () => {
    const phrases = [
        '"Herzlich willkommen! Mein Name ist Ayhem. Ich bin leidenschaftlicher Webentwickler und freue mich, Ihnen meine Arbeit vorzustellen."',
        '"Ich liebe es, innovative und interaktive Webanwendungen zu entwickeln."',
        '"Vielen Dank, dass Sie meine Seite besuchen!"'
    ];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = phrases[currentPhraseIndex];

            if (!isDeleting) {
                // كتابة النص تدريجيًا
                setDisplayedText((prev) => currentText.substr(0, prev.length + 1));
                setTypingSpeed(100); // سرعة الكتابة
                if (displayedText === currentText) {
                    setIsDeleting(true);
                    setTypingSpeed(2000); // تأخير قبل الحذف
                }
            } else {
                // حذف النص تدريجيًا
                setDisplayedText((prev) => currentText.substr(0, prev.length - 1));
                setTypingSpeed(50); // سرعة الحذف
                if (displayedText === '') {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء المكون
    }, [displayedText, isDeleting, typingSpeed, phrases, currentPhraseIndex]);

    return (
        <div className="about-me">
            <h1>Hallo!</h1>
            <h2>{displayedText}</h2>
        </div>
    );
};

export default AboutMe;
