import styled from "styled-components";
import React from "react";
import YongfengImg from "./yongfeng.jpeg";
import AtenImg from "./aten.jpeg";
import HaoImg from "./hao.jpeg";
import JiaMing from "./jiaming.jpg";
import Github from "../../images/github.svg";
import Email from "../../images/email.svg";
import ChaoJun from "./huangchaojun.png";
import WenTao from "./chenwentao.png";
import Alcazar from "./alcazar.png";

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 90px - 72px);

  @media screen and (max-width: 1080px) {
    padding: 0 20px;
    justify-content: space-around;
  }
`;

export const InnerSection = styled.main`
  margin-bottom: 50px;
  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
  }

  & > h2:not(:first-of-type) {
    margin-top: 50px;
  }
`;

const Members = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 20px 0;
  box-sizing: border-box;

  img {
    max-width: 7rem;
    box-sizing: border-box;
    border-radius: 50%;
  }

  h4 {
    margin: 10px 0;
  }

  p {
    margin-top: 10px;
    text-align: justify;
    line-height: 1.5;

    a {
      color: #000;
    }
  }

  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

const Contacts = styled.div`
  min-height: 20px;
  a:not(:first-of-type) {
    margin-left: 12px;
  }
`;

export default function () {
  return (
    <StyledSection>
      <InnerSection>
        <h2>Our Team</h2>
        <p>We are a reliable and experienced team.</p>

        <Members>
          <Member>
            <img src={YongfengImg} alt="yongfeng" />
            <h4>Yongfeng Li</h4>
            <Contacts>
              <a
                href="https://github.com/wliyongfeng"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
              <a
                href="mailto:yongfeng@opensquare.network"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Yongfeng has 10+ years software development experience, focusing
              on blockchain development recent 4 years. Located in Hangzhou
              China.
            </p>
          </Member>
          <Member>
            <img src={ChaoJun} alt="junchao" />
            <h4>Chaojun Huang</h4>
            <Contacts>
              <a
                href="https://github.com/hyifeng"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
              <a
                href="mailto:chaojun@opensquare.network"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Chaojun is a developer with 10+ years experience on developing
              complex backend service and rich frontend application. Has rich
              experience on both enterprise application and internet
              application.
            </p>
          </Member>
          <Member>
            <img src={WenTao} alt="wentao" />
            <h4>Wentao Chen</h4>
            <Contacts>
              <a
                href="https://github.com/qiyisi"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
              <a
                href="mailto:wentao@opensquare.network"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Wentao has years of full stack development experience, focusing on
              building perfect website for everyone.
            </p>
          </Member>
          <Member>
            <img src={Alcazar} alt="wentao" />
            <h4>Alcazar</h4>
            <Contacts>
              <a
                href="mailto:alcazarrr@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              5 years of relevant digital experience in Web and Mobile Apps
              UI/UX design, have a passion for the design system. Figma fan.
            </p>
          </Member>
        </Members>

        <h2>Key Community Contributors</h2>
        <Members>
          <Member>
            <img src={AtenImg} alt="aten" />
            <h4>Aten Jin</h4>
            <Contacts>
              <a
                href="https://github.com/AtenJin"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Aten has rich development experience with Substrate, Bitcoin,
              Ethereum, and EOS. A geek with perfect coding skills. Currently
              located in Hangzhou China.
            </p>
          </Member>
          <Member>
            <img src={HaoImg} alt="hao" />
            <h4>Hao Sun</h4>
            <Contacts>
              <a
                href="https://github.com/marco-sundsk"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
              <a
                href="mailto:sun.dsk1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Hao is the founder of{" "}
              <a
                href="https://www.buildlinks.org/"
                target="_blank"
                rel="noreferrer"
              >
                buildlinks
              </a>
              , member of ChainX congress, one of ChainX bitcoin trustees. He is
              also a member of NEAR validators council and core member in NEAR
              China community.
            </p>
          </Member>
          <Member>
            <img src={JiaMing} alt="jiaming" />
            <h4>Jiaming Chen</h4>
            <Contacts>
              <a
                href="https://github.com/isdot"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Founder of&nbsp;
              <a href="https://w3c.group/" target="_blank" rel="noreferrer">
                w3c.group
              </a>
              &nbsp;community, member of polkadot's first hackathon champion
              team, former employee of Cryptape, Mixin Network, years of
              blockchain application development experience.
            </p>
          </Member>
        </Members>
      </InnerSection>
    </StyledSection>
  );
}
