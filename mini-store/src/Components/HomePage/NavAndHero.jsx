import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "../../App.css";
import smartwatch from "../../Images/smartwatch-hero.png";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function NavAndHero() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {/* HERO SECTION */}
      <Stack
        style={{
          backgroundColor: "#EDF1F3",
          overflow: "hidden",
        }}
      >
        <Container>
          <Grid container alignItems="center">
            <Grid
              xs={12}
              item
              md={6}
              display={{ xs: "flex", md: "block" }}
              flexDirection={"column"}
              alignItems={"center"}
            >
              {isMd && (
                <Typography
                  variant="h2"
                  lineHeight={"1.6"}
                  fontWeight={"300"}
                  fontSize={"3.9rem"}
                  textTransform={"uppercase"}
                >
                  Your Products are great.
                </Typography>
              )}
              {isSm && (
                <Typography
                  variant="h5"
                  lineHeight={"1.6"}
                  fontWeight={"300"}
                  fontSize={"1.9rem"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  Your Products are great.
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                style={{
                  textTransform: "uppercase",
                  borderRadius: "0",
                  fontWeight: "200",
                  fontSize: "1rem",
                }}
              >
                Shop Product
              </Button>
            </Grid>
            <Grid xs={12} item md={6} marginBottom={"-3.5rem"}>
              <img
                src={smartwatch}
                alt="Smart-Watch"
                style={{ maxWidth: "90%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
