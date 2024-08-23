function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Company</h1>
      <p style={styles.paragraph}>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
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

export default Home;