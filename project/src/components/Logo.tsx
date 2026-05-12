import React from 'react';

function SailMark({ size = 120, color = 'white' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Voile gauche */}
      <path d="M100 15 C90 50 72 90 58 140 C75 125 90 108 100 90 Z" fill={color} />
      {/* Voile droite (plus grande) */}
      <path d="M103 8 C118 48 138 95 152 142 C132 125 112 105 100 85 Z" fill={color} />
      {/* Coque */}
      <path d="M48 150 C65 138 83 145 100 145 C117 145 138 136 155 148 C143 162 120 168 100 167 C80 167 60 163 48 150 Z" fill={color} />
      {/* Vague */}
      <path d="M42 168 Q70 158 100 163 Q130 168 160 158" stroke={color} strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

export function LogoMark({ size = 44, className = '', color = 'white' }: LogoMarkProps) {
  return <div className={className}><SailMark size={size} color={color} /></div>;
}

export function LogoFull({ width = 220, color = 'white' }: { width?: number; color?: string }) {
  const markSize = Math.round(width * 0.6);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width }}>
      <SailMark size={markSize} color={color} />
      <div style={{
        color,
        fontFamily: "'Cormorant Garamond', 'Didot', 'Times New Roman', serif",
        fontSize: Math.round(width * 0.105),
        fontWeight: 300,
        letterSpacing: '0.3em',
        textTransform: 'uppercase' as const,
        marginTop: 10,
        whiteSpace: 'nowrap' as const,
      }}>
        LA VOILE CAPITAL
      </div>
      <div style={{ width: '100%', height: 1, backgroundColor: color, opacity: 0.5, marginTop: 7 }} />
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
