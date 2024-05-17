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
            {isMd && (
              <Typography
                variant="h5"
                textTransform={"uppercase"}
                letterSpacing={"2px"}
                color={"#ffff"}
              >
                Subscribe us now
              </Typography>
            )}
            {isSm && (
              <Typography
                variant="h6"
                fontSize={"1rem"}
                textTransform={"uppercase"}
                letterSpacing={"2px"}
                textAlign={"center"}
                color={"#ffff"}
              >
                Subscribe us now
              </Typography>
            )}
            {isMd && (
              <Typography
                variant="subtitle1"
                fontWeight={"200"}
                color={"#ffff"}
              >
                Get latest news, updates and deals directly mailed to your
                inbox.
              </Typography>
            )}
            {isSm && (
              <Typography
                variant="subtitle2"
                fontSize={".9rem"}
                textAlign={"center"}
                fontWeight={"200"}
                color={"#ffff"}
                mb={2}
              >
                Get latest news, updates and deals directly mailed to your
                inbox.
              </Typography>
            )}
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
              {isMd && (
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{
                    borderRadius: "0",
                    width: "30%",
                    color: "#ffff",
                    letterSpacing: "2px",
                  }}
                >
                  Subscribe
                </Button>
              )}
              {isSm && (
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{
                    borderRadius: "0",
                    width: "30%",
                    color: "#ffff",
                    letterSpacing: "1px",
                    fontSize: ".7rem",
                  }}
                >
                  Subscribe
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
