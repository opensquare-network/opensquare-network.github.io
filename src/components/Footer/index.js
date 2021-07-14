import { Row } from "./styledComponents";
import React from "react";
import Github from "./github.svg";
import Email from "./email.svg";
import Telegram from "./tg.svg";
import Twitter from "./twitter.svg";
import SubSocial from "./subsocial.svg";

export default function Footer() {
  return (
    <div className="bg-gray-800 ">
      <div className="max-w-1400px mx-auto pl-4 py-80px sm:flex sm:pl-9 font-inter">
        <Row className="flex">
          <div className="w-1/2 sm:w-200px">
            <p className="block h-10 text-white font-semibold">Product</p>
            <a href="/" className="block h-10 text-light-minor">
              Bounty
            </a>
            <a
              href="https://www.dotreasury.com/"
              className="block h-10 text-light-minor"
            >
              doTreasury
            </a>
            <a
              href="https://coinask.io"
              className="block h-10 text-light-minor"
            >
              dotAsk
            </a>
            <a href="/" className="block h-10 text-light-minor">
              OpenGenerator
            </a>
          </div>

          <div className="w-1/2 sm:w-200px">
            <p className="block h-10 text-white font-semibold">Resources</p>
            <a href="/" className="block h-10 text-light-minor">
              Lightpaper
            </a>
            <a href="/" className="block h-10 text-light-minor">
              Media Kits
            </a>
          </div>
        </Row>

        <Row className="flex">
          <div className="w-1/2 sm:w-200px">
            <p className="block h-10 text-white font-semibold">Social Links</p>
            <a
              href="https://github.com/opensquare-network/"
              className="flex h-10 text-light-minor"
            >
              <Github width="20" height="20" /> &nbsp;&nbsp;Github
            </a>
            <a href="/" className="flex h-10 text-light-minor">
              <Telegram width="20" height="20" /> &nbsp;&nbsp;Telegram
            </a>
            <a href="/" className="flex h-10 text-light-minor">
              <Twitter width="20" height="20" /> &nbsp;&nbsp;Twitter
            </a>
            <a href="/" className="flex h-10 text-light-minor">
              <SubSocial width="20" height="20" /> &nbsp;&nbsp;Subsocial
            </a>
          </div>

          <div className="w-1/2 sm:w-200px">
            <a href="/" className="block h-10 text-white font-semibold">
              Contract
            </a>
            <div className="flex text-light-minor">
              <Email width="20" height="20" /> &nbsp;&nbsp;Email
            </div>
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
            © 2020 OpenSquare. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
