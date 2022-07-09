import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function Blog() {
    const params = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setPost(data))

    },[])

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Blog;