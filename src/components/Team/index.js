import React from "react";
import YongfengImg from "./1-yongfeng.png";
import ChaoJun from "./2-chaojun.png";
import YiHan from "./5-yihan.png";
import JieHao from "./7-jiehao.png";
import SiFan from "./sifan.png";
import styled from "styled-components";
import Contacts from "../Contacts";
import WoLong from "./7-wolong.png";
import Quinn from "./8-quinn.png";
import QiaoChao from "./9-qiaochao.png";

const PaperEntry = styled.p`
  background: linear-gradient(270deg, #04d2c5 2.06%, #6848ff 100%);
`;

const Wrapper = styled.div``;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f3f0f8;
`;

const coreTeam = [
  {
    avatar: YongfengImg,
    name: "Yongfeng Li",
    jobTitle: "Developer & Founder",
    github: "https://github.com/wliyongfeng",
    email: "yongfeng@opensquare.network",
    bio: `10+ years software development experience, focusing on blockchain development recent 4 years. Located in Hangzhou China.`,
  },
  {
    avatar: ChaoJun,
    name: "Chaojun Huang",
    jobTitle: "Developer",
    github: "https://github.com/hyifeng",
    email: "chaojun@opensquare.network",
    bio: `10+ years experience on developing complex backend service and rich frontend application. Has rich experience on either enterprise or internet applications.`,
  },
  {
    avatar: YiHan,
    name: "Yihan Fan",
    jobTitle: "Product Designer",
    github: "https://github.com/Popoulosss",
    email: "",
    bio: ` 5 years of experience in Web and Mobile Apps UI/UX design, have a passion for the product design and design system. Figma fan.`,
  },
  {
    avatar: JieHao,
    name: "Jiehao Hu",
    jobTitle: "Developer",
    github: "https://github.com/2nthony",
    email: "ant.hu@outlook.com",
    bio: `A developer who loves to create things such as front-end infrastructure toolings. Learning by doing. Rustacean. Coffee lover.`,
  },
  {
    avatar: SiFan,
    name: "Leo Chen",
    jobTitle: "Developer",
    github: "https://github.com/leocs2417",
    email: "leochen.sat24@gmail.com",
    bio: `A front-end developer, focusing on Web and H5 development, keen on exploring new technologies.`,
  },
  {
    avatar: WoLong,
    name: "Wolong Shaw",
    jobTitle: "Developer",
    github: "https://github.com/wolyshaw",
    email: "",
    bio: `A front-end development engineer who likes to make wheels and delicious food, occasionally code words, and loves new things.`,
  },
  {
    avatar: Quinn,
    name: "Quinn Gao",
    jobTitle: "Developer",
    github: "https://github.com/quinn-gaoo",
    email: "quinnn.gao@gmail.com",
    bio: `5 years in front-end development, passionate about building efficient web apps. Skilled in modern tech, focused on clean code and UX.`,
  },
  {
    avatar: QiaoChao,
    name: "Chao Qiao",
    jobTitle: "Developer",
    github: "https://github.com/canwhite",
    email: "beetle5249@gmail.com",
    bio: `A developer who loves technology and likes to explore the unknown, typical ENTP, running and reading enthusiast.`,
  },
];

export default function () {
  return (
    <Wrapper className="font-inter">
      <div className="w-full bg-white">
        <div className="md:w-1080px m-auto px-8 xl:px-0">
          <h1 className="h3-36-bold text-center md:text-left mb-4 pt-80px">
            Meet the team
          </h1>
          <p className="p-18-normal lg:p-20-normal text-dark-minor text-center md:text-left w-346px md:w-full m-auto pb-80px">
            Reliable, experienced and decentralized.
          </p>
        </div>
      </div>
      <Divider />
      <div className="lg:w-1080px md:mx-auto md:mt-20 md:mb-0">
        <h2 className="text-2xl font-bold text-left pt-80px md:pt-0 pb-10 whitespace-nowrap px-8 xl:px-0">
          Core Team
        </h2>
        <div className="md:flex md:flex-wrap gap-10  sm:px-8 xl:px-0">
          {coreTeam.map((item) => (
            <div
              key={item.name}
              className="px-4  mb-8 lg:mb-80px  md:h-388px md:flex content-start w-full md:w-333px flex-wrap"
            >
              <img
                className="mx-auto mb-6 md:ml-0"
                width={100}
                src={item.avatar}
                alt=""
              />
              <p className="md:w-full text-center md:text-left text-lg font-semibold">
                {item.name}
              </p>
              <p className="md:w-full text-center md:text-left text-base font-semibold text-turquoise-500 mb-3 ">
                {item.jobTitle}
              </p>
              <p className="md:w-full flex justify-center md:justify-start mb-4">
                <Contacts github={item.github} email={item.email} />
              </p>
              <p className="text-dark-minor font-normal w-360px md:w-full text-center md:text-left m-auto">
                {item.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
