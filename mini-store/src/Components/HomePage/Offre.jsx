import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import offrePhone from "../../Images/phone-offre.png";
import { useTheme } from "@emotion/react";

export default function Offre() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Stack
        style={{
          backgroundColor: "#EDF1F3",
          overflow: "hidden",
        }}
        position={"relative"}
        my={10}
      >
        <Grid container alignItems="center">
          <Grid
            xs={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
          >
            <Typography
              textTransform={"uppercase"}
              mt={{ xs: "1rem", sm: "0" }}
            >
              ― 10% off
            </Typography>
            {isMd && (
              <Typography
                style={{
                  fontSize: "3.9rem",
                  fontWeight: "300",
                  textTransform: "uppercase",
                }}
              >
                New year sale
              </Typography>
            )}
            {isSm && (
              <Typography
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  textTransform: "uppercase",
                }}
              >
                New year sale
              </Typography>
            )}
            {isMd && (
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
                Shop Sale
              </Button>
            )}
            {isSm && (
              <Button
                variant="contained"
                color="primary"
                style={{
                  textTransform: "uppercase",
                  borderRadius: "0",
                  fontWeight: "200",
                  fontSize: ".7rem",
                  marginBottom: "1rem",
                }}
              >
                Shop Sale
              </Button>
            )}
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            height={"100%"}
          >
            <img
              src={offrePhone}
              alt="Smart-Watch"
              style={{ maxWidth: "60%", marginBottom: "-40px" }}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
