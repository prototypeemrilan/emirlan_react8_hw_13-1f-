import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";


function BlogsPage() {
    const [posts, setPosts] = useState([])
    const location = useLocation();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className="container">
            <h1>Blogs page</h1>

            <div className="newsList">
                {posts.slice(0, 10).map((post) => (
                    <div>
                        <h5>{post.title} </h5>
                        <p>{post.body.slice(0, 30)}</p>
                        <Link to={`/blogs/${post.id}`}>show</Link>
                        <div>
                            ---------------------------------------------------
                        </div>

                    </div>


                ))}


            </div>
        </div>
    );
}

export default BlogsPage;