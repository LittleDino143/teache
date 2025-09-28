import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import peerLogo from './assets/peer logo.jpg'; // Adjust path if needed
import schoolLogo from './assets/tcc-logo.png'; // Adjust path if needed

const HappyTeachersDay = () => {
  const message = "    Happy Teachers Day  Sir A";
  const subtitle = "From Peer Facilitators' Society";
  const [lettersVisible, setLettersVisible] = useState(0);
  const [emoticonsVisible, setEmoticonsVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const schoolLogoUrl = schoolLogo; // <-- Replace here (Placeholder used for safety)
  const orgLogoUrl = peerLogo;       // <-- Replace here (Placeholder used for safety)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lettersVisible < message.length) {
        setLettersVisible(lettersVisible + 1);
      } else {
        // Once the message is complete
        setLogoVisible(true);
        setTimeout(() => {
          setEmoticonsVisible(true);
        }, 500); // Wait a bit after logos appear to show emoticons
      }
    }, 150); // Speed of letter-by-letter typing
    return () => clearTimeout(timer);
  }, [lettersVisible, message.length]);

  const floatingEmoticons = [
    { icon: "📚", initialX: -50, initialY: -20 },
    { icon: "🍎", initialX: 50, initialY: -40 },
    { icon: "✏️", initialX: -80, initialY: 30 },
    { icon: "📝", initialX: 70, initialY: 10 },
    { icon: "🎓", initialX: -30, initialY: 50 },
    { icon: "🌟", initialX: 60, initialY: -60 },
    { icon: "❤️", initialX: -70, initialY: -50 },
    { icon: "🎉", initialX: 40, initialY: 60 }
  ];

  return (
<div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
  {/* Smoke effects remain here */}
      {/* Smoke effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/80 to-purple-400/80 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-l from-pink-400/80 to-yellow-400/80 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-b from-green-400/80 to-blue-400/80 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Two logos with fade-in animation */}
        {logoVisible && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex justify-center space-x-12"
          >
            {/* School Logo */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden bg-white">
              <img 
                src={schoolLogoUrl} 
                alt="School Logo" 
                className="object-contain w-full h-full"
              />
            </div>

            {/* Organization Logo */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden bg-white">
              <img 
                src={orgLogoUrl} 
                alt="Organization Logo" 
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>
        )}
        
        {/* Main message with letter-by-letter animation */}
        <h1 className="whitespace-preline text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif text-blue-900">
          {message.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: index < lettersVisible ? 1 : 0,
                y: index < lettersVisible ? 0 : 20
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {/* This is a non-breaking space for the space character */}
              {letter === ' ' ? '\u00A0' : letter === '\n' ? <br /> : letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          // The delay is calculated based on the message length * typing speed + a little extra
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: message.length * 0.15 + 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-700 mb-8 font-semibold"
        >
          {subtitle}
        </motion.p>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: message.length * 0.15 + 1, duration: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-yellow-300">
            <span className="text-3xl">🍎</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-300">
            <span className="text-3xl">📚</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-300">
            <span className="text-3xl">✏️</span>
          </div>
        </motion.div>

        {/* Thank you message */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: message.length * 0.15 + 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 italic max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Thank you for your dedication, patience, and the incredible impact you make every day. 
          Your guidance shapes futures and inspires greatness!
        </motion.p>

        {/* Additional decorative elements with fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: message.length * 0.15 + 2, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <div className="w-12 h-12 bg-yellow-100 rounded-lg shadow-md flex items-center justify-center border-2 border-yellow-200">
            <span className="text-2xl">🌟</span>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg shadow-md flex items-center justify-center border-2 border-blue-200">
            <span className="text-2xl">📖</span>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg shadow-md flex items-center justify-center border-2 border-green-200">
            <span className="text-2xl">❤️</span>
          </div>
        </motion.div>
      </div>

      {/* Floating emoticons */}
      {emoticonsVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingEmoticons.map((emoticon, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0,
                x: emoticon.initialX,
                y: emoticon.initialY
              }}
              animate={{ 
                opacity: [0, 1, 0], // Fade in, stay visible, fade out
                // Simple random float motion for a gentle float
                x: [emoticon.initialX, emoticon.initialX + Math.random() * 100 - 50, emoticon.initialX],
                y: [emoticon.initialY, emoticon.initialY + Math.random() * 100 - 50, emoticon.initialY]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2, // Varied duration for realism
                repeat: Infinity,
                delay: index * 0.3
              }}
              className="absolute text-2xl md:text-3xl"
              style={{
                // Position emoticons using percentage for distribution
                left: `${50 + (index % 2 === 0 ? -1 : 1) * (20 + index * 5)}%`,
                top: `${40 + (index % 3) * 10}%`
              }}
            >
              {emoticon.icon}
            </motion.div>
          ))}
        </div>
      )}

      {/* Background decorations */}
      <div className="absolute bottom-4 left-4 text-4xl opacity-20">📖</div>
      <div className="absolute top-4 right-4 text-4xl opacity-20">🎓</div>
      <div className="absolute top-10 left-10 text-3xl opacity-20">📝</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-20">✏️</div>
    </div>
  );
};

export default HappyTeachersDay;