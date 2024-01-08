import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { Book, SortOption } from "../types/book.type";
import { RELEVANCE } from "../constants/book.constant";
import { equal } from "../utils/typescript";
import { EMPTY_COUNT } from "../constants/index.constant";

const booksContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>(RELEVANCE);
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

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

  const sortedBooks = [...books].sort((first, second) => {
    if (equal(sortBy, RELEVANCE)) return EMPTY_COUNT;
    else return second.first_publish_year - first.first_publish_year;
  });

  const onSearch = (e: { target: { value: SetStateAction<string> } }) =>
    setQuery(e.target.value);

  const onSortChange = (value: SortOption) => setSortBy(value);

  return { loading, books: sortedBooks, query, onSearch, onSortChange };
};

export default booksContainer;
