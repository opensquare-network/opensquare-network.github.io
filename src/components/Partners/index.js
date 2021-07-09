import React from "react";
import patract from "./patract.png";
import phala from "./phala.png";
import subsocial from "./subsocial.png";
import litentry from "./litentry.png";
import crust from "./crust.png";
import polkabase from "./polkabase.png";
import chainx from "./chainx.png";
import darwinia from "./darwinia.png";
import merico from "./merico.png";
import bifrost from "./bifrost.png";
import stafi from "./stafi.png";
import dorahacks from "./dorahacks.png";

const Partners = [
  {
    url: "https://patract.io/",
    img: patract,
  },
  {
    url: "https://chainx.org/",
    img: chainx,
  },
  {
    url: "https://phala.network/",
    img: phala,
  },
  {
    url: "https://subsocial.network/",
    img: subsocial,
  },
  {
    url: "https://www.litentry.com/",
    img: litentry,
  },
  {
    url: "https://crust.network/",
    img: crust,
  },
  {
    url: "https://polkabase.com/",
    img: polkabase,
  },
  {
    url: "https://darwinia.network/",
    img: darwinia,
  },
  {
    url: "https://meri.co/",
    img: merico,
  },
  {
    url: "https://bifrost.finance/",
    img: bifrost,
  },
  {
    url: "https://stafi.io/",
    img: stafi,
  },
  {
    url: "https://dorahacks.com/",
    img: dorahacks,
  },
];

export default function () {
  return (
    <div className="pt-120px pb-80px">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1 ">Meet our Partners</h2>
        <p className="text-gray-300 mb-8">
          Molestie eget lacus nisi, aliquet tincidunt tristique turpis.
        </p>
        <div className="flex flex-wrap justify-center">
          {Partners.map((friend, idx) => {
            return (
              <a href={friend.url} key={idx} target="_blank" rel="noreferrer">
                <img
                  className="m-4"
                  src={friend.img}
                  alt=""
                  width={150}
                  height={50}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
