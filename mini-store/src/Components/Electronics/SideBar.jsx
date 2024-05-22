import React from "react";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function SideBar({ filterCategory, filterPrice, handleAllBtn }) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid
        container
        flexDirection={isSm ? "row" : "column"}
        justifyContent={isSm ? "space-between" : "normal"}
      >
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
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={() => {
                filterPrice("< 700");
              }}
            >
              Less than $700
            </Button>
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={() => {
                filterPrice("700 - 800");
              }}
            >
              $700 - $800
            </Button>
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={() => {
                filterPrice("800 - 900");
              }}
            >
              $800 - $900
            </Button>
            <Button
              style={{ justifyContent: "flex-start" }}
              onClick={() => {
                filterPrice("");
              }}
            >
              More than $900
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
