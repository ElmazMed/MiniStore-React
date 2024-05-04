import { Box, Container, Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import React from "react";

export default function TrustBadge() {
  return (
    <>
      <Container>
        <Grid container my={10}>
          <Grid
            item
            xs={12}
            sm={3}
            display={{ xs: "flex" }}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "baseline" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <LocalShippingOutlinedIcon color="secondary" />
              <Typography
                variant="subtitle1"
                textTransform={"uppercase"}
                color="primary"
              >
                Free delivery
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              gutterBottom
              color="gray"
              mr={{ sm: 13 }}
              mb={{ xs: 2 }}
            >
              Consectetur adipi elit lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={3}
            display={{ xs: "flex" }}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "baseline" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <VerifiedOutlinedIcon color="secondary" />
              <Typography
                textTransform={"uppercase"}
                variant="subtitle1"
                color="primary"
              >
                Quality guarantee
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              gutterBottom
              color="gray"
              mr={{ sm: 13 }}
              mb={{ xs: 2 }}
            >
              Dolor sit amet orem ipsu mcons ectetur adipi elit.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={3}
            display={{ xs: "flex" }}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "baseline" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <LoyaltyOutlinedIcon color="secondary" />
              <Typography
                textTransform={"uppercase"}
                variant="subtitle1"
                color="primary"
              >
                Daily offers
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              gutterBottom
              color="gray"
              mr={{ sm: 13 }}
              mb={{ xs: 2 }}
            >
              Amet consectetur adipi elit loreme ipsum dolor.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={3}
            display={{ xs: "flex" }}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "baseline" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <GppGoodOutlinedIcon color="secondary" />

              <Typography
                textTransform={"uppercase"}
                variant="subtitle1"
                color="primary"
              >
                100% secure payment
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              gutterBottom
              color="gray"
              mr={{ sm: 13 }}
              mb={{ xs: 2 }}
            >
              Rem Lopsum dolor sit amet, consectetur adipi elit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
