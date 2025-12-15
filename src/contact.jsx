import { useState } from 'react';

function Contact({ link, image }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const buttonStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.2s ease',
    };
    
    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button style={buttonStyle}>
                <img src={image} alt="link button" style={imgStyle} />
            </button>
        </a>
    );
}
export default Contact