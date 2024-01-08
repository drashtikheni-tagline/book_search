import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { Book } from "../types/book.type";

const booksContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
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
      if (query) fetchBooks();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const onSearch = (e: { target: { value: SetStateAction<string> } }) =>
    setQuery(e.target.value);

  return { loading, books, query, onSearch };
};

export default booksContainer;
