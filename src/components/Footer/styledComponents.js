import styled from "styled-components";
import { BaseInner } from "../baseComponents";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
  z-index: 2;
  padding: 1.5rem 0;
  font-size: 14px;
  border-top: 1px solid #eee;
`;

export const InnerSection = styled(BaseInner)`
  div.rights {
    display: inline-flex;
    align-items: center;
    font-weight: lighter;
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
      padding: 0px 16px;
    }
  }
`;
