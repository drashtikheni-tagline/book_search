import booksContainer from "../container/books.container";
import BookDetails from "./Book"; // Assuming the component is in the same directory

const Books = () => {
  const { books, loading, query, onSearch } = booksContainer();

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={onSearch}
        placeholder="Search for a book..."
      />

      {!loading ? (
        books.map((book, index) => <BookDetails book={book} key={index} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Books;
