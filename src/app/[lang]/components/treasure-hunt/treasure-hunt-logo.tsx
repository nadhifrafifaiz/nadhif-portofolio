"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function TreasureHunt() {
  const [showCoin, setShowCoin] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCoin(true);

      // Hide the coin automatically after 10 seconds
      hideTimeoutRef.current = setTimeout(() => {
        setShowCoin(false);
      }, 10000);
    }, 3000); // 3-second hover delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleCoinClick = () => {
    alert("You found a COIN! 🎉");
    setShowCoin(false);

    // Clear the auto-hide timeout if the user clicks
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  return (
    <div className="relative flex items-center space-x-4">
      {/* Logo Text */}
      <span
        className="cursor-pointer text-3xl font-bold"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        LOGO
      </span>

      {/* Hidden Coin Text (Appears on the right & bounces up and down) */}
      {showCoin && (
        <motion.span
          className="cursor-pointer text-xl font-bold text-yellow-500"
          onClick={handleCoinClick}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          COIN
        </motion.span>
      )}
    </div>
  );
}
