import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

import { Container, Typography } from "@mui/material";

import StarRateIcon from "@mui/icons-material/StarRate";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Subscription from "./Subscription";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ ...style, color: "#72AEC8" }}
      className={className}
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ ...style, color: "#72AEC8" }}
      className={className}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}
export default function ReviewsAndSubs() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Container>
        <div className="slider-container" style={{ margin: "5rem 0 5rem 0" }}>
          <Slider {...settings}>
            <div className="slide">
              <div style={{ opacity: ".2", height: "2rem" }}>
                <FormatQuoteIcon className="quoteIcon" />
              </div>
              <Typography variant="h6" gutterBottom width={"50%"}>
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi tasse morbi.”
              </Typography>
              <div style={{ display: "flex", gap: "1rem", color: "#72AEC8" }}>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </div>
              <Typography variant="subtitle2" gutterBottom>
                Mohamed El Mazgour
              </Typography>
            </div>
            <div className="slide">
              <div style={{ opacity: ".2", height: "2rem" }}>
                <FormatQuoteIcon className="quoteIcon" />
              </div>
              <Typography variant="h6" gutterBottom width={"50%"}>
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi tasse morbi.”
              </Typography>
              <div style={{ display: "flex", gap: "1rem", color: "#72AEC8" }}>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </div>
              <Typography variant="subtitle2" gutterBottom>
                Emma Chamberlin
              </Typography>
            </div>
            <div className="slide">
              <div style={{ opacity: ".2", height: "2rem" }}>
                <FormatQuoteIcon className="quoteIcon" />
              </div>
              <Typography variant="h6" gutterBottom width={"50%"}>
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi tasse morbi.”
              </Typography>
              <div style={{ display: "flex", gap: "1rem", color: "#72AEC8" }}>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </div>
              <Typography variant="subtitle2" gutterBottom>
                UserName
              </Typography>
            </div>
          </Slider>
        </div>
        <Subscription />
      </Container>
    </>
  );
}
