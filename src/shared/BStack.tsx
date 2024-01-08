import { Stack, StackProps } from "@mui/material";
import React, { ReactNode } from "react";

interface BStackProps extends StackProps {
  children: ReactNode;
}

const BStack: React.FC<BStackProps> = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>;
};

export default BStack;
