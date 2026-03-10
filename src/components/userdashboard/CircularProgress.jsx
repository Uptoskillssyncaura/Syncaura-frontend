import React from "react";
import { motion } from "framer-motion";

const CircularProgress = ({
  percentage = 75,
  size = 160,
  data = null,
  strokeWidth = 25,
  progressColor = "#00E5FF",
  trackColor = "#222222",
  startAngle = -90,
  showText = true,
  label = "FINISHED",
  textColor = "#000",
  labelColor = "#9CA3AF",
  fontSize = 28,
  duration = 2,
  textSize = 15,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progressOffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center bg-[#1E1E1E] rounded-full"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: `rotate(${startAngle}deg)` }}
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Animated Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: progressOffset }}
          transition={{
            duration,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Center Text */}
      {showText && (
        <div className="absolute flex flex-col items-center">
          <span
            style={{ fontSize, color: textColor }}
            className="font-bold"
          >
            {data ?? `${percentage}%`}
          </span>
          <span
            style={{ fontSize: textSize, color: labelColor }}
            className="text-xs font-semibold"
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default CircularProgress;