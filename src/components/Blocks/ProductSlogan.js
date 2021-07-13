import React from "react";
import styled from "styled-components";

const Detail = styled.p`
  font-size: 1rem;
  color: rgba(29, 37, 60, 0.64);
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
      <Detail>Molestie eget lacus nisi, aliquet tincidunt.</Detail>
    </div>
  );
}
