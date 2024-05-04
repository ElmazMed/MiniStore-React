import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export default function ContactForm() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isMd && (
        <Typography variant="h5" textTransform={"uppercase"}>
          Any questions?
        </Typography>
      )}
      {isSm && (
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          textAlign={"center"}
          mt={3}
        >
          Any questions?
        </Typography>
      )}
      {isMd && (
        <Typography variant="subtitle2" fontWeight={"300"}>
          Use the form below to get in touch with us.
        </Typography>
      )}
      {isSm && (
        <Typography variant="subtitle2" fontWeight={"300"} textAlign={"center"}>
          Use the form below to get in touch with us.
        </Typography>
      )}
      <form action="" style={{ marginTop: "2rem" }}>
        <Stack flexDirection={"row"} gap={2} mb={2}>
          <TextField label="Your full name" fullWidth required />
          <TextField label="Your full email" type="email" fullWidth required />
        </Stack>
        <Stack gap={2} mb={2}>
          <TextField label="Phone number" type="text" fullWidth required />
          <TextField label="Your Subject" type="text" fullWidth required />
          <TextField label="Your Message" type="text" fullWidth required />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          style={{
            textTransform: "uppercase",
            borderRadius: "0",
            fontWeight: "300",
            fontSize: "1rem",
            padding: ".7rem 2rem .7rem 2rem",
            letterSpacing: "2px",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
