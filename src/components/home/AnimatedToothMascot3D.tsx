import React from "react";
import { motion } from "framer-motion";

export function AnimatedToothMascot3D() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center pointer-events-auto z-50">
      
      {/* Floating 2.5D Mascot */}
      <motion.img 
        src="/images/mascot-happy-final.png" 
        alt="Brite Smile Mascot"
        className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl z-10"
        initial={{ y: 10, scale: 0.98 }}
        animate={{ 
          y: [-10, 10, -10],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Soft Shadow */}
      <motion.div 
        className="absolute bottom-4 w-[250px] h-[20px] bg-slate-900/30 rounded-[100%] blur-xl z-0"
        animate={{ 
          scale: [0.8, 1.1, 0.8],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
