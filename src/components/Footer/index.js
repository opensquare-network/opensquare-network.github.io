import { Row } from "./styledComponents";
import React from "react";
import Github from "./github.svg";
import Email from "./email.svg";
import Telegram from "./tg.svg";
import Twitter from "./twitter.svg";
import SubSocial from "./subsocial.svg";
import styled from "styled-components";

const FooterItem = styled.a`
  display: flex;
  align-items: center;
`;

export default function Footer() {
  return (
    <div className="bg-gray-800 " style={{ backgroundColor: "#191E27" }}>
      <div className="lg:max-w-1400px mx-auto pl-4 py-80px sm:flex sm:pl-9 font-inter overflow-x-scroll">
        <Row className="flex flex-wrap">
          <div className="w-171px sm:w-200px">
            <p className="block h-6 mb-6 text-white font-semibold">Products</p>
            {/*<FooterItem target="_blank" href="/" className="block h-6 mb-4 text-light-minor">*/}
            {/*  Bounty*/}
            {/*</FooterItem>*/}
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://www.dotreasury.com/"
              className="block h-6 mb-4 text-light-minor"
            >
              doTreasury
            </FooterItem>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://coinask.io"
              className="block h-6 mb-4 text-light-minor"
            >
              CoinAsk.io
            </FooterItem>
          </div>

          <div className="w-171px sm:w-200px">
            <p className="block h-6 mb-6 text-white font-semibold">Resources</p>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://github.com/opensquare-network/papers"
              className="block h-6 mb-4 text-light-minor"
            >
              Lightpaper
            </FooterItem>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/1nA6PTJJYfnpvB8wu9cgQaHopMRM4bqQg?usp=sharing"
              className="block h-6 mb-4 text-light-minor"
            >
              Media Kits
            </FooterItem>
          </div>
        </Row>

        <Row className="flex">
          <div className="w-171px sm:w-200px">
            <p className="block h-6 mb-6 text-white font-semibold">
              Social Links
            </p>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://github.com/opensquare-network/"
              className="flex h-6 mb-4 text-light-minor items-center"
            >
              <Github width="20" height="20" /> &nbsp;&nbsp;Github
            </FooterItem>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://t.me/opensquare"
              className="flex h-6 mb-4 text-light-minor items-center"
            >
              <Telegram width="20" height="20" /> &nbsp;&nbsp;Telegram
            </FooterItem>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/OpensquareN"
              className="flex h-6 mb-4 text-light-minor items-center"
            >
              <Twitter width="20" height="20" /> &nbsp;&nbsp;Twitter
            </FooterItem>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="https://app.subsocial.network/@opensquare"
              className="flex h-6 mb-4 text-light-minor items-center"
            >
              <SubSocial width="20" height="20" /> &nbsp;&nbsp;Subsocial
            </FooterItem>
          </div>

          <div className="w-171px sm:w-200px">
            <p className="block h-6 mb-6 text-white font-semibold">Contact</p>
            <FooterItem
              target="_blank"
              rel="noreferrer"
              href="mailto:hi@opensquare.network"
              className="flex text-light-minor"
            >
              <Email width="20" height="20" /> &nbsp;&nbsp;Email
            </FooterItem>
          </div>
        </Row>

        <div className="sm:w-full sm:pr-12">
          <p className="h-24 flex items-center sm:w-full sm:justify-end">
            <svg
              width="68"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.8582 24L39.1972 19L49.5904 13L63.8811 21.25V26.75L49.5904 35L39.1972 29L47.8582 24Z"
                fill="white"
              />
              <path
                d="M28.804 29L20.143 24L28.804 19L18.4108 13L4.12012 21.25V26.75L18.4108 35L28.804 29Z"
                fill="white"
              />
              <path
                d="M34.0006 34L42.6616 39L34.0006 44L25.3396 39L34.0006 34Z"
                fill="white"
              />
              <path
                d="M42.6616 9L34.0006 4L25.3396 9L34.0006 14L42.6616 9Z"
                fill="white"
              />
            </svg>
          </p>
          <div className="rights text-light-minimal sm:text-right mt-0 md:mt-20">
            © 2021 OpenSquare. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
