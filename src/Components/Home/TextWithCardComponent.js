import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const TextWithCardComponent = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-2 border-primary rounded-lg group">
      <div className=" bg-white bg-opacity-0 transform transition shadow-bottom duration-500 group-hover:bg-secondary-orange-500 group-hover:bg-opacity-100 p-1 rounded-lg ">
        <Link to={props.homeTextWithCardLink}>
          <div className="flex flex-col justify-center items-center">
            {/* {orangeicon} */}
            <div className="flex justify-center items-center">
              <div className="h-16 w-16 hover:text-gray-50 block group-hover:hidden text-opacity-25 text-center">
                {props.homeTextWithCardicon && (
                  <GatsbyImageCustom
                    id={props.homeTextWithCardicon.asset._ref}
                    alt={props.altImage}
                  />
                )}
              </div>

              {/* {white icon} */}
              <div className="h-16 w-16 hidden group-hover:block relative text-opacity-25 text-center ">
                {props.homeTextWithCardicons && (
                  <GatsbyImageCustom
                    id={props.homeTextWithCardicons.asset._ref}
                    alt={props.altImage}
                  />
                )}
              </div>
            </div>
            <h1 className="text-lg font-bold mt-5 text-white uppercase">
              {props.homeTextWithCardTitleName}
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TextWithCardComponent;
