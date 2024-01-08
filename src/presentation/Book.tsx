import React, { memo } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Book } from "../types/book.type";
import {
  EMPTY_COUNT,
  JOIN_LITERATURE,
  NOT_PROVIDED,
} from "../constants/index.constant";
import { head } from "../utils/typescript";

const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3">
          {book.title}
        </Typography>
        <Typography variant="body1" component="p">
          Authors: {book.author_name?.join(JOIN_LITERATURE) || NOT_PROVIDED}
        </Typography>
        <Typography variant="body1" component="p">
          First Published: {book.first_publish_year || NOT_PROVIDED}
        </Typography>
        <Typography variant="body1" component="p">
          ISBN: {head(book.isbn) || NOT_PROVIDED}
        </Typography>
        <Typography variant="body1" component="p">
          Number of Pages: {book.number_of_pages_median || EMPTY_COUNT}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(BookDetails);
