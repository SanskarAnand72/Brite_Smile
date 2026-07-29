"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export function AnimatedToothMascot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Eye movement based on mouse
  const eyeOffsetX = mousePosition.x * 6;
  const eyeOffsetY = mousePosition.y * 4;

  // Blinking animation sequence
  const blinkAnimation = {
    scaleY: [1, 1, 0.1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1, 1, 1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.45, 0.48, 0.51, 0.6, 0.7, 0.8, 0.85, 0.88, 0.9, 0.92, 0.95, 0.97, 0.98, 0.99, 1]
    }
  };

  // Breathing & Floating body animation
  const floatAnimation = {
    y: [0, -12, 0],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Hand waving animation
  const waveAnimation = {
    rotate: [0, -15, 15, -10, 10, 0, 0, 0, 0, 0],
    y: [0, -5, -5, -5, -5, 0, 0, 0, 0, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative w-full h-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">
      {/* Soft glowing backdrop shadow */}
      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-75 opacity-70" />

      <motion.div
        className="relative z-10 w-full h-full"
        animate={floatAnimation}
        style={{ transformOrigin: "bottom center" }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            {/* Main Tooth 3D Gradient */}
            <radialGradient id="toothGradient" cx="0.4" cy="0.3" r="0.8" fx="0.3" fy="0.2">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="90%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </radialGradient>
            
            <radialGradient id="toothShadow" cx="0.5" cy="0.9" r="0.5">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="blushGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF8A8A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF8A8A" stopOpacity="0" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Body */}
          <g>
            <path
              d="M200 330C150 330 130 380 130 380C130 380 90 350 90 270C90 190 110 90 200 90C290 90 310 190 310 270C310 350 270 380 270 380C270 380 250 330 200 330Z"
              fill="url(#toothGradient)"
            />
            
            {/* Top bumps of the tooth */}
            <path
              d="M130 130C130 70 180 50 200 90C220 50 270 70 270 130"
              fill="url(#toothGradient)"
            />
            
            {/* Body 3D Highlights */}
            <path
              d="M130 130C130 80 170 60 200 100"
              stroke="#FFFFFF"
              strokeWidth="12"
              strokeLinecap="round"
              filter="blur(4px)"
              opacity="0.8"
            />
          </g>

          {/* Blush */}
          <ellipse cx="140" cy="220" rx="20" ry="12" fill="#FF8A8A" opacity="0.3" filter="blur(6px)" />
          <ellipse cx="260" cy="220" rx="20" ry="12" fill="#FF8A8A" opacity="0.3" filter="blur(6px)" />

          {/* Face Group */}
          <g transform="translate(0, 0)">
            {/* Eyes */}
            <motion.g animate={blinkAnimation} style={{ transformOrigin: "200px 190px" }}>
              {/* Left Eye */}
              <g transform={`translate(${eyeOffsetX}, ${eyeOffsetY})`}>
                <ellipse cx="150" cy="190" rx="14" ry="18" fill="#1E293B" />
                <circle cx="155" cy="185" r="4" fill="white" />
                <circle cx="145" cy="195" r="2" fill="white" opacity="0.8" />
              </g>

              {/* Right Eye */}
              <g transform={`translate(${eyeOffsetX}, ${eyeOffsetY})`}>
                <ellipse cx="250" cy="190" rx="14" ry="18" fill="#1E293B" />
                <circle cx="255" cy="185" r="4" fill="white" />
                <circle cx="245" cy="195" r="2" fill="white" opacity="0.8" />
              </g>
            </motion.g>

            {/* Happy Smile */}
            <motion.path
              d="M 185 220 Q 200 235 215 220"
              stroke="#1E293B"
              strokeWidth="5"
              strokeLinecap="round"
              fill="transparent"
              animate={{
                d: ["M 185 220 Q 200 235 215 220", "M 185 220 Q 200 240 215 220", "M 185 220 Q 200 235 215 220"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          {/* Animated Waving Hand (Left) */}
          <motion.g 
            animate={waveAnimation} 
            style={{ transformOrigin: "80px 240px" }}
          >
            {/* Hand Shape */}
            <ellipse cx="70" cy="230" rx="15" ry="12" fill="url(#toothGradient)" transform="rotate(-30 70 230)" />
          </motion.g>

          {/* Right Hand (Idle) */}
          <motion.g
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <ellipse cx="330" cy="250" rx="15" ry="12" fill="url(#toothGradient)" transform="rotate(20 330 250)" />
          </motion.g>
          
          {/* Sparkles */}
          <motion.path
            d="M 80 100 L 90 90 L 100 100 L 90 110 Z"
            fill="#FBBF24"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], rotate: [0, 90, 180] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 280 60 L 285 55 L 290 60 L 285 65 Z"
            fill="#60A5FA"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3], rotate: [0, -90, -180] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          />

        </svg>
      </motion.div>
    </div>
  );
}
