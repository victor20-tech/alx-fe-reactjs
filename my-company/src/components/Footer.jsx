function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  '@media (min-width: 768px)': {
    footer: {
      padding: '20px',
    },
  },
};

export default Footer;