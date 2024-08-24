const YouTubeEmbed = ({ id }) => {
  if (!id) {
    return null;
  }

  return (
    <div className='flex-col' style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Zapraszam Was na dłuższą relację na moim kanale YouTube</p>
      </div>
      <div style={{ width: '95%', maxWidth: '1000px', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000' }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;

