import React, { useState } from "react";

const AddBookForm = ({ fetchBooks }) => {
  const [title, setTitle] = useState("");
  // Add more states for other book attributes

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://ec2-3-138-190-49.us-east-2.compute.amazonaws.com:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }), // Include other book attributes
    });
    fetchBooks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {/* Add more input fields for other book attributes */}
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;