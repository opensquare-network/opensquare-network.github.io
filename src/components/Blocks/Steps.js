import React from "react";
import Icon from "./group.png";
import IconY from "./blocksY.png";

export default function Steps() {
  return (
    <div className="w-full md:w-1080px md:m-auto md:flex items-start">
      <div className="w-full mt-8 md:mt-12 pt-4 md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Pellentesque sed</h3>
          <p className="text-base font-normal text-dark-minor">
            Diam, adipiscing at in non mauris phasellus volutpat. Massa pretium
            at ullamcorper libero vestibulum. Sed lectus amet rhoncus, convallis
            amet fusce tincidunt. Platea in enim eu a diam.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 md:mt-12 pt-4 md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} height={128} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Pellentesque sed</h3>
          <p className="text-base font-normal text-dark-minor">
            Fusce nunc sapien ultrices adipiscing ut lobortis gravida.
            Condimentum facilisis non porta tellus dignissim ut tincidunt
            blandit sagittis. Viverra aliquam gravida fringilla mattis pharetra
            blandit platea viverra. Commodo lectus cras tellus pellentesque
            euismod molestie tempor.
          </p>
        </div>
      </div>

      <div className="w-full mt-8 md:mt-12 pt-4  md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} height={128} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Pellentesque sed</h3>
          <p className="text-base font-normal text-dark-minor">
            Diam, adipiscing at in non mauris phasellus volutpat. Massa pretium
            at ullamcorper libero vestibulum. Sed lectus amet rhoncus, convallis
            amet fusce tincidunt. Platea in enim eu a diam.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 md:mt-12 pt-4 md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} height={128} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Pellentesque sed</h3>
          <p className="text-base font-normal text-dark-minor">
            Diam, adipiscing at in non mauris phasellus volutpat. Massa pretium
            at ullamcorper libero vestibulum. Sed lectus amet rhoncus, convallis
            amet fusce tincidunt. Platea in enim eu a diam.
          </p>
        </div>
      </div>
    </div>
  );
}
