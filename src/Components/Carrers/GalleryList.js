import React, { useState } from "react";

const GalleryList = ({ filterGallery, galleryItem }) => {
  // console.log( galleryItem, "galleryItem");
  const [active, setActive] = useState("ALL");
  return (
    <>
      <div className="text-white text-center space-x-0 lg:space-x-3 font-bold text-sm px-3.5 py-10 grid lg:block grid-cols-2 gap-4">
        {galleryItem.map((curEle, index) => {
          return (
            <button
              className={`hover:text-white border border-secondary-orange-400 transition duration-700 px-6 py-2 focus:outline-none rounded
                ${
                  active === curEle
                    ? `bg-secondary-orange-400`
                    : `hover:bg-secondary-orange-400`
                }`}
              key={index}
              onClick={() => {
                filterGallery(curEle);
                setActive(curEle);
              }}
            >
              {curEle}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default GalleryList;
