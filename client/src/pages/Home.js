import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      fetchPosts();
    }
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/post/all", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const result = await response.json();
      if (result.success) {
        setPosts(result.data);
      } else {
        console.error("Gagal mendapatkan postingan", result.message);
      }
    } catch (error) {
      console.error("Gagal mendapatkan postingan", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const result = await response.json();
      if (result.success) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Gagal logout", result.message);
      }
    } catch (error) {
      console.error("Gagal logout", error);
    }
  };

  const handleAddPost = () => {
    navigate("/add-post");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleAddPost}>Add Post</button>
      <button onClick={handleLogout}>Logout</button>

      <h2>Posts</h2>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.name}</h3>
              <p>{post.caption}</p>
              <small>{new Date(post.created_at).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
