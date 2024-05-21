import React, { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";

export default function SideBar({ filterCategory, handleAllBtn }) {
  return (
    <>
      <Grid container flexDirection={"column"}>
        <Grid mb={5}>
          <Typography
            variant="subtitle1"
            textTransform={"uppercase"}
            style={{ textDecoration: "underline" }}
          >
            Categories
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={handleAllBtn}
            >
              All
            </Button>
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={() => {
                filterCategory("phones");
              }}
            >
              Phones
            </Button>
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={() => filterCategory("watches")}
            >
              Watches
            </Button>
          </div>
        </Grid>
        <Grid mb={5}>
          <Typography
            variant="subtitle1"
            textTransform={"uppercase"}
            style={{ textDecoration: "underline" }}
          >
            Filter by price
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button style={{ justifyContent: "flex-start" }}>
              Less than $200
            </Button>
            <Button style={{ justifyContent: "flex-start" }}>
              $200 - $300
            </Button>
            <Button style={{ justifyContent: "flex-start" }}>
              $300 - $400
            </Button>
            <Button style={{ justifyContent: "flex-start" }}>
              More than $400
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
