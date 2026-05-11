interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 44, className = '' }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.86)}
      viewBox="0 0 220 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M100 18 C97 35 90 60 80 85 C72 105 62 122 55 138 C68 128 80 114 90 97 C100 80 106 60 108 40 Z" fill="white" />
      <path d="M112 8 C116 28 122 55 130 80 C138 104 148 124 158 140 C150 132 140 118 132 100 C124 82 118 60 114 35 Z" fill="white" />
      <path d="M42 152 C55 142 70 148 85 144 C100 140 115 136 130 138 C145 140 158 146 172 143 C168 150 155 156 140 153 C125 150 112 147 98 150 C84 153 68 158 52 158 Z" fill="white" />
      <path d="M44 148 C60 140 78 146 96 142 C114 138 132 136 150 140 C162 143 170 147 174 144" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M48 158 C65 150 82 156 100 152 C118 148 136 147 154 151 C164 154 170 157 173 155" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55" />
    </svg>
  );
}

export function LogoFull({ width = 220 }: { width?: number }) {
  const h = Math.round(width * 0.91);
  return (
    <svg width={width} height={h} viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 36 C194 70 180 120 160 170 C144 210 124 244 110 276 C136 256 160 228 180 194 C200 160 212 120 216 80 Z" fill="white" />
      <path d="M224 16 C232 56 244 110 260 160 C276 208 296 248 316 280 C300 264 280 236 264 200 C248 164 236 120 228 70 Z" fill="white" />
      <path d="M84 304 C110 284 140 296 170 288 C200 280 230 272 260 276 C290 280 316 292 344 286 C336 300 310 312 280 306 C250 300 224 294 196 300 C168 306 136 316 104 316 Z" fill="white" />
      <path d="M88 296 C120 280 156 292 192 284 C228 276 264 272 300 280 C324 286 340 294 348 288" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M96 316 C130 300 164 312 200 304 C236 296 272 294 308 302 C328 308 340 314 346 310" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
      <text x="220" y="360" fontFamily="'Barlow', 'Arial', sans-serif" fontSize="28" fontWeight="400" fill="white" textAnchor="middle" letterSpacing="10">LA VOILE CAPITAL</text>
      <line x1="80" y1="375" x2="360" y2="375" stroke="white" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function LogoFooter({ width = 180 }: { width?: number }) {
  const h = Math.round(width * 0.53);
  return (
    <svg width={width} height={h} viewBox="0 0 440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 12 C194 36 180 70 160 106 C144 134 124 156 110 172 C136 156 160 130 180 102 C200 74 212 46 216 20 Z" fill="white" />
      <path d="M224 4 C232 28 244 60 260 92 C276 122 296 148 316 168 C300 154 280 130 264 100 C248 70 236 42 228 18 Z" fill="white" />
      <path d="M84 184 C110 170 140 180 170 174 C200 168 230 164 260 168 C290 172 316 180 344 174 C336 186 310 194 280 190 C250 186 224 182 196 186 C168 190 136 198 104 196 Z" fill="white" />
      <path d="M88 180 C120 166 156 176 192 170 C228 164 264 162 300 168 C324 172 340 178 348 174" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M96 194 C130 180 164 190 200 184 C236 178 272 177 308 183 C328 187 340 192 346 188" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
      <text x="220" y="222" fontFamily="'Barlow','Arial',sans-serif" fontSize="22" fontWeight="400" fill="white" textAnchor="middle" letterSpacing="8">LA VOILE CAPITAL</text>
      <line x1="80" y1="232" x2="360" y2="232" stroke="white" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

export function SwissCross({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="2" fill="#D0011B" />
      <rect x="8" y="4" width="4" height="12" fill="white" />
      <rect x="4" y="8" width="12" height="4" fill="white" />
    </svg>
  );
}
