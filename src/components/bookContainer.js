/* eslint-disable react/prop-types */
import React from 'react';

const BookContainer = (props) => {
  const { tittle, author, categories } = props;

  return (
    <div className="book-container">

      <div className="book">
        <p className="category">{categories}</p>
        <h2 className="bookname">{tittle}</h2>
        <h3 className="authorname">{author}</h3>
        <div className="acctionbuttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="bookstatus">
        <i className="fa-solid fa-spinner" />
        <h2>75% completed</h2>
      </div>

      <div className="bookchapter">
        <h2>Current chapter:</h2>
        <h3>Chapter: 7</h3>
        <button type="button" className="progress">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

export default BookContainer;
