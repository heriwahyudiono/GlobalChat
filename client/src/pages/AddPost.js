import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleAddPost = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token tidak ditemukan');
        return;
      }

      const response = await fetch('http://localhost:5000/post/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          caption: caption,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        navigate('/home');
      } else {
        console.error('Gagal menambahkan postingan', result.message);
      }
    } catch (error) {
      console.error('Gagal menambahkan postingan', error);
    }
  };

  return (
    <div>
      <h2>Tambah Postingan</h2>
      <label>
        Caption 
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </label>
      <button onClick={handleAddPost}>Tambah Postingan</button>
    </div>
  );
};

export default AddPost;