import React from 'react';

function SailMark({ size = 120, color = 'white' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M95 20 C85 60 70 100 60 145 C75 130 90 115 100 100 Z" fill={color} />
      <path d="M105 5 C120 50 140 100 155 148 C135 130 115 110 100 90 Z" fill={color} />
      <path d="M45 155 C65 140 85 148 100 148 C115 148 140 138 158 152 C145 165 120 170 100 168 C80 168 58 165 45 155 Z" fill={color} />
      <path d="M40 170 Q70 160 100 165 Q130 170 162 160" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

export function LogoMark({ size = 44, className = '', color = 'white' }: LogoMarkProps) {
  return (
    <div className={className}>
      <SailMark size={size} color={color} />
    </div>
  );
}

export function LogoFull({ width = 220, color = 'white' }: { width?: number; color?: string }) {
  const markSize = Math.round(width * 0.55);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width }}>
      <SailMark size={markSize} color={color} />
      <div style={{
        color,
        fontFamily: "'Cormorant Garamond', 'Didot', 'Times New Roman', serif",
        fontSize: Math.round(width * 0.11),
        fontWeight: 300,
        letterSpacing: '0.25em',
        textTransform: 'uppercase' as const,
        marginTop: 8,
        whiteSpace: 'nowrap' as const,
      }}>
        LA VOILE CAPITAL
      </div>
      <div style={{ width: '100%', height: 1, backgroundColor: color, opacity: 0.6, marginTop: 6 }} />
    </div>
  );
}

export function LogoFooter({ width = 180, color = 'white' }: { width?: number; color?: string }) {
  return <LogoFull width={width} color={color} />;
}

export function SwissCross({ size = 20, color = 'white' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-label="Swiss Cross">
      <rect x="8" y="2" width="4" height="16" rx="0.5" fill={color} />
      <rect x="2" y="8" width="16" height="4" rx="0.5" fill={color} />
    </svg>
  );
}
