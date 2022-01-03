import React, { useState, useEffect } from "react";
// import { Gallery } from "./GalleryData";
import GalleryItem from "./GalleryItem";
import GalleryList from "./GalleryList";

const GallerySection = (props) => {
  // console.log(props, "props");

  const Gallery = props.data.CareersGalleryFields;
  const allGalleryList = [
    "ALL",
    ...new Set(
      Gallery.map((xx, idx) => {
        // console.log(xx,"xx")
        return xx.carrers_gallery_title;
      })
    ),
  ];

  const [item, setItem] = useState();
  const [galleryItem, setGalleryItem] = useState();
  // const [active, setActive] = useState(false);

  useEffect(() => {
    let tempData = [];
    Gallery.forEach((element) => {
      element.CareersGalleryImagesFields.forEach((row) => {
        tempData.push({ ...row, titlegroup: element.carrers_gallery_title });
      });
    });
    setGalleryItem(tempData);
    setItem(tempData);
    // console.log(tempData, "useefftc");
  }, [Gallery]);

  // const filterGallery = (carrers_gallery_title) => {
  //   if (carrers_gallery_title === "All") {
  //     setItem(Gallery);
  //     setActive(true);
  //     return;
  //   }

  //   const UpdatedItem = Gallery.filter((xx) => {
  //     console.log(xx, "xx");
  //     return xx.carrers_gallery_title === carrers_gallery_title;
  //   });
  //   setItem(UpdatedItem);
  //   setActive(true);
  // };
  return (
    <>
      <section className="max-w-6xl mx-auto pb-16">
        <div className="px-3.5 flex justify-center items-start lg:items-center flex-col">
          <h1 className=" text-secondary-orange-400 text-4xl font-poppins font-extrabold mb-4 uppercase">
            {props.data.carrers_gallery_title_highlighted}
          </h1>
          <div className="border-t-8 border-white w-20 pb-4"></div>
          <p className="text-white text-2xl">
            {props.data.carrers_gallery_desc}
          </p>
        </div>

        {/* GALLERY List */}
        <GalleryList
          filterGallery={(value) => {
            // console.log(value, "val");
            // console.log(Gallery, "filtervalu");
            // let data = null;
            // if (value !== "ALL") {
            //   // setItem(galleryItem.filter((xx) => xx.titlegroup === value));
            //   data = galleryItem.filter((xx) => xx.titlegroup === value);
            // } else {
            //   // console.log("iamhere", galleryItem);
            //   data = galleryItem;
            // }
            setItem(
              value !== "ALL"
                ? galleryItem.filter((xx) => xx.titlegroup === value)
                : galleryItem
            );
          }}
          galleryItem={allGalleryList}
          //   active={active}
        />

        {/* Gallery Images */}
        <GalleryItem item={item} />
      </section>
    </>
  );
};

export default GallerySection;
