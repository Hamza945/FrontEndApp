"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SlidingText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const setWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    setWidth();
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  const scrollVariants = {
    animate: {
      x: [40, -containerWidth + 100, 40],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      ref={containerRef}
      style={{ whiteSpace: "nowrap" }}
      className="w-[500px] overflow-hidden text-extrabold  tracking-tight
    bg-moniepoint-yellow rounded-[60px] text-[105px] text-moniepoint-black
    leading-[153px]"
    >
      <motion.div
        variants={scrollVariants}
        initial="animate"
        animate="animate"
        className="inline-block"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
