import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faAngleDown,
  // faAngleRight,
  // faAngleUp,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal";
import PortableText from "../CommonComponent/portableText";

const CreditAccordins = (props) => {
  // console.log(props, "creditAccordonAnswer");
  const [enable, setDisable] = useState(false);

  return (
    <>
      <Fade bottom>
        <section className="font-poppins">
          <div
            className={`text-secondary-orange-400 bg-secondary-gray-700 hover:bg-secondary-gray-700 focus:bg-secondary-gray-700 text-lg tracking-wide font-semibold rounded-t justify-between p-3 flex px-5 `}
            onClick={() => setDisable(!enable)}
          >
            <div className="font-bold">{props.creditAccordonQuestion}</div>
            <div>
              {enable ? (
                <FontAwesomeIcon icon={faMinusCircle} className="h-5 " />
              ) : (
                <FontAwesomeIcon icon={faPlusCircle} className="h-5" />
              )}
            </div>
          </div>
          <div
            className={`transition duration-1000 ease-linear ${
              enable ? "h-auto block opacity-100" : "h-0 hidden opacity-0"
            } bg-secondary-gray-700 text-gray-300 mt-1 tracking-wider shadow-md px-10 py-5`}
            // className={`transition-all duration-500 ease-out ${
            //   enable ? "h-auto py-5" : "h-0 py-0"
            // } lg:px-28 px-5  bg-gray-700 text-gray-300 lg:text-base text-sm tracking-wider  rounded-b`}
          >
            <div className="custom-list-disc">
              <PortableText blocks={props.creditAccordonAnswer} />
            </div>
            {/* {creditAccordonAnswer &&
              creditAccordonAnswer.map((aa, idx) => (
                <p
                  key={aa._key}
                  className={`transition-display  duration-500 ease-linear ${
                    enable ? "h-auto block opacity-100" : "h-0 hidden opacity-0"
                  }`}
                >
                  {aa.children[0].text && aa.children[1].text}
                </p>
              ))} */}
          </div>
        </section>
      </Fade>
    </>
  );
};

export default CreditAccordins;

// const [isactive, setIsActive] = useState(false);
// return (
//   <>
//     <div className="" key={_key}>
//       <div
//         className="bg-white shadow-md rounded justify-between p-3 flex px-5 "
//         onClick={() => setIsActive(!isactive)}
//         onKeyDown={() => setIsActive(!isactive)}
//       >
//         <div className=" font-bold text-secondary-darkpurple-500">
//           {faq_question}
//         </div>

//         <div>
//           {isactive ? (
//             <FontAwesomeIcon icon={faAngleRight} className="h-5 " />
//           ) : (
//             <FontAwesomeIcon icon={faAngleDown} className="h-5" />
//           )}
//         </div>
//       </div>

//       {isactive && (
//         <div
//           className={`transition duration-500 ease-linear ${
//             isactive ? "h-auto block opacity-100" : "h-0 hidden opacity-0"
//           } bg-white mt-1 tracking-wider shadow-md px-5 py-5`}
//         >
//           {faq_answer}
//         </div>
//       )}
//     </div>
//   </>
// );
