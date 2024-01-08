import axios from "axios";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { RELEVANCE, YEAR } from "../constants/book.constant";
import { EMPTY_COUNT } from "../constants/index.constant";
import { Book, SortOption } from "../types/book.type";
import { equal, ternary } from "../utils/typescript";

const booksContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>(RELEVANCE);
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [sortedBooks, setSortedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/search.json?q=${query}`
      );
      setBooks(response.data.docs);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchBooks();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const sortedBooks = [...books].sort((first, second) => {
      if (equal(sortBy, RELEVANCE)) return EMPTY_COUNT;
      else return second.first_publish_year - first.first_publish_year;
    });
    setSortedBooks(sortedBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, JSON.stringify(books)]);

  const onSearch = (e: { target: { value: SetStateAction<string> } }) =>
    setQuery(e.target.value);

  const onSortChange = useCallback(
    () =>
      setSortBy((sortBy) => ternary(equal(sortBy, RELEVANCE), YEAR, RELEVANCE)),
    []
  );

  return { loading, books: sortedBooks, sortBy, query, onSearch, onSortChange };
};

export default booksContainer;
