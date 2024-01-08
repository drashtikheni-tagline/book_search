import { Container } from "@mui/material";
import {
  RELEVANCE,
  RELEVANCE_SORT_TITLE,
  YEAR_SORT_TITLE,
} from "../constants/book.constant";
import booksContainer from "../container/books.container";
import BButton from "../shared/BButton";
import BInput from "../shared/BInput";
import BStack from "../shared/BStack";
import { equal, ternary } from "../utils/typescript";
import BookDetails from "./Book";
import BGrid from "../shared/BGrid";
import BLoader from "../shared/BLoader";

const Books = () => {
  const { books, sortBy, loading, query, onSearch, onSortChange } =
    booksContainer();

  return (
    <BStack py={3}>
      <Container maxWidth="lg">
        <BStack
          direction="row"
          flexWrap={{ sm: "nowrap", xs: "wrap" }}
          alignItems="center"
          spacing={{ sm: 3 }}
          mb={3}
        >
          <BInput
            type="text"
            value={query}
            onChange={onSearch}
            placeholder="Search for a book..."
            fullWidth
          />
          <BButton
            variant="contained"
            color="primary"
            onClick={onSortChange}
            disabled={loading}
            sx={{
              flex: "none",
              mt: { sm: 0, xs: 2 },
              width: { sm: "auto", xs: "100%" },
            }}
          >
            {ternary(
              equal(sortBy, RELEVANCE),
              YEAR_SORT_TITLE,
              RELEVANCE_SORT_TITLE
            )}
          </BButton>
        </BStack>
        <BGrid container spacing={3}>
          {!loading ? (
            books.map((book, index) => (
              <BGrid item md={4} sm={6} xs={12} key={index}>
                <BookDetails book={book} />
              </BGrid>
            ))
          ) : (
            <BGrid item xs={12}>
              <BLoader alignItems="center" />
            </BGrid>
          )}
        </BGrid>
      </Container>
    </BStack>
  );
};

export default Books;
