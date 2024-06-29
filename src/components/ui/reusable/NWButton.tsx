import { Button, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  sx?: SxProps;
};

const NWButton = ({ children, sx }: TButtonProps) => {
  return (
    <Button
      sx={{
        background: "linear-gradient(45deg, #674cc4 30%, #9578e6 90%)",
        border: 0,
        borderRadius: 3,
        color: "#fff",
        boxShadow: "0 3px 5px 2px rgba(103, 76, 196, .3)",
        padding: "12px 30px",
        textTransform: "none",
        transition:
          "background-color 1s ease-in-out, box-shadow 4s ease-in-out",
        "&:hover": {
          background: "linear-gradient(45deg, #9578e6 30%, #674cc4 90%)",
          boxShadow: "0 6px 10px 4px rgba(103, 76, 196, .3)",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default NWButton;
