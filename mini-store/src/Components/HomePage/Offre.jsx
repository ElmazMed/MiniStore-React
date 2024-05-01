import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import offrePhone from "../../Images/phone-offre.png";

export default function Offre() {
  return (
    <>
      <Stack
        style={{
          backgroundColor: "#EDF1F3",
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
            <Typography textTransform={"uppercase"}>― 10% off</Typography>
            <Typography
              style={{
                fontSize: "3.9rem",
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
                fontSize: "1rem",
              }}
            >
              Shop Sale
            </Button>
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
              style={{ maxWidth: "50%", marginBottom: "-29px" }}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
