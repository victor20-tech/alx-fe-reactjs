import React, { useState } from 'react';
import SearchUser from './components/SearchUser';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUserData(null); // Reset the user data

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set the fetched user data
    } catch (err) {
      setError(true); // Set error if user is not found
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search Application</h1>
      <SearchUser onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
