import React from "react";
import TableDataComponent from "./TableDataComponent";

const SummaryAmountSection = () => {
  return (
    <>
      <section className="mt-10 lg:mx-16 mx-6">
        <div className="text-white h-60 w-full scrollbar custom-scrollbar overflow-y-scroll  pr-1.5 ">
          <TableDataComponent />
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400 p-3 w-40 rounded font-bold  text-white">
            Apply Online
          </button>
        </div>
      </section>
    </>
  );
};

export default SummaryAmountSection;
