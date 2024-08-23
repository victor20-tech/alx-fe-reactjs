function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
  },
  '@media (min-width: 768px)': {
    header: {
      fontSize: '2.5rem',
    },
    paragraph: {
      fontSize: '1.2rem',
    },
  },
};

export default About;