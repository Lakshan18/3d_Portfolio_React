import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Computers from '../models/Computers';

const Section1Dev = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [deletingChars, setDeletingChars] = useState([]);
    const [hasStarted, setHasStarted] = useState(false);

    const phrases = [
        "Engineering robust web solutions.!",
        "Clean code advocate & architect.",
        "Performance-obsessed developer..",
        "Creating maintainable systems.!",
        "Modern solutions for modern problems.!!"
    ];

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setHasStarted(true);
            setIsTyping(true);
        }, 2000);

        return () => clearTimeout(startTimeout);
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let timeout;

        if (isTyping) {
            if (displayedText.length < phrases[currentPhraseIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(phrases[currentPhraseIndex].substring(0, displayedText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 1500);
            }
        } else {
            if (displayedText.length > 0) {
                const charToDelete = displayedText[displayedText.length - 1];
                setDeletingChars(prev => [...prev, {
                    char: charToDelete,
                    id: Date.now() + Math.random()
                }]);

                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev.substring(0, prev.length - 1));

                    setTimeout(() => {
                        setDeletingChars(prev => prev.slice(1));
                    }, 500);
                }, 50);
            } else {
                setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentPhraseIndex, hasStarted]);

    return (
        <div className='relative w-full h-screen'>
            <div className={`${styles.paddingX} absolute inset-0 top-[30px] mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-4 h-4 rounded-full bg-[#6f3fc7]' />
                    <div className='w-[4px] md:h-50 lg:h-50 xl:h-50 sm:h-50 xs:h-40 @2xs:h-40 violet-gradient' />
                </div>
                <div className='flex-1'>
                    <label className={`${styles.heroHeadText} text-white`}>Hi, </label>
                    <label className={`${styles.heroHeadText} text-white`}>I'm <span className='text-[#F0AEFF]'>Lakshan</span></label>
                    <p className={`${styles.heroSubText} mt-2 text-white`}>
                        I am a <span className='text-[#F0AEFF]'>Full Stack Developer </span>
                        with a passion for creating dynamic and responsive web applications.
                    </p>
                </div>

                <motion.div
                    className="flex flex-row items-center gap-4 pt-[10%]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative p-4 bg-[#2a1d3d] rounded-lg border border-[#6f3fc7] max-w-[300px] min-h-auto">
                        <div className="absolute top-1/2 -right-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#1a1a1a] transform -translate-y-1/2" />
                        <div className="font-mono text-[#F0AEFF] text-sm relative">
                            {displayedText}
                            {deletingChars.map(({ char, id }) => (
                                <motion.span
                                    key={id}
                                    className="absolute text-[#F0AEFF]"
                                    initial={{
                                        opacity: 1,
                                        y: 0,
                                        x: 0,
                                        scale: 1,
                                        filter: 'blur(0px)'
                                    }}
                                    animate={{
                                        opacity: 0,
                                        y: -20,
                                        x: Math.random() * 20 - 10,
                                        scale: 0.3,
                                        filter: 'blur(2px)'
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="ml-1 inline-block"
                            >
                                |
                            </motion.span>
                        </div>
                    </div>

                    <div className="w-[120px] h-[120px]">
                        <img
                            src="./side_images/developer1.png"
                            className="w-full h-full object-contain"
                            alt="Developer character"
                        />
                    </div>
                </motion.div>
            </div>
            <Computers />
        </div>
    )
}

export default Section1Dev;