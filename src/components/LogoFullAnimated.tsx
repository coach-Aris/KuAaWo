"use client";

import { useId } from "react";

export default function LogoFullAnimated({ width = 540, color = "white" }: { width?: number; color?: string }) {
  const height = Math.round(width * (220 / 540));
  const reactId = useId();
  const id = `wave-grad${reactId.replace(/:/g, "")}`;

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 540 220"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-animated"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
          <clipPath id={`${id}-clip`}>
            <rect x="20" y="0" width="150" height="220" />
          </clipPath>
        </defs>

        {/* Waves */}
        <g clipPath={`url(#${id}-clip)`}>
          <g className="logo-wave-group">
            <path className="logo-wave logo-wave-1" d="M -180 50  Q -135 5,   -90 50  T 0 50  T 90 50  T 180 50  T 270 50  T 360 50" />
            <path className="logo-wave logo-wave-2" d="M -180 85  Q -135 40,  -90 85  T 0 85  T 90 85  T 180 85  T 270 85  T 360 85" />
            <path className="logo-wave logo-wave-3" d="M -180 120 Q -135 75,  -90 120 T 0 120 T 90 120 T 180 120 T 270 120 T 360 120" />
            <path className="logo-wave logo-wave-4" d="M -180 155 Q -135 110, -90 155 T 0 155 T 90 155 T 180 155 T 270 155 T 360 155" />
          </g>
        </g>

        {/* Text */}
        <g className="logo-text-group" fill={color}>
          <text x="205" y="60"  className="logo-text-line logo-text-1">KULTUR</text>
          <text x="205" y="95"  className="logo-text-line logo-text-2">VEREIN</text>
          <text x="205" y="130" className="logo-text-line logo-text-3">AARE</text>
          <text x="205" y="165" className="logo-text-line logo-text-4">WORBLAUFEN</text>
        </g>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        .logo-animated .logo-wave {
          fill: none;
          stroke: url(#${id});
          stroke-width: 14.5;
          stroke-linecap: butt;
          stroke-linejoin: round;
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: logoDrawWave 1.8s cubic-bezier(0.65, 0, 0.15, 1) forwards;
        }
        .logo-animated .logo-wave-1 { animation-delay: 0.1s; }
        .logo-animated .logo-wave-2 { animation-delay: 0.25s; }
        .logo-animated .logo-wave-3 { animation-delay: 0.4s; }
        .logo-animated .logo-wave-4 { animation-delay: 0.55s; }

        .logo-animated .logo-wave-group {
          animation: logoFlowRiver 6s linear infinite;
          animation-delay: 2.2s;
        }

        .logo-animated .logo-text-group {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 32px;
          letter-spacing: 0.8px;
        }
        .logo-animated .logo-text-line {
          opacity: 0;
          transform: translateY(15px);
        }
        .logo-animated .logo-text-1 { animation: logoFadeTextUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.9s forwards; }
        .logo-animated .logo-text-2 { animation: logoFadeTextUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 1.1s forwards; }
        .logo-animated .logo-text-3 { animation: logoFadeTextUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 1.3s forwards; }
        .logo-animated .logo-text-4 { animation: logoFadeTextUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 1.5s forwards; }

        @keyframes logoDrawWave {
          to { stroke-dashoffset: 0; }
        }
        @keyframes logoFlowRiver {
          from { transform: translateX(0); }
          to { transform: translateX(180px); }
        }
        @keyframes logoFadeTextUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </>
  );
}
