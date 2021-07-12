import React from "react";
import YongfengImg from "./yongfeng.png";
import Github from "../../images/github.svg";
import Email from "../../images/email.svg";
import ChaoJun from "./huangchaojun.png";
import WenTao from "./chenwentao.png";
import Alcazar from "./alcazar.png";
import Yizhou from "./xinyizhou.jpeg";
import Yaping from "./yaping.png";
import styled from "styled-components";
import IconGoto from "./Icon-goto.svg";

const PaperEntry = styled.a`
  background: linear-gradient(270deg, #04d2c5 2.06%, #6848ff 100%);
`;

export default function () {
  return (
    <div>
      <div className="sm:w-1080px m-auto">
        <h1 className="text-4xl font-bold text-center sm:text-left  pt-80px">
          Meet the team
        </h1>
        <p className="text-lg text-gray-400 text-center  sm:text-left w-346px sm:w-full m-auto pt-4 pb-80px">
          OpenSquare is an open source project built by decentralized{" "}
          <br className="hidden sm:block" /> team which is reliable and
          experienced.
        </p>
      </div>
      <PaperEntry
        className="block
        pt-4
        pb-5
        bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
        sm:flex
        sm:justify-center
        sm:items-center
       "
        href="/papers"
      >
        <span className="block m-auto sm:m-0 text-center text-white text-lg font-semibold ">
          Get Started with OpenSquare and <br className="sm:hidden" /> Check Our
          Litepaper
        </span>
        <IconGoto className="m-auto sm:m-0 sm:ml-5" />
      </PaperEntry>

      <div className="sm:flex sm:w-1080px sm:mx-auto sm:mt-20">
        <h2 className="text-2xl font-bold text-center pt-80px sm:pt-0 pb-10">
          Core Team
        </h2>
        <div className="sm:ml-153px sm:flex sm:flex-wrap">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div className="px-4 mr-10 mb-8 sm:mb-0 sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
              <img
                className="m-auto sm:ml-0"
                width={100}
                src={YongfengImg}
                alt=""
              />
              <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
                Yongfeng Li
              </p>
              <p className="sm:w-full text-center sm:text-left text-base font-semibold text-green-500 mb-3 ">
                Founder
              </p>
              <p className="sm:w-full flex justify-center sm:justify-start mb-4">
                <Github className="mr-4" width={24} height={24} />
                <Email width={24} height={24} />
              </p>
              <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
                10+ years software development experience, focusing on
                blockchain development recent 4 years. Located in Hangzhou
                China.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
