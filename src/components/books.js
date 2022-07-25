import BookContainer from './bookContainer';
import Forms from './forms';

const Books = () => (
  <section className="booklist">
    <div className="bookline">
      <BookContainer
        tittle="Undisputed: Last round"
        author="Franco dilorio"
        categories="History, Science, Philosophy"
      />
    </div>
    <div className="bookline">
      <BookContainer
        tittle="Harry Potter and The deathly Hallows"
        author="Jhon young"
        categories=" Science, Psicology"
      />
    </div>
    <div className="bookline">
      <BookContainer
        tittle="Passengers"
        author="Javier torrence"
        categories="History, Science, Philosophy"
      />
    </div>

    <Forms />

  </section>
);

export default Books;
