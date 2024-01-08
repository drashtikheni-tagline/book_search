import { Grid, GridProps } from "@mui/material";
import React, { ReactNode } from "react";

interface BGridProps extends GridProps {
  children: ReactNode;
}

const BGrid: React.FC<BGridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default BGrid;
