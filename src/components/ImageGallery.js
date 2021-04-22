import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from './ImageGalleryItem.js';

const ImageGallery = ({images, onClick}) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            onClick={() => onClick(largeImageURL)}
          />
        );
      })}
    </ul>
  )
}

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;