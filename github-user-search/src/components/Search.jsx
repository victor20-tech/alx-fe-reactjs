import React, { useState } from 'react';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUserData = async (username) => {
        try {
            const response = await axios.get(`${GITHUB_API_URL}/${username}`);
            setUserData(response.data); // Set the user data
        } catch (err) {
            setError(true); // Set error if user not found
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            setLoading(true);
            setError(false);
            setUserData(null); // Reset user data
            fetchUserData(username); // Fetch user data
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user.</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.name} width="100" />
                    <h2>{userData.name || userData.login}</h2>
                    <p>Username: {userData.login}</p>
                    <a href={userData.html_url} target="_blank" rel="noreferrer">
                        Visit GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search;
