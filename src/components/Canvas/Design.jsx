import React from "react";
import { useRef } from "react";
import DraggableComponent from "./Draggable";
import Text from "./Text";
import { downloadImage } from "./Utils";

const Design = ({
  toggleMode,
  currentMode: { value },
  updateSettings,
  settings
}) => {
  const {
    background,
    bgUrl,
    color,
    width,
    height,
    overlay,
    exportExt,
    fontSize
  } = settings;

  const capture = useRef();

  const exportPic = async () =>
    downloadImage(capture.current, width, height, exportExt);
  //   const deleteImage = imageToDelete =>
  //     updateSettings(images, deleteImageFromArray(images, imageToDelete));

  const containerStyle = {
    background,
    fontFamily: '"impact-font", sans-serif',
    width: `${width}px`,
    color,
    height: `${height}px`,
    backgroundImage: `url('${bgUrl}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: `rgba(28, 28, 28, ${overlay}) 0px 0px 0px 2000px inset`
  };

  const headingStyle = { fontSize: `${fontSize}px`, color };

  return (
    <>
      <div className="toolbar">
        <button className="download" onClick={exportPic}>
          {"💽"} Save Image
        </button>
      </div>

      <div ref={capture} className="canvas__holder">
        <div style={containerStyle} className="design__frame">
          <div className="capture">
            <DraggableComponent>
              <Text
                headingStyle={headingStyle}
                memeText="Your meme text here"
              />
            </DraggableComponent>

            <DraggableComponent>
              <Text
                headingStyle={headingStyle}
                memeText="Your meme text here"
              />
            </DraggableComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
