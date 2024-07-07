import React, { useState, useEffect } from 'react';
import './AboutMe.css'; 

const AboutMe = () => {
    const phrases = [
        'Ich bin Ayhem und ich habe eine Leidenschaft für JavaScript und die Erstellung interaktiver Webanwendungen.',
        'Hallo; Ich bin Ayhem.'
    ];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(500); 

    useEffect(() => {
        const typeText = () => {
            const currentText = phrases[currentPhraseIndex];
            const textLength = currentText.length;

            
            if (!isDeleting && displayedText !== currentText) {
                setDisplayedText((prev) => currentText.substr(0, prev.length + 1));
                setTimeout(typeText, typingSpeed);
            } 
           
            else if (isDeleting && displayedText !== '') {
                setDisplayedText((prev) => currentText.substr(0, prev.length - 1));
                setTimeout(typeText, typingSpeed);
            } 
            
         
        };

        setTimeout(typeText, typingSpeed);
    }, [currentPhraseIndex, displayedText, isDeleting, phrases, typingSpeed]);

    return (
        <div className="about-me">
            <h1>Hallo;</h1>
            <h2>{displayedText}</h2>
        </div>
    );
};

export default AboutMe;
