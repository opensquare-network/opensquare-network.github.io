import React from "react";
import CoinAsk from "./coinAsk.png";
import Bounty from "./bounties.png";
import Collaboration from "./collaboration.png";
import Employ from "./employ.png";

export default function Products() {
  return (
    <div>
      <div className="flex flex-wrap pl-9	pt-16 content-center justify-center w-full sm:w-1080px">
        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 sm:ml-0 mr-8
          sm:mr-76px w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white text-dark-major
          "
        >
          <img src={CoinAsk} className="absolute -top-9 -left-9 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Pay to Ask</h3>
          <p className="text-dark-minor">
            Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
            euismod pulvinar nisl.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 sm:ml-0 mr-8
          sm:mr-76px w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white
          "
        >
          <img src={Bounty} className="absolute -top-9 -left-9 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Bounties</h3>
          <p className="text-dark-minor">
            Nec mauris sed ligula vivamus scelerisque gravida diam. Porttitor id
            elementum nam libero.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 sm:ml-0 mr-8
          sm:mr-76px w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white
          "
        >
          <img src={Employ} className="absolute -top-9 -left-9 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Short-term Employment</h3>
          <p className="text-dark-minor">
            Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
            euismod pulvinar nisl.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 mb-68px ml-10 sm:ml-0 mr-8
          sm:mr-0 w-346px sm:w-484px h-160px
          sm:h-136px shadow-lg sm:even:mt-78px
          bg-white
          "
        >
          <img
            src={Collaboration}
            className="absolute -top-9 -left-9 shadow-lg"
          />
          <h3 className="text-xl font-bold mb-2">Custom Collaboration</h3>
          <p className="text-dark-minor">
            Nec mauris sed ligula vivamus scelerisque gravida diam. Porttitor id
            elementum nam libero.
          </p>
        </div>
      </div>
    </div>
  );
}
