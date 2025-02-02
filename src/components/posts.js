import React, { useState, useEffect } from 'react';
import PostPopup from './PostPopup';
import Post from './post.js';
import './posts.css';


function Posts({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);


  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {

      });
  }, []);


  // Filter posts based on search query
  const filteredPosts = posts.filter(post => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      post?.title?.toLowerCase().includes(searchTerm) ||
      post?.text?.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="posts-wrapper">
     
        <div className="posts-container">
          {filteredPosts.map(post => (
            <div 
              key={post.title} 
              onClick={() => setSelectedPost(post)}
              className="post-item"
            >
              <Post post={post} />
            </div>
          ))}
        </div>
      {selectedPost && (
        <PostPopup 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
}

export default Posts;
