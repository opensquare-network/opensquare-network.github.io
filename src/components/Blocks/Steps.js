import React from "react";
import StepIcon from "./step.svg";
import StepIconX from "./step-x.svg";

export default function Steps() {
  return (
    <div className="w-full md:w-1080px md:m-auto md:flex">
      {[0, 1, 2, 3].map((x) => (
        <div className="w-full md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap mb-12 md:mr-10">
          <StepIcon className="md:hidden" />
          <StepIconX className="hidden md:inline md:mb-9" />
          <div className="w-266px ml-10 md:ml-0">
            <h3 className="text-xl font-bold mb-4">Pellentesque sed</h3>
            <p className="text-base font-normal text-gray-300">
              Diam, adipiscing at in non mauris phasellus volutpat. Massa
              pretium at ullamcorper libero vestibulum. Sed lectus amet rhoncus,
              convallis amet fusce tincidunt. Platea in enim eu a diam.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
