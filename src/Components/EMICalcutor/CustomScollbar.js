import React from "react";

const CustomScrollBar = (props) => {
  const { contentWidth, wrapperWidth, wrapperHeight, children } = props;
  return (
    <div className=" custom-scrollbar">
      <div className="text-white">{children}</div>
    </div>
  );
};

export default CustomScrollBar;
