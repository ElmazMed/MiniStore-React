import React from "react";
import {
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TrustBadge from "../HomePage/TrustBadge";
import "../../App.css";

import about from "../../Images/about.png";
import ReviewsAndSubs from "../HomePage/ReviewsAndSubs";
import ShopInsta from "../HomePage/ShopInsta";

function handleClick(event) {
  //   event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function About() {
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
        p={5}
      >
        <Container>
          <Typography
            variant="h3"
            textTransform={"uppercase"}
            textAlign={"center"}
            fontWeight={"300"}
          >
            About us
          </Typography>

          <div
            role="presentation"
            onClick={handleClick}
            style={{ marginTop: "1.5rem" }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Breadcrumbs
              </Link>
            </Breadcrumbs>
          </div>
        </Container>
      </Stack>
      <TrustBadge />
      <Container>
        <Grid container alignItems={"center"}>
          <Grid
            xs={12}
            md={6}
            mb={{ xs: 5 }}
            display={{ xs: "flex", md: "block" }}
            justifyContent={"center"}
          >
            <img src={about} alt="" style={{ maxWidth: "80%" }} />
          </Grid>
          <Grid
            xs={12}
            md={6}
            display={{ xs: "flex", md: "block" }}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {isMd && (
              <Typography
                variant="h5"
                textTransform={"uppercase"}
                letterSpacing={"2px"}
              >
                How was Ministore found?
              </Typography>
            )}
            {isSm && (
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                letterSpacing={"2px"}
              >
                How was Ministore found?
              </Typography>
            )}
            <Typography
              variant="subtitle2"
              mb={3}
              fontWeight={300}
              textAlign={"justify"}
            >
              Risus augue curabitur diam senectus congue velit et. Sed vitae
              metus nibh sit era. Nulla adipiscing pharetra pellentesque
              maecenas odio eros at. Et libero vulputate amet duis erat volutpat
              vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing
              pharetra pellentesque maecenas odio eros at. Quam libero etiam et
              in ac at quis.{<br />}
              {<br />} Sed vitae metus nibh sit era. Nulla adipiscing pharetra
              pellentesque maecenas odio eros at. Et libero vulputate amet duis
              erat volutpat vitae eget. Quam libero etiam et in ac at quis.
              Risus augue curabitur diam senectus congue velit et.
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
              Shop our store
            </Button>
          </Grid>
        </Grid>
      </Container>
      <ReviewsAndSubs />
      <ShopInsta />
    </>
  );
}
