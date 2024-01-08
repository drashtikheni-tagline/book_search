import {
  RELEVANCE,
  RELEVANCE_SORT_TITLE,
  YEAR,
  YEAR_SORT_TITLE,
} from "../constants/book.constant";
import { Container } from "@mui/material";
import booksContainer from "../container/books.container";
import BButton from "../shared/BButton";
import BInput from "../shared/BInput";
import BStack from "../shared/BStack";
import BookDetails from "./Book";

const Books = () => {
  const { books, loading, query, onSearch, onSortChange } = booksContainer();

  return (
    <Container maxWidth="lg">
      <BStack direction="row" alignItems="center" spacing={3}>
        <BInput
          type="text"
          value={query}
          onChange={onSearch}
          placeholder="Search for a book..."
        />
        <BButton onClick={() => onSortChange(RELEVANCE)} disabled={loading}>
          {RELEVANCE_SORT_TITLE}
        </BButton>
        <BButton onClick={() => onSortChange(YEAR)} disabled={loading}>
          {YEAR_SORT_TITLE}
        </BButton>
      </BStack>

      {!loading ? (
        books.map((book, index) => <BookDetails book={book} key={index} />)
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
};

export default Books;
