import React from "react";
import { carouselDataInterface } from "@/utils/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const carouselData: Array<carouselDataInterface> = [
    {
      id: 1,
      image: "./user-cover-1.png",
      name: "Alice Johnson",
      profession: "Graphic Designer",
      socialMedia: {
        facebook: "/alice.facebook",
        instagram: "/alice.instagram",
        twitter: "/alice.twitter",
      },
    },
    {
      id: 2,
      image: "./user-cover-2.png",
      name: "Bob Smith",
      profession: "Web Developer",
      socialMedia: {
        facebook: "/bob.facebook",
        instagram: "/bob.instagram",
        twitter: "/bob.twitter",
      },
    },
    {
      id: 3,
      image: "./user-cover-3.png",
      name: "Charlie Brown",
      profession: "Photographer",
      socialMedia: {
        facebook: "/charlie.facebook",
        instagram: "/charlie.instagram",
        twitter: "/charlie.twitter",
      },
    },
    {
      id: 4,
      image: "./user-cover-4.png",
      name: "David Lee",
      profession: "Marketing Manager",
      socialMedia: {
        facebook: "/david.facebook",
        instagram: "/david.instagram",
        twitter: "/david.twitter",
      },
    },
    {
      id: 5,
      image: "./user-cover-2.png",
      name: "Eva Miller",
      profession: "Content Writer",
      socialMedia: {
        facebook: "/eva.facebook",
        instagram: "/eva.instagram",
        twitter: "/eva.twitter",
      },
    },
    {
      id: 6,
      image: "./user-cover-1.png",
      name: "Frank Johnson",
      profession: "UI/UX Designer",
      socialMedia: {
        facebook: "/frank.facebook",
        instagram: "/frank.instagram",
        twitter: "/frank.twitter",
      },
    },
    {
      id: 7,
      image: "./user-cover-3.png",
      name: "Grace Williams",
      profession: "Software Engineer",
      socialMedia: {
        facebook: "/grace.facebook",
        instagram: "/grace.instagram",
        twitter: "/grace.twitter",
      },
    },
  ];

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <CarouselCard key={item.id} {...item} />
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
