import styled from "styled-components";
import { BaseInner } from "../baseComponents";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  z-index: 2;
  padding: 1.5rem 0;
  font-size: 14px;

  background: #000;
`;

export const InnerSection = styled(BaseInner)`
  div.rights {
    display: inline-flex;
    align-items: center;

    font-size: 0.875rem;
    line-height: 1.5;

    color: rgba(255, 255, 255, 0.32);
  }

  div > a {
    text-decoration: none;
    color: #000;
  }

  div.contacts {
    display: inline-flex;
    align-items: center;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    display: inline-flex;
    & > li {
      padding: 0 16px;
    }
  }
`;
