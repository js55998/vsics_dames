import React, { useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([
    "https://placekitten.com/200/300",
    "https://placekitten.com/400/300",
    "https://placekitten.com/600/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/400/300",
    "https://placekitten.com/600/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/400/300",
    "https://placekitten.com/600/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/400/300",
    "https://placekitten.com/600/300",
  ]);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Cute kitten"
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
