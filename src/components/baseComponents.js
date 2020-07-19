import styled from "styled-components";

export const BaseInner = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1080px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`;
