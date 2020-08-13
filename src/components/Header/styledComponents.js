import styled from "styled-components";
import { BaseInner } from "../baseComponents";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-top: 30px;
  z-index: 2;
`;

export const InnerSection = styled(BaseInner)`
  & > a {
    display: flex;
    align-items: center;
  }

  ul,
  li {
    list-style: none;
  }

  ul {
    display: flex;

    li {
      &:not(:first-of-type) {
        margin-left: 20px;
      }

      a {
        text-decoration: none;
        color: #000;
        font-size: 12px;
      }
    }
  }
`;
