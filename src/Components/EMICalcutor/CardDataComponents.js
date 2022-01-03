import React, { useEffect } from "react";

const CardDataComponents = (props) => {
  useEffect(() => {
    // console.log(props.data, "fgh");
  }, [props.data]);
  return (
    <>
      {props.data && props.data.length > 0 && (
        <div className="max-w-6xl mx-auto ">
          {props.data.map((aa, idx) => {
            return (
                <div className="pb-8">
              <div className="flex flex-col rounded w-full p-4 bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400">
                <div className="text-lg font-bold border-b-2 text-center p-1">
                  {aa.SrNo} Installment
                </div>
                <div className="flex justify-between pb-1">
                  <div className="text-lg font-bold">Opening Balance</div>
                  <div className="text-lg">₹ {aa.openingBalance}</div>
                </div>
                <div className="flex justify-between pb-1">
                  <div className="text-lg font-bold">Amount Paid </div>
                  <div className="text-lg">₹ {aa.amountPaid}</div>
                </div>
                <div className="flex justify-between pb-1">
                  <div className="text-lg font-bold">Interest Paid</div>
                  <div className="text-lg">₹ {aa.interestAmt}</div>
                </div>
                <div className="flex justify-between pb-1">
                  <div className="text-lg font-bold">Prinicipal Paid</div>
                  <div className="text-lg">₹ {aa.principalAmt}</div>
                </div>
                <div className="flex justify-between pb-1">
                  <div className="text-lg font-bold"> Closing Balance</div>
                  <div className="text-lg">₹ {aa.closingBalance}</div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardDataComponents;
