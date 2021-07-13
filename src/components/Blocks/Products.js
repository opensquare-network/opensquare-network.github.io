import React from "react";
import CoinAsk from "./coinAsk.png";
import Bounty from "./bounties.png";
import Collaboration from "./collaboration.png";
import Employ from "./employ.png";

export default function Products() {
  return (
    <div className="flex flex-wrap pl-9 content-center justify-center w-full md:w-1080px font-inter  mt-8 pt-9 break-all mb-20">
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
          Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
          euismod pulvinar nisl.
        </p>
      </div>

      <div
        className="
          relative pt-6 pl-15 pr-6 mb-68px  sm:ml-0 mr-8
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
          Nec mauris sed ligula vivamus scelerisque gravida diam. Porttitor id
          elementum nam libero.
        </p>
      </div>

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
          Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
          euismod pulvinar nisl.
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
          Nec mauris sed ligula vivamus scelerisque gravida diam. Porttitor id
          elementum nam libero.
        </p>
      </div>
    </div>
  );
}
