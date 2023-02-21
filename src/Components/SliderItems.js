import React from "react";

const SliderItems = ({ title, image, description }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="image">
        <img src={image} alt="Hero Name" />
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default SliderItems;
