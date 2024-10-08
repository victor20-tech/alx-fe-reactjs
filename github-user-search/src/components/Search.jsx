import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the service

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData([]);

        try {
            const users = await fetchUserData(username, location, minRepos);
            setUserData(users); // Set the fetched user data
        } catch (err) {
            setError(true); // Set error if user not found
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="p-2 border rounded"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}
            {userData.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {userData.map(user => (
                        <li key={user.id} className="border p-2 rounded">
                            <img src={user.avatar_url} alt={user.login} width="50" />
                            <h2>{user.login}</h2>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos || 'N/A'}</p>
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">View Profile</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
