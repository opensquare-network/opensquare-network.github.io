import React from "react";
import Icon from "./corner-icon.svg";
import CoinAsk from "./coinAsk.png";
import Bounty from "./bounties.png";
import Collaboration from "./collaboration.png";
import Employ from "./employ.png";

export default function Products() {
  return (
    <div>
      <div className="flex flex-wrap	pt-16 content-center justify-center w-full md:w-1280px">
        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 md:ml-0 mr-8
          md:mr-20 w-346px md:w-484px h-160px
          md:h-136px shadow-lg md:even:mt-78px
          bg-white
          "
        >
          <img src={CoinAsk} className="absolute -top-9 -left-9 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Pay to Ask</h3>
          <p className="text-gray-300">
            Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
            euismod pulvinar nisl.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 md:ml-0 mr-8
          md:mr-20 w-346px md:w-484px h-160px
          md:h-136px shadow-lg md:even:mt-78px
          bg-white
          "
        >
          <img src={Bounty} className="absolute -top-9 -left-9 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Bounties</h3>
          <p className="text-gray-300">
            Nec mauris sed ligula vivamus scelerisque gravida diam. Porttitor id
            elementum nam libero.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 md:ml-0 mr-8
          md:mr-20 w-346px md:w-484px h-160px
          md:h-136px shadow-lg md:even:mt-78px
          bg-white
          "
        >
          <img src={Employ} className="absolute -top-9 -left-9 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Short-term Employment</h3>
          <p className="text-gray-300">
            Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
            euismod pulvinar nisl.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 md:ml-0 mr-8
          md:mr-20 w-346px md:w-484px h-160px
          md:h-136px shadow-lg md:even:mt-78px
          bg-white
          "
        >
          <img
            src={Collaboration}
            className="absolute -top-9 -left-9 shadow-lg"
          />
          <h3 className="text-xl font-bold mb-2">Custom Collaboration</h3>
          <p className="text-gray-300">
            Nec mauris sed ligula vivamus scelerisque gravida diam. Porttitor id
            elementum nam libero.
          </p>
        </div>
      </div>
    </div>
  );
}
