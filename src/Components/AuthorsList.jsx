import React from "react";
import Author from "./Author";

const authorsList = ({ authors, fetchAuthors }) => {
  return (
    <div>
      {authors.map((author) => (
        <author key={author.name} author={author.id} fetchBooks={fetchBooks} />
      ))}
    </div>
  );
};

export default AuthorsList;