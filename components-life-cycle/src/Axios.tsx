import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function PostList(props: any) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch((error: unknown) => {
                console.error('Error fetching data:', error);
            });
    }, []); // runs once

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;