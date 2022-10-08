import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";
import React from "react";

export default function GalleryCarousel(datas) {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows={true}
    >
      {datas.datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.alt} />
        </div>
      ))}
    </Carousel>
  );
}
