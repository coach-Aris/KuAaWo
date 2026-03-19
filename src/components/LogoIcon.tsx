export default function LogoIcon({ size = 48, color = "white" }: { size?: number; color?: string }) {
  const height = Math.round(size * 0.83);
  return (
    <svg width={size} height={height} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 25C30 10 40 10 60 25C80 40 90 40 110 25" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 50C30 35 40 35 60 50C80 65 90 65 110 50" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 75C30 60 40 60 60 75C80 90 90 90 110 75" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
