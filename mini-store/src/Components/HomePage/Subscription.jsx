import React from "react";
import {
  Button,
  Container,
  Grid,
  Input,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Subscription() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Container>
        <Grid
          container
          backgroundColor={"#272727"}
          p={{ xs: 3, md: 8 }}
          mb={5}
          alignItems={"center"}
        >
          <Grid xs={12} item md={6}>
            <Typography
              variant={isSm ? "h6" : "h5"}
              fontSize={"1rem"}
              textTransform={"uppercase"}
              letterSpacing={"2px"}
              textAlign={isSm ? "center" : "normal"}
              color={"#ffff"}
            >
              Subscribe us now
            </Typography>

            <Typography
              variant={isSm ? "subtitle2" : "subtitle1"}
              fontSize={isSm ? ".9rem" : "1.2rem"}
              textAlign={isSm ? "center" : "normal"}
              fontWeight={"200"}
              color={"#ffff"}
              mb={isSm ? 2 : 0}
            >
              Get latest news, updates and deals directly mailed to your inbox.
            </Typography>
          </Grid>
          <Grid xs={12} item md={6}>
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
                  width: "70%",
                }}
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{
                  borderRadius: "0",
                  width: "30%",
                  color: "#ffff",
                  letterSpacing: isSm ? "1px" : "2px",
                  fontSize: isSm ? ".7rem" : "1rem",
                }}
              >
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
