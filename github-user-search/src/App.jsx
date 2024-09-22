import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUserData(null); // Reset user data

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set the fetched user data
    } catch (err) {
      setError(true); // Set error if user not found
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search Application</h1>
      <Search
        onSearch={handleSearch}
        userData={userData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
