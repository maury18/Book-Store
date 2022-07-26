import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [titleInput, setBookInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const handleTitle = (e) => {
    setBookInput(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthorInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title: titleInput,
      author: authorInput,
    }));
  };

  return (
    <section className="form">
      <form className="form-container">
        <h2>ADD NEW BOOK</h2>
        <div className="formcontainer">
          <input name="title" type="text" value={titleInput} onChange={(e) => handleTitle(e)} placeholder="Book title" required />
          <input name="author" type="text" value={authorInput} onChange={(e) => handleAuthor(e)} placeholder="Author" required />
          <button type="button" onClick={handleSubmit}>Add book</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
