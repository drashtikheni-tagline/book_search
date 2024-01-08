import { Card, CardProps } from "@mui/material";
import React, { ReactNode } from "react";

interface BCardProps extends CardProps {
  children: ReactNode;
}

const BCard: React.FC<BCardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export default BCard;
