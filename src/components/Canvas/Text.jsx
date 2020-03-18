import React from "react";
import { Move } from "react-feather";

const Text = ({ headingStyle, memeText, size }) => (
  <div className="movable__text">
    <p className="handle">
      <Move size="18" />
    </p>
    <div
      style={{
        ...headingStyle,
        textShadow: `3px  3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000;`,
        WebkitTextStroke: '1px black'
      }}
      contentEditable
      suppressContentEditableWarning
    >
      {memeText}
    </div>
  </div>
);

export default Text;
