import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import { useTheme } from "@emotion/react";

export default function ContactInfo() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Grid xs={12} md={6}>
          {isMd && (
            <Typography variant="h5" textTransform={"uppercase"}>
              Contact Info
            </Typography>
          )}
          {isSm && (
            <Typography
              variant="h5"
              textTransform={"uppercase"}
              textAlign={"center"}
            >
              Contact Info
            </Typography>
          )}
          {isMd && (
            <Typography variant="subtitle2" fontWeight={"300"}>
              Tortor dignissim convallis aenean et tortor at risus viverra
              adipiscing.
            </Typography>
          )}
          {isSm && (
            <Typography
              variant="subtitle2"
              fontWeight={"300"}
              textAlign={"center"}
            >
              Tortor dignissim convallis aenean et tortor at risus viverra
              adipiscing.
            </Typography>
          )}
          <Stack flexDirection={"row"} justifyContent={"space-between"} mt={5}>
            <div>
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                style={{ textDecoration: "underline" }}
                mb={2}
              >
                Office
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
                Management
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
          </Stack>
        </Grid>
        <Grid xs={12} md={5}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
}
