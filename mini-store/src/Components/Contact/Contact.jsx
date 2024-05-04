import React from "react";
import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContactInfo from "./ContactInfo";
import about from "../../Images/about.png";
import Subscription from "../HomePage/Subscription";
import ShopInsta from "../HomePage/ShopInsta";

function handleClick(event) {
  //   event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Contact() {
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
        mb={10}
      >
        <Container>
          <Typography
            variant="h3"
            textTransform={"uppercase"}
            textAlign={"center"}
            fontWeight={"300"}
          >
            Contact us
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
      <Container>
        <ContactInfo />

        <Grid container alignItems={"center"} mt={20} mb={10}>
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
                Our stores
              </Typography>
            )}
            {isSm && (
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                letterSpacing={"2px"}
              >
                our stores
              </Typography>
            )}
            <Typography
              variant="subtitle2"
              mb={3}
              fontWeight={300}
              textAlign={"justify"}
            >
              You can also directly buy products from our stores.
            </Typography>

            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              mt={5}
            >
              <div>
                <Typography
                  variant="h6"
                  textTransform={"uppercase"}
                  style={{ textDecoration: "underline" }}
                  mb={2}
                >
                  Usa
                </Typography>
                <Typography
                  variant="subtitle2"
                  textTransform={"uppercase"}
                  fontSize={".8rem"}
                >
                  730 Glenstone Ave 65802, Springfield, US
                </Typography>
                <Typography variant="subtitle2" textTransform={"uppercase"}>
                  +212 62811424
                </Typography>
                <Typography variant="subtitle2" textTransform={"uppercase"}>
                  +212 62811424
                </Typography>
                <Typography variant="subtitle2">
                  elmazgour.med@gmail.com
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  textTransform={"uppercase"}
                  style={{ textDecoration: "underline" }}
                  mb={2}
                >
                  France
                </Typography>
                <Typography
                  variant="subtitle2"
                  textTransform={"uppercase"}
                  fontSize={".8rem"}
                >
                  13 Rue Montmartre 75001, Paris, France
                </Typography>
                <Typography variant="subtitle2" textTransform={"uppercase"}>
                  +212 62811424
                </Typography>
                <Typography variant="subtitle2" textTransform={"uppercase"}>
                  +212 62811424
                </Typography>
                <Typography variant="subtitle2">
                  elmazgour.med@gmail.com
                </Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>

        <Subscription />
        <div style={{ marginTop: "7rem" }}></div>
        <ShopInsta />
      </Container>
    </>
  );
}
