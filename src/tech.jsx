import { useState } from 'react';

function Smallbox({ word }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-block',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '500',
        width: 'fit-content',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.2s ease',
        boxShadow: isHovered ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none'
      }}
    >
      {word}
    </div>
  );
}

export default Smallbox;