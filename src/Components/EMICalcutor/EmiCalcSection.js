// import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-google-charts";
import CardDataComponents from "./CardDataComponents";
import TableDataComponent from "./TableDataComponent";
import img from "../../images/looking-loan.png";
// import img from "../../images/calc-img.svg";
// import img from "../../images/emi-calc.png";
import { Link } from "gatsby";
import axios from "contentful-management/node_modules/axios";

const EmiCalcSection = () => {
  // const pdfRef = useRef();
  const [calcData, setCalcData] = useState({
    loanAmount: 0,
    interestPerc: 0,
    loanTenure: 0,
    loanTenureMonths: 0,
    totalEMI: 0,
    totalInterest: 0,
    totalPayment: 0,
    tableData: [],
  });
  const [pieData, setPieData] = useState([]);
  // const [pdfData, setPdfData] = useState();

  function Calculate() {
    const PrincipalAmount = parseFloat(calcData.loanAmount);
    const RateOfInterest = parseFloat(calcData.interestPerc) / 12 / 100;
    const Tenure = parseFloat(calcData.loanTenure * 12);
    // console.log(Tenure, "tenure");
    const topCalc = Math.pow(1 + RateOfInterest, Tenure);
    const bottomCalc = topCalc - 1;
    const divCalc = topCalc / bottomCalc;
    const EMI = parseFloat(PrincipalAmount * RateOfInterest * divCalc).toFixed(
      2
    );

    let loanData = [];
    let baseAmount = calcData.loanAmount;
    let interestRate = calcData.interestPerc;
    let EMIAmount = EMI;
    let tempTotalIntrest = 0;

    let i = 1;
    for (i === 1; i <= calcData.loanTenure * 12; i++) {
      let interestAmount = (baseAmount * (interestRate / 12)) / 100;
      loanData.push({
        SrNo: i,
        openingBalance: parseFloat(baseAmount).toFixed(2),
        principalAmt: parseFloat(EMIAmount - interestAmount).toFixed(2),
        interestAmt: parseFloat(interestAmount).toFixed(2),
        closingBalance: parseFloat(
          baseAmount - (EMIAmount - interestAmount)
        ).toFixed(2),
        amountPaid: parseFloat(EMI + interestAmount).toFixed(2),
      });
      // console.log(interestAmount, tempTotalIntrest, "interestAmount");
      baseAmount -= parseFloat(EMIAmount - interestAmount).toFixed(2);
      tempTotalIntrest += parseFloat(interestAmount);
    }
    const Payment = PrincipalAmount + tempTotalIntrest;
    setCalcData({
      ...calcData,
      totalEMI: EMI,
      tableData: loanData,
      totalInterest: parseFloat(tempTotalIntrest).toFixed(2),
      totalPayment: parseFloat(Payment).toFixed(2),
    });
  }

  const downloadPdf = () => {
    // fileDownload(
    //   res.data,
    //   `${data.SaleHdr.VoucherNo}.${dataType}`
    // );

    // const PrincipalAmount = parseFloat(calcData.loanAmount);
    // const RateOfInterest = parseFloat(calcData.interestPerc) / 12 / 100;
    // const Tenure = parseFloat(calcData.loanTenure * 12);
    // // console.log(Tenure, "tenure");
    // const topCalc = Math.pow(1 + RateOfInterest, Tenure);
    // const bottomCalc = topCalc - 1;
    // const divCalc = topCalc / bottomCalc;
    // const EMI = parseFloat(PrincipalAmount * RateOfInterest * divCalc).toFixed(
    //   2
    // );
    // let loanData = [];
    // let baseAmount = calcData.loanAmount;
    // let interestRate = calcData.interestPerc;
    // let EMIAmount = EMI;
    // let tempTotalIntrest = 0;

    // let i = 1;
    // for (i === 1; i <= calcData.loanTenure * 12; i++) {
    //   let interestAmount = (baseAmount * (interestRate / 12)) / 100;
    //   loanData.push({
    //     SrNo: i,
    //     openingBalance: parseFloat(baseAmount).toFixed(2),
    //     principalAmt: parseFloat(EMIAmount - interestAmount).toFixed(2),
    //     interestAmt: parseFloat(interestAmount).toFixed(2),
    //     closingBalance: parseFloat(
    //       baseAmount - (EMIAmount - interestAmount)
    //     ).toFixed(2),
    //     amountPaid: parseFloat(EMI + interestAmount).toFixed(2),
    //   });

    //   baseAmount -= parseFloat(EMIAmount - interestAmount).toFixed(2);
    //   tempTotalIntrest += parseFloat(interestAmount);
    // }

    console.log(calcData.tableData, "loanData");

    axios
      .post("http://192.168.0.176:3010/html-reports/getReportMoneyTickEmi", {
        data: calcData.tableData,
      })
      .then((response) => {
        if (response && response.data) {
          openPDF(response);
          // setPdfData(response.data);

          // pdfRef.current.click();
          // navigate(`/thank-you?form=${"feedback"}`);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    const data = [
      { name: "Interest", value: `${calcData.totalInterest}` },
      { name: "Principal Amount", value: `${calcData.loanAmount}` },
    ];
    let tempPieData = [];
    data.map((aa) => {
      return tempPieData.push([aa.name, parseFloat(aa.value)]);
    });
    if (tempPieData.length > 0) {
      setPieData([...tempPieData]);
    }
  }, [calcData || calcData.loanAmount]);

  function openPDF(resData) {
    // console.log(resData,"resData")
    
    var ieEDGE = navigator.userAgent.match(/Edge/g);
    var ie = navigator.userAgent.match(/.NET/g); // IE 11+
    var oldIE = navigator.userAgent.match(/MSIE/g); 
    
    // var bytes = new Uint8Array(resData.data); //use this if data is raw bytes else directly pass resData
    var blob = new window.Blob([resData.data], { type: 'application/pdf' });
    // var text = new window.Response(blob).text();
    console.log(blob,"blob")

    if (ie || oldIE || ieEDGE) {
       window.navigator.msSaveBlob(blob);
    }
    else {
       var fileURL = URL.createObjectURL(blob);
       console.log(fileURL,"fileUrl")
       var win = window.open();
       win.document.write('<iframe src="data:base64' + fileURL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')

    }
}

  const downloadFile = (downloadedFile) => {
    console.log(downloadedFile, ":downloadedFile");
    var downloadLink = document.createElement("a");
    downloadLink.target = "_blank";
    downloadLink.download = "test.pdf";
    var blob = new Blob([downloadedFile.data], { type: "application/pdf" });
    var URL = window.URL || window.webkitURL;
    var downloadUrl = URL.createObjectURL(blob);
    downloadLink.href = downloadUrl;
    document.body.append(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <>
      {/* {console.log(pdfData, "data")} */}
      {/* {pdfData && <a href={pdfData} download ref={pdfRef} className="hidden" />} */}
      <div className="max-w-6xl mx-auto">
        <section className="mt-10">
          <div className="text-white">
            <div className="font-bold rounded flex flex-col justify-center items-center">
              <h1 className="text-center text-4xl font-bold text-secondary-orange-400 pb-2">
                EMI Calculator
              </h1>
              <div className="border-t-8 border-white w-40"></div>
            </div>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 mt-10">
              <div className="space-y-8 px-3.5">
                <div className="flex justify-between">
                  <h1>Loan amount</h1>
                  <input
                    type="text"
                    // value={calcData.loanAmount}
                    placeholder={"Enter Loan Amount"}
                    className="shadow-bottom transition duration-500 bg-gray-400 placeholder-secondary-blue-300 text-center font-bold rounded-lg py-1 focus:outline-none w-40 lg:w-48 text-sm"
                    onChange={(e) => {
                      setCalcData({
                        ...calcData,
                        loanAmount: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <h1>Rate of interest (p.a)</h1>
                  <input
                    type="text"
                    // value={calcData.interestPerc}
                    placeholder={"Enter Rate of Interest"}
                    className="shadow-bottom transition duration-500 bg-gray-400 placeholder-secondary-blue-300 text-center font-bold rounded-lg py-1 focus:outline-none w-40 lg:w-48 text-sm"
                    onChange={(e) => {
                      setCalcData({
                        ...calcData,
                        interestPerc: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <h1>Loan tenure (Yrs)</h1>
                  <input
                    type="text"
                    // value={calcData.loanTenure}
                    placeholder={"Enter Loan Tenure"}
                    className="shadow-bottom transition duration-500 bg-gray-400 placeholder-secondary-blue-300 text-center font-bold rounded-lg py-1 focus:outline-none w-40 lg:w-48 text-sm"
                    onChange={(e) => {
                      setCalcData({
                        ...calcData,
                        loanTenure: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <h1>Loan tenure (Months)</h1>
                  <input
                    type="text"
                    value={calcData.loanTenure * 12}
                    placeholder={"Enter Loan Tenure"}
                    className="shadow-bottom transition duration-500 bg-gray-400 placeholder-secondary-blue-300 text-center font-bold rounded-lg py-1 focus:outline-none w-40 lg:w-48 text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <div className="flex justify-center">
                    <button
                      className="bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400 hover:from-secondary-orange-400 hover:to-secondary-orange-600 font-bold px-4 py-2 rounded shadow-bottom transition duration-500 w-48"
                      onClick={() => {
                        Calculate();
                      }}
                    >
                      Calculate
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between py-2.5">
                    <div cclassName="text-white">Monthly EMI</div>
                    <div className="text-gray-400 font-semibold">
                      ₹ {calcData.totalEMI}
                    </div>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <div cclassName="text-white">Principal Amount</div>
                    <div className="text-gray-400 font-semibold">
                      ₹ {calcData.loanAmount}
                    </div>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <div cclassName="text-white">Total Interest</div>
                    <div className="text-gray-400 font-semibold">
                      ₹ {calcData.totalInterest}
                    </div>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <div className="text-white">Total Amount</div>
                    <div className="text-gray-400 font-semibold">
                      ₹ {calcData.totalPayment}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center flex flex-col items-center px-3.5">
                <div className="self-center block m-auto w-full h-auto">
                  <Chart
                    chartType="PieChart"
                    data={[["Interest", "Principal Amount"], ...pieData]}
                    options={{
                      legend: {
                        textStyle: { color: "#ffffff", fontSize: 13 },
                        className: "flex justify-center items-center",
                      },
                      backgroundColor: "none",
                      chartArea: { width: "100%", height: "100%" },
                      pieHole: 0.5,
                    }}
                    legendToggle
                  />
                </div>
              </div>
              <div className="flex-col flex justify-center items-center px-3.5">
                <div>
                  <img src={img} alt="looking-loan" />
                </div>
                <div className="text-2xl font-bold text-secondary-orange-400 mt-4">
                  Looking for Loan ?
                </div>
                <div className="text-base text-white">
                  Contact us now and get solution
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-center mt-10">
                    <Link to="/contact-us">
                      <button className="bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400 p-3 rounded font-bold  text-white">
                        Apply Online
                      </button>
                    </Link>
                  </div>
                  <div className="text-center mt-10">
                    {/* <a href={`${downloadFile}`} download> */}
                      <button
                        className="bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400 p-3 rounded font-bold  text-white"
                        onClick={() => downloadPdf()}
                      >
                        Download EMI Chart
                      </button>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center">
          <div className="py-10">
            <div className="bg-secondary-orange-600 font-bold rounded p-2 w-60 text-white text-center">
              Break-up of Loan Amount
            </div>
          </div>
        </div>

        {calcData.tableData.length > 0 && (
          <div className="text-white h-80 scrollbar custom-scrollbar overflow-y-scroll overflow-x-scroll lg:overflow-x-hidden pr-1.5 mt-10 mx-6 hidden md:block">
            <TableDataComponent data={calcData.tableData} />
          </div>
        )}
        {calcData.tableData.length > 0 && (
          <div className="text-white pr-1.5 mt-10 mx-6 block md:hidden">
            <CardDataComponents data={calcData.tableData} />
          </div>
        )}
      </div>
    </>
  );
};

export default EmiCalcSection;
