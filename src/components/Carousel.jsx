import React, { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const SliderCard = [
  {
    id: 1,
    url: "https://media.istockphoto.com/photos/volcanic-rock-formation-in-the-balochistan-picture-id1170068870?k=20&m=1170068870&s=612x612&w=0&h=rC6EBL-xRnuO9E4rhMMkf1OsDu7YixJRlwaIJ6_SNtI=",
  },
  {
    url: "https://media.istockphoto.com/photos/long-road-picture-id1087522914?k=20&m=1087522914&s=612x612&w=0&h=K6jSs0LwQiQXg_PXTNF7qbFgU4aApffi3Y9SKrU54Ls=",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/photos/long-road-picture-id1087519726?k=20&m=1087519726&s=612x612&w=0&h=5sN7P-PxfMhKXY3Zwnbg1sC4rIhNIgA9o_p5-gwH0F0=",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/photos/makran-coastal-highway-picture-id1340230824?k=20&m=1340230824&s=612x612&w=0&h=pxfdzbsctpdINfhaLxoW4gqedkCwMLE1wjKSxan-dxU=",
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/photos/the-summer-sun-picture-id1074932794?k=20&m=1074932794&s=612x612&w=0&h=U-BHc5XCliT7ASQUzCOncIZOuW_XioUUhPvsVE02epk=",
  },
];

export const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = SliderCard.length
  const prevHandler = () => {
    setSlide(slide === length-1 ? 0 : slide + 1 )
  }

  const nextHandler = () => {
    setSlide(slide === 0 ? length-1 : slide -1 )
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10 relative flex justify-center">
      <BsArrowRightSquareFill onClick={prevHandler} className="absolute top-[50%] text-3xl text-black cursor-pointer right-14"/>
      <BsArrowLeftSquareFill  onClick={nextHandler} className="absolute top-[50%] text-3xl text-black cursor-pointer left-14"/>
      {SliderCard.map((item, index) => (
          <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
              <img
              src={item.url}
              alt="photography"
              className="w-full rounded-md"
              />
              )}
        </div>
      ))}
    </div>
  );
};
