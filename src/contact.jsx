function Contact({ link, image }) {
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
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button style={buttonStyle}>
                <img src={image} alt="link button" style={imgStyle} />
            </button>
        </a>
    );
}
export default Contact