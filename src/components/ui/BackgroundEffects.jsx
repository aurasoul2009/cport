import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30" />

      {/* Aurora Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="aurora-blob-1 -top-40 -left-40"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 90, -60, 0],
          scale: [1, 1.15, 0.85, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="aurora-blob-2 top-1/3 -right-40"
      />

      <motion.div
        animate={{
          x: [0, 80, -90, 0],
          y: [0, -100, 70, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="aurora-blob-1 bottom-10 left-1/3 opacity-50"
      />

      {/* Noise Texture */}
      <div className="noise-overlay" />
    </div>
  );
}
