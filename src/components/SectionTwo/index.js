import React from "react";
import styled from "styled-components";

import ImgSrc from "./img.png";

const ImgWrapper = styled.div`
  height: 270px;
`;

const Img = styled.img`
  height: 270px;
  width: 1426px;
  left: 50%;
  transform: translateX(-50%);
`;

export default function () {
  return (
    <section className="lg:w-1080px mx-auto font-inter  ">
      <div className="pt-20 pb-120px">
        <div className="h2-44-bold text-center">
          Trading code, design and ideas
        </div>
        <div className="p-18-normal text-dark-minor mt-4 text-center">
          Sed fringilla quam lobortis sit velit pulvinar nulla aliquam.
        </div>
        <ImgWrapper className="my-60px relative">
          <Img src={ImgSrc} className="absolute" />
        </ImgWrapper>
        <div className="p-18-normal text-dark-minor mt-4 text-center max-w-720px mx-auto">
          Placerat volutpat ultricies sed id maecenas. Urna a sit nec id. Mauris
          in arcu pulvinar tristique lectus egestas. Interdum praesent urna
          sagittis, rhoncus vitae tellus.
        </div>
      </div>
    </section>
  );
}
