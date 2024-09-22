import React, { useState } from 'react';

function SearchUser({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            onSearch(username); // Call the parent component function with the username
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
        </div>
    );
}

export default SearchUser;
