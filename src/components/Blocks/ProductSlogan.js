import React from "react";
import styled from "styled-components";

const InnerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  p {
    margin: 0;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`;

// const Title = styled.h3`
//   text-align: center;
//   min-width: 204px;
//   font-weight: 600;
//   font-size: 1.75rem;
//   color: #1d253c;
//   letter-spacing: 0.2px;
//   line-height: 1.5;
// `;

const Detail = styled.p`
  font-size: 1rem;
  color: rgba(29, 37, 60, 0.64);
  letter-spacing: 0.12px;
  text-align: center;
  line-height: 1.5;
`;

export default function () {
  return (
    <InnerSection>
      <h3 className="title text-3xl font-semibold text-gray-900">
        We build for collaboration
      </h3>
      <Detail>Molestie eget lacus nisi, aliquet tincidunt.</Detail>

      {/*</style>*/}
    </InnerSection>
  );
}
