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
          <p className="p-20-bold mb-2">Pay to Ask</p>
          <p className="text-dark-minor">
            Paid Q&A: For specific realm of knowledge, users can post questions
            on OpenSquare platform with relevant token locked for it. When an
            answer is adopted by the question owner, the author can get the
            fund.
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
            Bounty Collaboration: Bounty is the core of the collaboration,
            atomic collaborative units may include the creation, review,
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
            Short-term Employment: Collaborators may worry about payment issues
            during the process, for example, how to pay and the where to pay. On
            OpenSquare platform, users can flexibly customize the payment cycle
            and manage the begining and end of the collaboration.
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
          <p className="p-20-bold mb-2">Custom Collaboration</p>
          <p className="text-dark-minor">
            Customized Collaboration: To support users' flexible needs,
            OpenSquare will extract common collaboration units. Users can
            combine, set and manage these units to support their customized
            busniess.
          </p>
        </div>
      </div>
    </div>
  );
}
