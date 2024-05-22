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
            item
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

            <Typography
              style={{
                fontSize: isSm ? "1.3rem" : "3.9rem",
                fontWeight: "300",
                textTransform: "uppercase",
              }}
            >
              New year sale
            </Typography>

            <Button
              variant="contained"
              color="primary"
              style={{
                textTransform: "uppercase",
                borderRadius: "0",
                fontWeight: "200",
                fontSize: isSm ? ".7rem" : "1rem",
                marginBottom: isSm ? "1rem" : "0",
              }}
            >
              Shop Sale
            </Button>
          </Grid>
          <Grid
            xs={6}
            item
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
