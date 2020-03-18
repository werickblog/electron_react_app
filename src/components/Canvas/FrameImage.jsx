import React from "react";
import { Move } from "react-feather";
import DraggableComponent from "./Draggable";

const FrameImage = ({ image, deleteImage }) => {
  return (
    <DraggableComponent key={image}>
      <div className="movable__content">
        <p className="handle">
          <Move size="18" />
        </p>
        <img
          src={image}
          alt=""
          className="frame-image"
          onClick={() => deleteImage(image)}
          draggable={false}
        />
      </div>
    </DraggableComponent>
  );
};

export default FrameImage;
