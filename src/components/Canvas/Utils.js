import domToImage from "dom-to-image";

export const downloadImage = (node, width, height, type = "png") => {
  const config = {
    style: {
      "transform-origin": "center"
    },
    width,
    height,
    quality: 1
  };

  const downloadFile = (dataUrl, ext) => {
    let link = document.createElement("a");    
    link.download = `Wik-@get.luusy.${ext}`;
    link.href = "data:" + dataUrl;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  domToImage.toPng(node, config).then(dataUrl => downloadFile(dataUrl, "png"));
};

export const deleteImageFromArray = (images, imageToDelete) => {
  return images.filter(image => image !== imageToDelete);
};
