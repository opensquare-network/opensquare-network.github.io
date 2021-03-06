import React from "react";
import YongfengImg from "./1-yongfeng.png";
import ChaoJun from "./2-chaojun.png";
import WenTao from "./3-wentao.png";
import Alcazar from "./5-alcazar.png";
import Yizhou from "./4-yizhou.png";
import Yaping from "./6-yapin.png";
import styled from "styled-components";
import Contacts from "../Contacts";

const PaperEntry = styled.p`
  background: linear-gradient(270deg, #04d2c5 2.06%, #6848ff 100%);
`;

export default function () {
  return (
    <div className="font-inter">
      <div className="md:w-1080px m-auto">
        <h1 className="h3-36-bold lg:h2-48-bold text-center md:text-left mb-4 pt-80px">
          Meet the team
        </h1>
        <p className="p-18-normal lg:p-20-normal text-dark-minor text-center md:text-left w-346px md:w-full m-auto pb-80px">
          Decentralized, reliable and experienced.
        </p>
      </div>
      <PaperEntry
        className="block
        pt-4
        pb-4
        bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
        md:flex
        md:justify-center
        md:items-center
       "
        // href="https://github.com/opensquare-network/papers"
      >
        <span className="block m-auto md:m-0 text-center text-white p-18-medium">
          We're looking for passionate people{" "}
          <br className="inline md:hidden" /> to join us
        </span>
      </PaperEntry>

      <div className="md:flex lg:w-1080px md:mx-auto md:mt-20 md:mb-20">
        <h2 className="text-2xl font-bold text-center pt-80px md:pt-0 pb-10 whitespace-nowrap">
          Core Team
        </h2>
        <div className="md:ml-146px md:flex md:flex-wrap">
          <div className="px-4 lg:px-0 mr-10 mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 md:ml-0"
              width={100}
              src={YongfengImg}
              alt=""
            />
            <p className="md:w-full text-center md:text-left text-lg font-semibold">
              Yongfeng Li
            </p>
            <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Founder
            </p>
            <p className="md:w-full flex justify-center md:justify-start mb-4">
              <Contacts
                github="https://github.com/wliyongfeng"
                email="yongfeng@opensquare.network"
              />
            </p>
            <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
              10+ years software development experience, focusing on blockchain
              development recent 4 years. Located in Hangzhou China.
            </p>
          </div>

          <div className="px-4 mr-10 mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 md:ml-0"
              width={100}
              src={ChaoJun}
              alt=""
            />
            <p className="md:w-full text-center md:text-left text-lg font-semibold">
              Chaojun Huang
            </p>
            <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Developer
            </p>
            <p className="md:w-full flex justify-center md:justify-start mb-4">
              <Contacts
                github="https://github.com/hyifeng"
                email="chaojun@opensquare.network"
              />
            </p>
            <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
              10+ years experience on developing complex backend service and
              rich frontend application. Has rich experience on either
              enterprise or internet applications.
            </p>
          </div>

          <div className="px-4 mr-10 lg:mr-0 mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 md:ml-0"
              width={100}
              src={WenTao}
              alt=""
            />
            <p className="md:w-full text-center md:text-left text-lg font-semibold">
              Wentao Chen
            </p>
            <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Developer
            </p>
            <p className="md:w-full flex justify-center md:justify-start mb-4">
              <Contacts
                github="https://github.com/qiyisi"
                email="wentao@opensquare.network"
              />
            </p>
            <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
              Years of full stack development experience, focusing on building
              perfect website for everyone.
            </p>
          </div>

          <div className="px-4 mr-10 mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 md:ml-0"
              width={100}
              src={Yizhou}
              alt=""
            />
            <p className="md:w-full text-center md:text-left text-lg font-semibold">
              Yizhou Xin
            </p>
            <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Developer
            </p>
            <p className="md:w-full flex justify-center md:justify-start mb-4">
              <Contacts
                github="https://github.com/YoshiyukiSakura"
                email="yizhou@opensquare.network"
              />
            </p>
            <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
              Yizhou, creative coder, blockchain industry enthusiast.
              Engineering mindset from solid academic background and aims for a
              persistent self-improvement. Cat addict.
            </p>
          </div>

          <div className="px-4 mr-10 mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 md:ml-0"
              width={100}
              src={Alcazar}
              alt=""
            />
            <p className="md:w-full text-center md:text-left text-lg font-semibold">
              Alcazar
            </p>
            <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              Product Designer
            </p>
            <p className="md:w-full flex justify-center md:justify-start mb-4">
              <Contacts github="https://github.com/Popoulosss" />
            </p>
            <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
              5 years of experience in Web and Mobile Apps UI/UX design, have a
              passion for the product design and design system. Figma fan.
            </p>
          </div>

          <div className="px-4 mr-10 lg:mr-0 mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-240px flex-wrap">
            <img
              className="mx-auto mb-6 md:ml-0"
              width={100}
              src={Yaping}
              alt=""
            />
            <p className="md:w-full text-center md:text-left text-lg font-semibold">
              Yaping
            </p>
            <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
              BD & Operation
            </p>
            <p className="md:w-full flex justify-center md:justify-start mb-4">
              <Contacts email="yaping@opensquare.network" />
            </p>
            <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
              Yaping, passionate about Blockchain. Intergrating her media
              experience with commercial mindset in this trendy industry to
              collaborate the decentralized future. Reading and outdoor. Logic,
              abstract and intuitive.
            </p>
          </div>
        </div>
      </div>

      {/*<div className="block md:flex md:mt-40 md:w-1080px md:mx-auto md:items-start">*/}
      {/*  <h2*/}
      {/*    className="h4-24-bold*/}
      {/*   text-dark-major*/}
      {/*  text-center  mt-28  mb-8*/}
      {/*  md:mt-0 md:text-left md:mr-133px*/}
      {/*  "*/}
      {/*  >*/}
      {/*    Carrers*/}
      {/*  </h2>*/}

      {/*  <div>*/}
      {/*    <p className="px-4 p-16-normal text-dark-minor mb-4 md:w-800px">*/}
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
