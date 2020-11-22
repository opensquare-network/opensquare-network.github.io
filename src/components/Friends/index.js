import React from "react";
import styled from "styled-components";
import patract from "./patract.png";
import phala from "./phala.png";
import subsocial from "./subsocial.png";
import litentry from "./litentry.png";
import crust from "./crust.png";
import polkabase from "./polkabase.png";

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
`;

const friends = [
  {
    url: "https://patractlabs.com",
    img: patract,
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
];

export default function () {
  return (
    <Wrapper>
      <InnerSection>
        <h2>Meet our Friends</h2>
        <section>
          {friends.map((friend) => {
            return (
              <a href={friend.url} target="_blank" rel="noreferrer">
                <img src={friend.img} alt="" height={54} />
              </a>
            );
          })}
        </section>
      </InnerSection>
    </Wrapper>
  );
}
