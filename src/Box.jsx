import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function Box({ title, paragraph, titletwo, paragraphtwo, image }) {
  const [isHovered, setIsHovered] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const contents = [
    { title, paragraph },
    { title: titletwo, paragraph: paragraphtwo },
  ];
  
  const current = contents[contentIndex];
  const textColor = image ? 'white' : 'black';
  
  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setContentIndex((prev) => (prev + 1) % contents.length);
      setIsTransitioning(false);
    }, 150);
  };
  
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'white',
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid #ccc',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '20px',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.15s ease-in-out',
        }}
      >
        <div style={{ color: textColor, fontSize: '20px', fontWeight: 'bold', marginBottom: '14px' }}>
          {current.title}
        </div>
        <div style={{ color: textColor, fontSize: '12px', textAlign: 'left' }}>
          {current.paragraph}
        </div>
      </div>
      <button
        onClick={handleArrowClick}
        style={{
          background: 'none',
          border: 'none',
          color: textColor,
          cursor: 'pointer',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default Box;