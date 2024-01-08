import React, { memo } from "react";
import { CardContent } from "@mui/material";
import { Book } from "../types/book.type";
import {
  EMPTY_COUNT,
  JOIN_LITERATURE,
  NOT_PROVIDED,
} from "../constants/index.constant";
import { head } from "../utils/typescript";
import BTypography from "../shared/BTypography";
import BCard from "../shared/BCard";

const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <BCard variant="outlined">
      <CardContent>
        <BTypography variant="h5" component="h3">
          {book.title}
        </BTypography>
        <BTypography variant="body1" component="p">
          Authors: {book.author_name?.join(JOIN_LITERATURE) || NOT_PROVIDED}
        </BTypography>
        <BTypography variant="body1" component="p">
          First Published: {book.first_publish_year || NOT_PROVIDED}
        </BTypography>
        <BTypography variant="body1" component="p">
          ISBN: {head(book.isbn) || NOT_PROVIDED}
        </BTypography>
        <BTypography variant="body1" component="p">
          Number of Pages: {book.number_of_pages_median || EMPTY_COUNT}
        </BTypography>
      </CardContent>
    </BCard>
  );
};

export default memo(BookDetails);
