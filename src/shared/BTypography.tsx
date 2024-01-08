import { Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

interface BTypographyProps extends TypographyProps {
  children: ReactNode;
}

const BTypography: React.FC<BTypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default BTypography;
