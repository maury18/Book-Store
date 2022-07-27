import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookContainer from './bookContainer';
import Forms from './forms';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <section className="booklist">
      <div className="bookline">
        {bookList.map((book) => (
          <BookContainer
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <Forms />
    </section>
  );
};

export default Books;
