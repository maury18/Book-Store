/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import image from '../img/progress.png';

const BookContainer = ({
  title,
  author,
  category,
  id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">

      <div className="book">
        <p className="category">{category}</p>
        <h2 className="bookname">{title}</h2>
        <h3 className="authorname">{author}</h3>
        <div className="acctionbuttons">
          <button type="button" className="comments">Comments</button>
          <button type="button" className="remove" onClick={handleRemoveBook}>Remove</button>
          <button type="button" className="comments">Edit</button>
        </div>
      </div>

      <div className="bookstatus">
        <img className="img-progress" alt="progress-circle-bar" src={image} />
        <div className="progress-procentage">
          <h2>75%</h2>
          <p>completed</p>
        </div>
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
