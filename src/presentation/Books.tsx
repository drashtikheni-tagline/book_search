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
        <button onClick={() => onSortChange("relevance")}>
          Sort by Relevance
        </button>
        <button onClick={() => onSortChange("year")}>Sort by Year</button>
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
