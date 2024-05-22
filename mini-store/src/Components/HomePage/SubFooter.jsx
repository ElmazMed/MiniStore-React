import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SubFooter() {
  return (
    <>
      <hr style={{ opacity: ".4" }} />
      <Typography variant="subtitle2" textAlign={"center"} my={2}>
        Copyright 2024 MiniStore. Built by{" "}
        <Link
          to="https://www.linkedin.com/in/elmazgour/"
          target="_blank"
          rel="noreferrer"
        >
          El Mazgour
        </Link>
      </Typography>
    </>
  );
}
