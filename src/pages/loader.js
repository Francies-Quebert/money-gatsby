import React from "react";
import loadingSpinner from "../images/loader2.gif";
// import bg_img from "../images/favicon_logo.png";
// import loadingSpinner from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "100vw",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 600,
        backgroundColor: "#FFF",
      }}
    >
      {/* <img src={bg_img}/> */}
      <img
        src={loadingSpinner}
        className="bg-logo bg-no-repeat bg-center rounded-full"
        alt="loader"
        width="150px"
        height="150px"
      />
    </div>
  );
};

export default Loader;
