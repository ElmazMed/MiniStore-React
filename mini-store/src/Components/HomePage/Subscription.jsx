import React from "react";
import { Button, Grid, Input, Stack, Typography } from "@mui/material";

export default function Subscription() {
  return (
    <>
      <Grid
        container
        backgroundColor={"#272727"}
        p={8}
        mb={5}
        alignItems={"center"}
      >
        <Grid xs={6}>
          <Typography
            variant="h5"
            textTransform={"uppercase"}
            letterSpacing={"2px"}
            color={"#ffff"}
          >
            Subscribe us now
          </Typography>
          <Typography variant="subtitle1" fontWeight={"200"} color={"#ffff"}>
            Get latest news, updates and deals directly mailed to your inbox.
          </Typography>
        </Grid>
        <Grid xs={6}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            style={{ display: "flex" }}
          >
            <Input
              placeholder="Your email address here"
              style={{
                backgroundColor: "#ffff",
                padding: ".5rem",
                maxWidth: "70%",
              }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{
                borderRadius: "0",
                maxWidth: "30%",
                color: "#ffff",
                letterSpacing: "2px",
              }}
            >
              Subscribe
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
