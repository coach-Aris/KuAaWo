export default function LogoFull({ width = 200, color = "white" }: { width?: number; color?: string }) {
  const height = Math.round(width * 0.45);
  return (
    <svg width={width} height={height} viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Waves */}
      <path d="M10 30C35 12 50 12 75 30C100 48 115 48 140 30" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 60C35 42 50 42 75 60C100 78 115 78 140 60" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 90C35 72 50 72 75 90C100 108 115 108 140 90" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 120C35 102 50 102 75 120C100 138 115 138 140 120" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Text */}
      <text x="160" y="42" fill={color} fontFamily="'Outfit', sans-serif" fontSize="28" fontWeight="700" letterSpacing="1">KULTUR</text>
      <text x="160" y="74" fill={color} fontFamily="'Outfit', sans-serif" fontSize="28" fontWeight="700" letterSpacing="1">VEREIN</text>
      <text x="160" y="106" fill={color} fontFamily="'Outfit', sans-serif" fontSize="28" fontWeight="700" letterSpacing="1">AARE</text>
      <text x="160" y="138" fill={color} fontFamily="'Outfit', sans-serif" fontSize="28" fontWeight="700" letterSpacing="1">WORBLAUFEN</text>
    </svg>
  );
}
