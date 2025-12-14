import { useState } from 'react';
function Bigbox({ title, paragraph }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      style={{
        width: '465px',
        height: '100px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div style={{ color: 'Black', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
          {title}
        </div>
        <div style={{ color: 'Black', fontSize: '14px' }}>
          {paragraph}
        </div>
      </div>
    </div>
  );
}
export default Bigbox;
