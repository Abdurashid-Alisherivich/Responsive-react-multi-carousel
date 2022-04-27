import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import microsoft from '../Assasets/CardMicrosoft.svg';
import google from '../Assasets/CardGoogle.svg';
import slack from '../Assasets/CardSlack.svg';
import wordpress from '../Assasets/CardWordpress.svg';
import "./CardCarousel.css";

export default function Navbar() {
  const settings = {
    dots: 3,
    infinite: 1,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="cardCarouselBackgrondImage">
        <Container className="cardCarouselItem">
          <Slider {...settings}>
            <div>
              <img className="cardImgaes" style={{marginLeft: "27%"}} src={microsoft} alt="Have a image" />
            </div>
            <div>
            <img className="cardImgaes" style={{marginLeft: "27%"}} src={google} alt="Have a image" />
            </div>
            <div>
            <img className="cardImgaes" style={{marginLeft: "27%"}} src={slack} alt="Have a image" />
            </div>
            <div>
            <img className="cardImgaes" style={{marginLeft: "27%"}} src={wordpress} alt="Have a image" />
            </div>
            <div>
            <img className="cardImgaes" style={{marginLeft: "27%"}} src={slack} alt="Have a image" />
            </div>
            <div>
            <img className="cardImgaes" style={{marginLeft: "27%"}} src={slack} alt="Have a image" />
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
}
