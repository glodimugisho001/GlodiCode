import React from "react";

const greeting = "Hello, I am Glodi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
const LandingSection = () => (
  // You should be able to implement the component with the elements imported above.
  <div className="flex justify-center items-center bg-[#2A4365] h-screen">
    <div className="flex flex-col items-center justify-center text-center ">
      <img
        src="https://i.pravatar.cc/150?img=7"
        alt="Pete's profile"
        className="w-32 h-32 rounded-full border-4 border-white mb-4"
      />
      <h2 className="text-xl font-medium text-white mb-2">{greeting}</h2>
      <h1 className="text-4xl font-bold text-white mb-2">{bio1}</h1>
      <h1 className="text-4xl font-bold text-white">{bio2}</h1>
    </div>
  </div>
);

export default LandingSection;
