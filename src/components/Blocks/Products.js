import React from "react";
import CoinAsk from "./coinAsk.png";
import Bounty from "./bounties.png";
import Collaboration from "./collaboration.png";
import Employ from "./employ.png";

export default function Products() {
  return (
    <div className="flex flex-wrap pl-9 content-center justify-center w-full md:w-1080px font-inter  mt-12 pt-9 break-all">
      <div className="flex flex-wrap">
        <div
          className="
          relative pt-6 pl-15 pr-6 mb-68px  sm:ml-0 mr-8
          sm:mr-76px w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white text-dark-major
          "
        >
          <img
            width={72}
            height={72}
            alt=""
            src={CoinAsk}
            className="absolute p-4 bg-white -top-9 -left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2"> Paid Q&A</p>
          <p className="text-dark-minor">
            Users can post questions regarding specific realm of knowledge on
            our platform with relevant token locked. When an answer is adopted,
            the author will get funded.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 pr-6 sm:ml-0 mr-8 mb-68px md:mb-0
          sm:mr-0 w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white
          "
        >
          <img
            width={72}
            height={72}
            alt=""
            src={Bounty}
            className="absolute p-4 bg-white  -top-9 -left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2">Bounties</p>
          <p className="text-dark-minor">
            Bounty Collaboration: Bounty is the core of the collaboration.
            Atomic collaborative units may include the creation, review,
            application, submission and other basic processes.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div
          className="
          relative pt-6 pl-15 pr-6 mb-68px  sm:ml-0 mr-8
          sm:mr-76px w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white
          "
        >
          <img
            width={72}
            height={72}
            alt=""
            src={Employ}
            className="absolute p-4 bg-white  -top-9 -left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2">Short-term Employment</p>
          <p className="text-dark-minor">
            Collaborators may worry about payment issues during the process. On
            OpenSquare platform, users can flexibly customize the payment cycle
            and manage the begining and end of it.
          </p>
        </div>
        <div
          className="
          relative pt-6 pl-15 pr-6  sm:ml-0 mr-8
          sm:mr-0 w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white
          "
        >
          <img
            width={72}
            height={72}
            alt=""
            src={Collaboration}
            className="absolute p-4 bg-white  -top-9 -left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2">Customized Collaboration</p>
          <p className="text-dark-minor">
            To support users' flexible needs, OpenSquare will extract common
            collaboration units for users to combine, set and manage for a
            better customization.
          </p>
        </div>
      </div>
    </div>
  );
}
