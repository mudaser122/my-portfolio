import React from 'react';
import { motion as Motion } from 'framer-motion';

const SectionReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.0, delay, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
};

export default SectionReveal;
