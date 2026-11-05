export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
      delay: custom * 0.1,
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: 'blur(8px)',
    scale: 0.8,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      delay: i * 0.045,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const letterHover = {
  y: -8,
  scale: 1.15,
  transition: {
    type: 'spring',
    stiffness: 450,
    damping: 12,
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const cyberGlowVariant = {
  rest: {
    boxShadow: '0 0 0px rgba(56, 189, 248, 0)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  hover: {
    boxShadow: '0 0 30px -5px rgba(56, 189, 248, 0.35)',
    borderColor: 'rgba(56, 189, 248, 0.4)',
    transition: { duration: 0.3 },
  },
};
