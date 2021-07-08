import styled from "styled-components";
import { BaseInner } from "../baseComponents";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 2;
  //padding-top: 16px;
`;

export const InnerSection = styled(BaseInner)`
  @media screen and (max-width: 600px) {
    flex-direction: column;
    ul {
      margin: 0;
      padding: 0;
    }
  }

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

    & > li {
      display: flex;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      &:not(:first-of-type) {
        margin-left: 20px;
      }

      & > svg {
        margin-left: 8px;
        font-size: 0.8em;
        color: rgba(29, 37, 60, 0.64);
      }

      a {
        text-decoration: none;
        color: #2e343d;
        font-weight: 600;
        font-size: 1rem;
        line-height: 28px;
      }

      &.tools {
        position: relative;
      }
    }
  }
`;
