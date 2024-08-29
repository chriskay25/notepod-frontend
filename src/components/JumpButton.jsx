import { motion } from "framer-motion";

const JumpButton = ({ direction, skip }) => {
  return (
    <div
      className={`jump-button ${direction}`}
      onClick={() => skip(direction === "back" ? -15 : 15)}
    >
      <svg
        viewBox="0 0 40 40"
        strokeWidth="3px"
        strokeLinecap={"round"}
        fill="transparent"
      >
        <motion.path
          className={`jump-${direction}`}
          d={
            direction === "back"
              ? "M 20 40 A 20 20 0 1 0 0 20 M 0 20 L 10 14 M 0 20 L -6 10"
              : "M 40 20 A 20 20 0 1 0 20 40 M 40 20 L 30 14 M 40 20 L 46 10"
          }
        />
      </svg>
      <span
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%",
          fontSize: "11px",
          color: "var(--gray-background)",
        }}
      >
        15s
      </span>
    </div>
  );
};

export default JumpButton;
