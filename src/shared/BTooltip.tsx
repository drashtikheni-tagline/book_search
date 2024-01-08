import { Tooltip, TooltipProps } from "@mui/material";
import React, { ReactElement } from "react";

interface BTooltipProps extends TooltipProps {
  children: ReactElement;
}

const BTooltip: React.FC<BTooltipProps> = ({ children, ...props }) => {
  return <Tooltip {...props}>{children}</Tooltip>;
};

export default BTooltip;
