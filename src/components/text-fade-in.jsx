export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1.8,
      delayChildren: 0.8,
    }
  }
};

export const lineVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 2, ease: "easeInOut" } 
  }
};