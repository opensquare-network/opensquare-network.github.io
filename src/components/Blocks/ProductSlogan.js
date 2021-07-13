import React from "react";
import styled from "styled-components";

const Detail = styled.p`
  font-size: 18px;
  letter-spacing: 0.12px;
  text-align: center;
  line-height: 1.5;
`;

export default function ProductSlogan() {
  return (
    <div>
      <h3 className="h4-24-bold md:h3-36-bold text-dark-major mb-1 md:mb-4">
        We build for collaboration
      </h3>
      <Detail className="text-dark-minor">
        Molestie eget lacus nisi, aliquet tincidunt.
      </Detail>
    </div>
  );
}
