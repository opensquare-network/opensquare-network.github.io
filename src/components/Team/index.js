import styled from "styled-components";
import React from "react";
import YongfengImg from "./yongfeng.png";
import Github from "../../images/github.svg";
import Email from "../../images/email.svg";
import ChaoJun from "./huangchaojun.png";
import WenTao from "./chenwentao.png";
import Alcazar from "./alcazar.png";
import Yizhou from "./xinyizhou.jpeg";
import Yaping from "./yaping.png";

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

  h2:first-of-type {
    margin-top: 50px;
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
              Yongfeng, founder, proficient in software development with 10+
              years experience, focusing on blockchain development in recent 4
              years. Located in Hangzhou, China.
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
              Chaojun is a developer with 10+ years experience on complex
              backend and frontend application developing service. His rich
              experience vary from both enterprise and internet applications.
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
              Wentao has years of full stack development experience. His
              perfectionism toward work and life drives him on building perfect
              website for everyone.
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
              5 years of relevant digital experience of UI/UX design in Web and
              Mobile Apps. Bearing a passion for system designing. Figma fan.
            </p>
          </Member>
          <Member>
            <img src={Yizhou} alt="yizhou" />
            <h4>Yizhou Xin</h4>
            <Contacts>
              <a
                href="https://github.com/YoshiyukiSakura"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="16" height="16" />
              </a>
              <a
                href="mailto:yizhou@opensquare.network"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Yizhou, creative coder, blockchain industry enthusiast.
              Engineering mindset from solid academic background and aims for a
              persistent self-improvement. Cat addict.
            </p>
          </Member>
          <Member>
            <img src={Yaping} alt="yaping" />
            <h4>Yaping Wu</h4>
            <Contacts>
              <a
                href="mailto:yizhou@opensquare.network"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="16" height="16" />
              </a>
            </Contacts>
            <p>
              Yaping, passionate about Blockchain. Intergrating her media
              experience with commercial mindset in this trendy industry to
              collaborate the decentralized future. Reading and outdoor. Logic,
              abstract and intuitive.
            </p>
          </Member>
        </Members>
      </InnerSection>
    </StyledSection>
  );
}
