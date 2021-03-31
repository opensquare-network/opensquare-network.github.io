import React from "react";
import styled from "styled-components";
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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background: #fbfbfb;

  padding: 3rem 0;
`;

const InnerSection = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    color: #1d253c;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.5;
    margin: 0 0 1.5rem;
    text-align: center;
  }

  & > section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1128px;

    & > a {
      margin: 0 12px;
    }
  }
`;

const friends = [
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
    <Wrapper>
      <InnerSection>
        <h2>Meet our Friends</h2>
        <section>
          {friends.map((friend, idx) => {
            return (
              <a href={friend.url} key={idx} target="_blank" rel="noreferrer">
                <img src={friend.img} alt="" height={54} />
              </a>
            );
          })}
        </section>
      </InnerSection>
    </Wrapper>
  );
}
