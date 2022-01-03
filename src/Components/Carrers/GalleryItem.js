import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const GalleryItem = ({ item }) => {
  // console.log(item, "sad");
  return (
    <>
      <section className="px-3.5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
          {item &&
            item.map((curr, index) => {
              return (
                <>
                  <div key={index}>
                    <GatsbyImageCustom
                      id={curr.carrers_gallery_image.asset._ref}
                      alt="img"
                      className="h-60 w-full filter hover:brightness-50 transition transform hover:scale-105 duration-700 object-cover"
                    />
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default GalleryItem;
