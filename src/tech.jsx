function Smallbox({ word }) {
  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '500',
        width: 'fit-content',
        cursor: 'pointer'
      }}
    >
      {word}
    </div>
  );
}
export default Smallbox