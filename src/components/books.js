import { useSelector } from 'react-redux';
import BookContainer from './bookContainer';
import Forms from './forms';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <section className="booklist">
      <div className="bookline">
        {bookList.map((book) => (
          <BookContainer
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            categories={book.category}
          />
        ))}
      </div>
      <Forms />
    </section>
  );
};

export default Books;
