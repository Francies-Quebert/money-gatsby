import React, { useEffect } from "react";

const TableDataComponent = (props) => {
  useEffect(() => {
    // console.log(props.data, "fgh");
  }, [props.data]);

  return (
    <>
      {props.data && props.data.length > 0 && (
        <div>
          <table className="border-collapse border border-secondary-orange-600 text-center w-full ">
            <thead className="bg-secondary-orange-600 sticky top-0  ">
              <tr>
                <th className="border border-secondary-orange-600 w-20 p-3 ">
                  Month
                </th>
                <th className="border border-secondary-orange-600 ">
                  Opening Balance
                </th>
                <th className="border border-secondary-orange-600 ">
                  EMI Amount to Paid
                </th>
                <th className="border border-secondary-orange-600 ">
                  Interest paid during the month
                </th>
                <th className="border border-secondary-orange-600 ">
                  Principal paid during the month
                </th>
                <th className="border border-secondary-orange-600 ">
                  Closing Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((aa,idx) => {
                return (
                  <tr className="text-white"key={idx}>
                    <td className="border border-secondary-orange-600  p-3">
                      {aa.SrNo}
                    </td>
                    <td className="border border-secondary-orange-600 p-3">
                      ₹{aa.openingBalance}
                    </td>
                    <td className="border border-secondary-orange-600 p-3">
                      ₹ {aa.amountPaid}
                    </td>
                    <td className="border border-secondary-orange-600 p-3">
                      ₹ {aa.interestAmt}
                    </td>
                    <td className="border border-secondary-orange-600 p-3">
                      ₹ {aa.principalAmt}
                    </td>
                    <td className="border border-secondary-orange-600 p-3">
                      ₹{aa.closingBalance}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableDataComponent;
