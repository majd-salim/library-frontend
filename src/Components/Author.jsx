import React from "react";
import { useState } from "react";
const Author = ({ author, fetchauthor }) => {
  const [name, setName] = useState(author.name);
  const [dob, setDob] = useState(author.dob);
  const [nationality, setNationality] = useState(author.nationality)

  const [editing, setEditing] = useState(false);
 
  const handleDelete = async () => {
    await fetch(`http://ec2-3-138-190-49.us-east-2.compute.amazonaws.com:3000/books${author.name}`, {
      method: "DELETE",
    }).then((res, err) => {
      console.log(res, err);
    });
    fetchAuthor();
  };
  const handleUpdate = async () => {
    fetch(`http://ec2-3-138-190-49.us-east-2.compute.amazonaws.com:3000/books${author.name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        dob,
        nationality,
      }),
    })
      .then((res) => res.json())
      .then((res) => fetchBooks());
    setEditing(!editing);
    fetchauthor
  };
  const handleEdit = async () => {
    setEditing(!editing);
    setName(author.name);
    setDob(author.dob);
    setNationality(author.nationality);
  };
  return (
    <div class="author">
      {!editing ? (
        <>
          <h3>{author.name}</h3>
          <span>
            nationality: {author.nationality} | dob :{" "}
            {author.dob}
          </span>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <label>Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={title}
          />
          <label>DOB:</label>
          <input
            onChange={(e) => {
              setDob(e.target.value);
            }}
            value={dob}
          />
          <label>Nationality:</label>
          <input
            onChange={(e) => {
              setNationality(e.target.value);
            }}
            value={nationality}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
 
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};
 
export default Author;