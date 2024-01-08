import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { Book, SortOption } from "../types/book.type";

const booksContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
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

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "relevance") return 0;
    else return b.first_publish_year - a.first_publish_year;
  });

  const onSearch = (e: { target: { value: SetStateAction<string> } }) =>
    setQuery(e.target.value);

  const onSortChange = (value: SortOption) => setSortBy(value);

  return { loading, books: sortedBooks, query, onSearch, onSortChange };
};

export default booksContainer;
