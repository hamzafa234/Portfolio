function Tall({ title, paragraph, linkText, linkUrl }) {
  
  const Style = {
    width: '505px',
    height: '400px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    padding: '20px',
    boxSizing: 'border-box' // Ensures padding doesn't increase the total width
  }
  
  return (
    <div style={Style}>
      {/* Header Section */}
      <div style={{ color: 'Black', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
        {title}
      </div>

      {/* Paragraph Section */}
      <div style={{ color: 'Black', fontSize: '14px' }}>
        {paragraph}
      </div>

      {/* Link Section - Pushed to bottom */}
      {linkUrl && (
        <div style={{ marginTop: 'auto' }}>
          <a 
            href={linkUrl} 
            style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}
          >
            {linkText || 'View on Github'} →
          </a>
        </div>
      )}
    </div>
  );
}

export default Tall;