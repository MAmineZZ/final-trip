// src/components/UploadForm.js
import React, { useState } from 'react';

const UploadForm = ({ handleUpload }) => {
  const [picture, setPicture] = useState(null);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload({ picture, comment, name, rating });
    // Reset form fields
    setPicture(null);
    setComment('');
    setName('');
    setRating(0);
  };

  return (
    <div>
      <h2>Upload Picture</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setPicture(e.target.files[0])} />
        <input
          type="text"
          placeholder="Place"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
