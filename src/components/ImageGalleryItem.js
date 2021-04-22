import React from "react";

const ImageGalleryItem = ({ id, src, alt, largeImageUrl, onClick }) => {

    return (
      <li
        className="ImageGalleryItem"
        key = {id}
      >
        <img
          onClick={onClick}
          src={src}
          alt={alt}
          className="ImageGalleryItem-image"
          data-source={largeImageUrl}
        />
      </li>
    );
  }

export default ImageGalleryItem;