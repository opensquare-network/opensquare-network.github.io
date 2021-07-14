import React from "react";
import YongfengImg from "./1-yongfeng.png";
import Github from "../../images/github.svg";
import Email from "../../images/email.svg";
import ChaoJun from "./2-chaojun.png";
import WenTao from "./3-wentao.png";
import Alcazar from "./5-alcazar.png";
import Yizhou from "./4-yizhou.png";
import Yaping from "./6-yapin.png";
import styled from "styled-components";
import IconGoto from "./IconGoto.svg";

const PaperEntry = styled.a`
  background: linear-gradient(270deg, #04d2c5 2.06%, #6848ff 100%);
`;

export default function () {
  return (
    <div className="font-inter">
      <div className="sm:w-1080px m-auto">
        <h1 className="h3-36-bold md:h2-48-bold text-center sm:text-left mb-4 pt-80px">
          Meet the team
        </h1>
        <p className="p-18-normal md:p-20-normal text-dark-minor text-center sm:text-left w-346px sm:w-full m-auto pb-80px">
          OpenSquare is an open source project built by decentralized{" "}
          <br className="hidden sm:block" /> team which is reliable and
          experienced.
        </p>
      </div>
      <PaperEntry
        className="block
        pt-4
        pb-4
        bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
        sm:flex
        sm:justify-center
        sm:items-center
       "
        href="/papers"
      >
        <span className="block m-auto sm:m-0 text-center text-white p-18-medium">
          Get Started with OpenSquare and <br className="sm:hidden" /> Check Our
          Litepaper
        </span>
        <IconGoto className="m-auto sm:m-0 sm:ml-5" />
      </PaperEntry>

      <div className="sm:flex sm:w-1080px sm:mx-auto sm:mt-20">
        <h2 className="text-2xl font-bold text-center pt-80px sm:pt-0 pb-10 whitespace-nowrap">
          Core Team
        </h2>
        <div className="sm:ml-146px sm:flex sm:flex-wrap">
          <div className="px-4 md:px-0 mr-10 mb-8 md:mb-80px  sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 sm:ml-0"
              width={100}
              src={YongfengImg}
              alt=""
            />
            <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
              Yongfeng Li
            </p>
            <p className="sm:w-full text-center sm:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Founder
            </p>
            <p className="sm:w-full flex justify-center sm:justify-start mb-4">
              <Github className="mr-4" width={24} height={24} />
              <Email width={24} height={24} />
            </p>
            <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
              10+ years software development experience, focusing on blockchain
              development recent 4 years. Located in Hangzhou China.
            </p>
          </div>

          <div className="px-4 mr-10 mb-8 md:mb-80px  sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 sm:ml-0"
              width={100}
              src={ChaoJun}
              alt=""
            />
            <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
              Chaojun Huang
            </p>
            <p className="sm:w-full text-center sm:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Developer
            </p>
            <p className="sm:w-full flex justify-center sm:justify-start mb-4">
              <Github className="mr-4" width={24} height={24} />
              <Email width={24} height={24} />
            </p>
            <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
              10+ years experience on developing complex backend service and
              rich frontend application. Has rich experience on both enterprise
              application and internet application.
            </p>
          </div>

          <div className="px-4 mr-0 mb-8 md:mb-80px  sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 sm:ml-0"
              width={100}
              src={WenTao}
              alt=""
            />
            <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
              Wentao Chen
            </p>
            <p className="sm:w-full text-center sm:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Developer
            </p>
            <p className="sm:w-full flex justify-center sm:justify-start mb-4">
              <Github className="mr-4" width={24} height={24} />
              <Email width={24} height={24} />
            </p>
            <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
              Years of full stack development experience, focusing on building
              perfect website for everyone.
            </p>
          </div>

          <div className="px-4 mr-10 mb-8 md:mb-80px  sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 sm:ml-0"
              width={100}
              src={Yizhou}
              alt=""
            />
            <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
              Yizhou Xin
            </p>
            <p className="sm:w-full text-center sm:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Developer
            </p>
            <p className="sm:w-full flex justify-center sm:justify-start mb-4">
              <Github className="mr-4" width={24} height={24} />
              <Email width={24} height={24} />
            </p>
            <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
              Yizhou, creative coder, blockchain industry enthusiast.
              Engineering mindset from solid academic background and aims for a
              persistent self-improvement. Cat addict.
            </p>
          </div>

          <div className="px-4 mr-10 mb-8 md:mb-80px  sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 sm:ml-0"
              width={100}
              src={Alcazar}
              alt=""
            />
            <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
              Alcazar
            </p>
            <p className="sm:w-full text-center sm:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Product Designer
            </p>
            <p className="sm:w-full flex justify-center sm:justify-start mb-4">
              <Github className="mr-4" width={24} height={24} />
              <Email width={24} height={24} />
            </p>
            <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
              5 years of experience in Web and Mobile Apps UI/UX design, have a
              passion for the product design and design system. Figma fan.
            </p>
          </div>

          <div className="px-4 mr-0 mb-8 md:mb-80px  sm:h-388px sm:flex content-start w-full sm:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 sm:ml-0"
              width={100}
              src={Yaping}
              alt=""
            />
            <p className="sm:w-full text-center sm:text-left text-lg font-semibold">
              Yaping
            </p>
            <p className="sm:w-full text-center sm:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              BD & Operation
            </p>
            <p className="sm:w-full flex justify-center sm:justify-start mb-4">
              <Github className="mr-4" width={24} height={24} />
              <Email width={24} height={24} />
            </p>
            <p className="text-dark-minor font-normal w-360px sm:w-full text-center sm:text-left m-auto">
              Yaping, passionate about Blockchain. Intergrating her media
              experience with commercial mindset in this trendy industry to
              collaborate the decentralized future. Reading and outdoor. Logic,
              abstract and intuitive.
            </p>
          </div>
        </div>
      </div>

      {/*<div className="block sm:flex sm:mt-40 sm:w-1080px sm:mx-auto sm:items-start">*/}
      {/*  <h2*/}
      {/*    className="h4-24-bold*/}
      {/*   text-dark-major*/}
      {/*  text-center  mt-28  mb-8*/}
      {/*  sm:mt-0 sm:text-left sm:mr-133px*/}
      {/*  "*/}
      {/*  >*/}
      {/*    Carrers*/}
      {/*  </h2>*/}

      {/*  <div>*/}
      {/*    <p className="px-4 p-16-normal text-dark-minor mb-4 sm:w-800px">*/}
      {/*      We aim to calm this mess by providing a simple user interface that*/}
      {/*      reduces tools to their core functionality. OpenSquare is designed to*/}
      {/*      keep their users focused. It optimizes for the shortest path from*/}
      {/*      intent to action.*/}
      {/*    </p>*/}
      {/*    <p className="px-4  p-16-normal text-dark-minor mb-4">*/}
      {/*      If you resonate with our mission but there isn’t an open position*/}
      {/*      for you, you can also send us an email at{" "}*/}
      {/*      <a*/}
      {/*        className="text-turquoise-500"*/}
      {/*        href="mailto:yongfeng@opensquare.com"*/}
      {/*      >*/}
      {/*        yongfeng@opensquare.com*/}
      {/*      </a>{" "}*/}
      {/*      with any information you’d think is relevant*/}
      {/*    </p>*/}

      {/*    <h3 className="mx-4 p-20-bold mt-10 pt-10 border-t border-grey-200 text-2xl text-dark-major text-left font-bold mb-8">*/}
      {/*      Operations Manager*/}
      {/*    </h3>*/}

      {/*    <p className="mx-4 p-16-normal text-dark-minor mb-4">*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet*/}
      {/*      diam placerat fusce nullam malesuada ipsum elit. At magna est*/}
      {/*      mauris, egestas et. Consectetur mi lacus semper lectus. Quis in ut*/}
      {/*      sed est eleifend velit magna adipiscing iaculis.*/}
      {/*    </p>*/}

      {/*    <h3 className="mx-4 p-20-bold mt-10 pt-10 border-t border-grey-200 text-2xl text-dark-major text-left font-bold mb-8">*/}
      {/*      Blockchain Developer*/}
      {/*    </h3>*/}

      {/*    <p className="px-4 p-16-normal mb-20 text-dark-minor mb-4">*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,*/}
      {/*      pharetra suspendisse duis dapibus nunc in. Non felis erat feugiat mi*/}
      {/*      sed. Nullam eu aliquet magna turpis eu montes, et congue. Nunc enim,*/}
      {/*      in risus eget euismod turpis.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
