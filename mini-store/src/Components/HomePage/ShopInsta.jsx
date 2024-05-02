import React, { useState } from "react";

import { Container, Grid, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import insta1 from "../../Images/insta-1.png";
import insta2 from "../../Images/insta-2.png";
import insta3 from "../../Images/insta-3.png";
import insta4 from "../../Images/insta-4.png";
import insta5 from "../../Images/insta-5.png";

import InstagramIcon from "@mui/icons-material/Instagram";

export default function ShopInsta() {
  const instaProducts = [
    {
      id: uuidv4(),
      img: insta1,
    },
    {
      id: uuidv4(),
      img: insta2,
    },
    {
      id: uuidv4(),
      img: insta3,
    },
    {
      id: uuidv4(),
      img: insta4,
    },
    {
      id: uuidv4(),
      img: insta5,
    },
  ];
  const [insta, setInsta] = useState(0);
  /* const handleMouseOver = () => {
    setInsta(0.4);
  }; */
  const handleMouseOut = () => {
    setInsta(0);
  };
  return (
    <>
      <Container>
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={5}
        >
          Shop our insta
        </Typography>
        <Grid container mb={10} justifyContent={"space-between"}>
          {instaProducts.map((product) => {
            return (
              <Grid
                xs={2}
                onMouseOut={handleMouseOut}
                position={"relative"}
                key={product.id}
                onMouseOver={() => {
                  setInsta(0.4);
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "black",
                    opacity: insta,
                    height: "97%",
                    width: "100%",
                    transition: "all .5s ease-in-out",
                  }}
                >
                  <a
                    href="https://www.instagram.com/elmazgourmed/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      style={{
                        color: "#fff",
                        position: "absolute",
                        fontSize: "2.7rem",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </a>
                </div>
                <img src={product.img} alt="" style={{ maxWidth: "100%" }} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
