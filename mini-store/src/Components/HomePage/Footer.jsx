import React from "react";
import "../../App.css";

import { Container, Grid, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Container>
        <Grid container my={5}>
          <Grid xs={3}>
            <Typography variant="h4" fontWeight={"500"} mb={2}>
              MiniStore.
            </Typography>
            <Typography variant="subtitle2" fontWeight={"300"} mb={2}>
              Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
              Gravida massa volutpat aenean odio erat nullam fringilla.
            </Typography>
            <Stack display={"flex"} flexDirection={"row"} gap={2}>
              <a href="www.facebook.com" target="_blank" rel="noreferrer">
                <FacebookIcon color="primary" />
              </a>
              <a
                href="https://www.instagram.com/elmazgourmed/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon color="primary" />
              </a>
              <a href="www.x.com" target="_blank" rel="noreferrer">
                <XIcon color="primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/elmazgour/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon color="primary" />
              </a>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Typography
              variant="h6"
              textAlign={"center"}
              textTransform={"uppercase"}
              mb={2}
            >
              Quick Links
            </Typography>
            <ul
              style={{
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                textAlign: "center",
              }}
            >
              <Link style={{ textDecoration: "none" }}>
                <li>Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>About</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>Electronics</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>Contact</li>
              </Link>
            </ul>
          </Grid>
          <Grid xs={3}>
            <Typography
              variant="h6"
              textAlign={"center"}
              textTransform={"uppercase"}
              mb={2}
            >
              Help & Info
            </Typography>
            <ul
              style={{
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                textAlign: "center",
              }}
            >
              <Link style={{ textDecoration: "none" }}>
                <li>Track your order</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>Returns policies</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>Shipping policies</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>FAQs</li>
              </Link>
            </ul>
          </Grid>
          <Grid xs={3}>
            <Typography
              variant="h6"
              textAlign={"center"}
              textTransform={"uppercase"}
              mb={2}
            >
              Contact Us
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign={"center"}
              fontWeight={"300"}
              mb={2}
            >
              Do you have any queries or suggestions?
              <a href="mailto:elmazgour.med@gmail.com">
                elmazgour.med@gmail.com
              </a>
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign={"center"}
              fontWeight={"300"}
              mb={2}
            >
              If you need support? just give us a call.
              <a href="wa.link/z045ez" target="_blank">
                +212602811424
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
