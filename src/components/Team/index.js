import styled from "styled-components";
import React from "react";
import YongfengImg from "./yongfeng.jpeg";
import AtenImg from "./aten.jpeg";
import HaoImg from "./hao.jpeg";
import Github from "../../images/github.svg";
import Email from "../../images/email.svg";

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
  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const Members = styled.section`
  display: flex;
  margin-top: 24px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 20px 0;

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
            <h4>Yongfeng LI</h4>
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
            <img src={AtenImg} alt="aten" />
            <h4>Aten JIN</h4>
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
            <h4>Hao SUN</h4>
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
        </Members>
      </InnerSection>
    </StyledSection>
  );
}
