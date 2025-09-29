import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// --- NOTE: Update these paths to your actual image files ---
import peerLogo from './assets/peer logo.jpg'; // Adjust path if needed
import schoolLogo from './assets/tcc-logo.png'; // Adjust path if needed

const HappyTeachersDay = () => {
  // Main message, the spaces will be rendered as non-breaking spaces
  const message = "    Happy Teachers Day  Sir A";
  const subtitle = "From Peer Facilitators' Society";
  
  // State for animations
  const [lettersVisible, setLettersVisible] = useState(0);
  const [emoticonsVisible, setEmoticonsVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  // Logo URLs
  const schoolLogoUrl = schoolLogo; 
  const orgLogoUrl = peerLogo;       

  // Effect for the typing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (lettersVisible < message.length) {
        setLettersVisible(lettersVisible + 1);
      } else {
        // Once the message is complete
        setLogoVisible(true); // Show logos
        setTimeout(() => {
          setEmoticonsVisible(true); // Show floating emoticons after logos
        }, 500); 
      }
    }, 150); // Speed of letter-by-letter typing (150ms per letter)
    return () => clearTimeout(timer);
  }, [lettersVisible, message.length]);

  // Data for the subtle floating emoticons
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
<div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">      
      {/* --- Smoke/Gradient Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/80 to-purple-400/80 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-l from-pink-400/80 to-yellow-400/80 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-b from-green-400/80 to-blue-400/80 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* --- Logos with Fade-In Animation --- */}
        {logoVisible && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex justify-center space-x-12"
          >
            {/* School Logo */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl border-4 border-white overflow-hidden bg-white">
              <img 
                src={schoolLogoUrl} 
                alt="School Logo" 
                className="object-contain w-full h-full p-1" // Added p-1 for slight internal padding
              />
            </div>

            {/* Organization Logo */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl border-4 border-white overflow-hidden bg-white">
              <img 
                src={orgLogoUrl} 
                alt="Organization Logo" 
                className="object-contain w-full h-full p-1"
              />
            </div>
          </motion.div>
        )}
        
        {/* --- Main Message (Typewriter Effect) --- */}
        <h1 className="whitespace-preline text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-serif text-blue-900 drop-shadow-lg">
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
              {/* Render a non-breaking space for the space character */}
              {letter === ' ' ? '\u00A0' : letter === '\n' ? <br /> : letter}
            </motion.span>
          ))}
        </h1>

        {/* --- Subtitle --- */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          // Delay calculates when the typing finishes + a little extra
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: message.length * 0.15 + 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-700 mb-8 font-semibold italic"
        >
          {subtitle}
        </motion.p>

        {/* --- Main Decorative Emoticons --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: message.length * 0.15 + 1, duration: 0.5 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-yellow-300 transform hover:scale-105 transition duration-300">
            <span className="text-3xl">🍎</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-300 transform hover:scale-105 transition duration-300">
            <span className="text-3xl">📚</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-300 transform hover:scale-105 transition duration-300">
            <span className="text-3xl">✏️</span>
          </div>
        </motion.div>

        {/* --- Thank You Message --- */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: message.length * 0.15 + 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 italic max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Thank you for your dedication, patience, and the incredible impact you make every day. 
          Your guidance shapes futures and inspires greatness!
        </motion.p>

        {/* --- Secondary Decorative Elements --- */}
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

      {/* --- Floating Emoticons Effect --- */}
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
                x: [emoticon.initialX, emoticon.initialX + (Math.random() * 100 - 50), emoticon.initialX],
                y: [emoticon.initialY, emoticon.initialY + (Math.random() * 100 - 50), emoticon.initialY]
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

      {/* --- Corner Background Decorations (Static) --- */}
      <div className="absolute bottom-4 left-4 text-4xl opacity-100 text-blue-500/50">📖</div>
      <div className="absolute top-4 right-4 text-4xl opacity-100 text-yellow-500/50">🎓</div>
      <div className="absolute top-10 left-10 text-3xl opacity-100 text-green-500/50">📝</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-100 text-pink-500/50">✏️</div>
    </div>
  );
};

export default HappyTeachersDay;