import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const initialFormState = {
    title: '',
    author: '',
    category: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      category: formState.category[0],
    };

    dispatch(addBook(newBook));
  };
  return (
    <section className="form">
      <form onSubmit={submitBookToStore} className="form-container">
        <h2>ADD NEW BOOK</h2>
        <div className="formcontainer">
          <input name="title" type="text" onChange={handleChange} placeholder="Book Title" required />
          <input name="author" type="text" onChange={handleChange} placeholder="Author" required />
          <select name="category" id="categories" onChange={handleChange} required>
            <option value="">Select a category</option>
            <option value="History">History</option>
            <option value="Based on a true history">Based on a true history</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Crime">Crime</option>
            <option value="Litterature">Litterature</option>
          </select>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
