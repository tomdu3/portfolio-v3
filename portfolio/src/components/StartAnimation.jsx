import { motion } from "framer-motion";

export const StartAnimation = ({ onComplete }) => {
  const fullText = "print('Python Forever!')";
  const letters = Array.from(fullText);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <motion.div
        className="mb-4 text-2xl md:text-4xl font-mono font-bold text-center"
        style={{ display: "flex", overflow: "hidden" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setTimeout(() => onComplete(), 1000)}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ position: "relative" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>

      <div className="w-[300px] md:w-[500px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-red-500 shadow-[0_0_15px_#f63b70 animate-loading-bar">
          {" "}
        </div>
      </div>
    </div>
  );
};