function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Services</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Technology Consulting</li>
        <li style={styles.listItem}>Market Analysis</li>
        <li style={styles.listItem}>Product Development</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    alignItems: 'center',
  },
  listItem: {
    fontSize: '1rem',
    color: '#666',
    padding: '10px 0',
  },
  '@media (min-width: 768px)': {
    header: {
      fontSize: '2.5rem',
    },
    listItem: {
      fontSize: '1.2rem',
    },
  },
};

export default Services;