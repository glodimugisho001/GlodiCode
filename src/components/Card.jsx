
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="bg-white rounded-lg space-y-4">
      <img src={imageSrc} alt="" className="rounded-lg"/>
      <div className="flex flex-col justify-between items-start p-4 space-y-2">
        <h3 className="text-2xl font-bold">{title} </h3>
        <p>{description}</p>
        <p className="text-[#14532d] text-lg font-semibold flex items-center space-x-2 cursor-pointer">
          <span>See more </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-[#14532d] text-2xl" />
        </p>
      </div>
    </div>
  );
};

export default Card;
