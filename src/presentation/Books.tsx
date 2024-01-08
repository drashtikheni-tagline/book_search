import {
  RELEVANCE,
  RELEVANCE_SORT_TITLE,
  YEAR,
  YEAR_SORT_TITLE,
} from "../constants/book.constant";
import booksContainer from "../container/books.container";
import BookDetails from "./Book";

const Books = () => {
  const { books, loading, query, onSearch, onSortChange } = booksContainer();

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={onSearch}
        placeholder="Search for a book..."
      />

      <div>
        <button onClick={() => onSortChange(RELEVANCE)} disabled={loading}>
          {RELEVANCE_SORT_TITLE}
        </button>
        <button onClick={() => onSortChange(YEAR)} disabled={loading}>
          {YEAR_SORT_TITLE}
        </button>
      </div>

      {!loading ? (
        books.map((book, index) => <BookDetails book={book} key={index} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Books;
