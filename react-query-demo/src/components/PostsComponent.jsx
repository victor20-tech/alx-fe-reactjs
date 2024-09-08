import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, isError, refetch, isFetching } = useQuery('posts', fetchPosts, {
        cacheTime: 1000 * 60 * 5, // 5 minutes
        staleTime: 1000 * 60 * 1, // 1 minute
        refetchOnWindowFocus: false, // Disable refetch on window focus
        keepPreviousData: true, // Keep the previous data during refetching
    });

    if (isLoading || isFetching) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data: {error.message}</p>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch}>Refetch Posts</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
