import { motion } from "framer-motion";

const spinner = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const wave = {
  initial: { scale: 0.1 },
  animate: {
    scale: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.8,
      ease: "circInOut",
    },
  },
};

const Spinner = () => {
  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      variants={spinner}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      <motion.div layout className="wave" variants={wave} />
      <motion.div layout className="wave" variants={wave} />
      <motion.div layout className="wave" variants={wave} />
      <motion.div layout className="wave" variants={wave} />
      <motion.div layout className="wave" variants={wave} />
      <motion.div layout className="wave" variants={wave} />
      <motion.div layout className="wave" variants={wave} />
    </motion.div>
  );
};

export default Spinner;
