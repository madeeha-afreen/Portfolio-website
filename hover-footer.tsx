"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const uniqueId = () =>
  `hf-${Math.random().toString(36).slice(2, 9)}`;

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const uidRef = useRef(uniqueId());
  const gid = `textGradient-${uidRef.current}`;
  const mid = `revealMask-${uidRef.current}`;
  const maskId = `textMask-${uidRef.current}`;

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskCenter, setMaskCenter] = useState({ cx: 150, cy: 50 });

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const svgRect = el.getBoundingClientRect();
    const cx = ((cursor.x - svgRect.left) / svgRect.width) * 300;
    const cy = ((cursor.y - svgRect.top) / svgRect.height) * 100;
    setMaskCenter({ cx, cy });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="0%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#7b61ff" />
              <stop offset="25%" stopColor="#a975ff" />
              <stop offset="50%" stopColor="#c4b5fd" />
              <stop offset="75%" stopColor="#a975ff" />
              <stop offset="100%" stopColor="#7b61ff" />
            </>
          )}
        </linearGradient>
        <radialGradient
          id={mid}
          gradientUnits="userSpaceOnUse"
          cx={maskCenter.cx}
          cy={maskCenter.cy}
          r="60"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id={maskId}>
          <rect x="0" y="0" width="300" height="100" fill={`url(#${mid})`} />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 text-7xl font-bold dark:stroke-neutral-800"
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          opacity: hovered ? 0.7 : 0,
        }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#7b61ff] text-7xl font-bold dark:stroke-[#7b61ff]/60"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gid})`}
        strokeWidth="0.3"
        mask={`url(#${maskId})`}
        className="fill-transparent text-7xl font-bold"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0c0a0966 50%, rgba(123, 97, 255, 0.2) 100%)",
      }}
    />
  );
};
