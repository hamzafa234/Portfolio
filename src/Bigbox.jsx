
function Bigbox({ title, paragraph }) {
  
  const Style = {
    width: '465px',
    height: '100px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
  }
  
  return (
    <div
      style={Style} 
    >
      <div style={{ color: 'Black', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
        {title}
      </div>
      <div style={{ color: 'Black', fontSize: '14px' }}>
        {paragraph}
      </div>
    </div>
  );
}

export default Bigbox;