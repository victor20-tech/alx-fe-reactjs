import React, { useState } from 'react';

function Search({ onSearch, userData, loading, error }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            onSearch(username); // Call the parent function with the username
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
            {error && <p>Looks like we cant find the user</p>}
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
