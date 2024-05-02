import { Typography } from "@mui/material";
import React from "react";

export default function SubFooter() {
  return (
    <>
      <hr style={{ opacity: ".4" }} />
      <Typography variant="subtitle2" textAlign={"center"} my={2}>
        Copyright 2024 MiniStore. Built by{" "}
        <a
          href="https://www.linkedin.com/in/elmazgour/"
          target="_blank"
          rel="noreferrer"
        >
          El Mazgour
        </a>
      </Typography>
    </>
  );
}
