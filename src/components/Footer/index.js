import React from "react";
import Github from "./github.svg";
import Email from "./email.svg";
import Telegram from "./tg.svg";
import Twitter from "./twitter.svg";
import SubSocial from "./subsocial.svg";
import styled, { css } from "styled-components";
import ExternalLink from "../ExternalLink";
import Logo from "./opensquare-footer-logo.svg";

const p_16_normal = css`
  font-family: Inter, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const p_16_semibold = css`
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Wrapper = styled.footer`
  flex: 0 0 auto;
  background: #191e27;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 80px 0;
  @media screen and (max-width: 1144px) {
    padding: 80px 32px;
  }
  @media screen and (max-width: 900px) {
    padding: 40px 20px 20px;
    flex-direction: column;
    > :not(:first-child) {
      margin-top: 40px;
    }
  }
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const LeftWrapper = styled.div`
  display: grid;
  row-gap: 32px;
  column-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const List = styled.div`
  width: 160px;
`;

const Label = styled.div`
  ${p_16_semibold};
  margin-bottom: 24px;
  color: #ffffff;
`;

const ItemsWrapper = styled.div`
  > :not(:first-child) > * {
    margin-top: 16px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  ${p_16_normal};
  color: rgba(255, 255, 255, 0.65);
  > svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  &:hover {
    color: rgb(255, 255, 255);
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > svg {
    width: 68px;
    height: 48px;
    margin-bottom: 120px;
  }
  > div {
    text-align: right;
    ${p_16_normal};
    color: rgba(255, 255, 255, 0.35);
  }
  @media screen and (max-width: 900px) {
    align-items: flex-start;
    > svg {
      margin-bottom: 0;
    }
    > svg {
      text-align: left;
    }
  }
`;

const BottomWrapper = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.35);
  padding-bottom: 20px;
  text-align: center;
`;

export const FOOTER_ITEMS = [
  {
    label: "Product",
    items: [
      { name: "doTreasury", link: "https://www.dotreasury.com" },
      { name: "Statescan", link: "https://statescan.io" },
      { name: "CoinAsk", link: "https://www.coinask.io" },
      { name: "Subsquare", link: "https://www.subsquare.io" },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        name: "Lightpaper",
        link: "https://github.com/opensquare-network/papers",
      },
      {
        name: "Media Kits",
        link: "https://drive.google.com/drive/folders/1nA6PTJJYfnpvB8wu9cgQaHopMRM4bqQg?usp=sharing",
      },
    ],
  },
  {
    label: "Social Links",
    items: [
      {
        name: "Github",
        icon: "github.svg",
        link: "https://github.com/opensquare-network",
      },
      {
        name: "Telegram",
        icon: "telegram.svg",
        link: "https://t.me/opensquare",
      },
      {
        name: "Twitter",
        icon: "twitter.svg",
        link: "https://twitter.com/OpensquareN",
      },
      {
        name: "Subsocial",
        icon: "subsocial.svg",
        link: "https://app.subsocial.network/@opensquare",
      },
    ],
  },
  {
    label: "Contact",
    items: [
      { name: "Email", icon: "mail.svg", link: "mailto:hi@opensquare.network" },
    ],
  },
];

export default function Footer() {
  const iconMap = new Map([
    ["github.svg", <Github />],
    ["telegram.svg", <Telegram />],
    ["twitter.svg", <Twitter />],
    ["subsocial.svg", <SubSocial />],
    ["mail.svg", <Email />],
  ]);

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <LeftWrapper>
            {FOOTER_ITEMS.map((item, index) => (
              <List key={index}>
                <Label>{item.label}</Label>
                <ItemsWrapper>
                  {item.items.map((item, index) => (
                    <ExternalLink href={item.link} key={index}>
                      <Item>
                        {item.icon && iconMap.get(item.icon)}
                        {item.name}
                      </Item>
                    </ExternalLink>
                  ))}
                </ItemsWrapper>
              </List>
            ))}
          </LeftWrapper>
          <RightWrapper>
            <Logo />
          </RightWrapper>
        </ContentWrapper>
        <BottomWrapper>
          {`© ${new Date().getFullYear()} OpenSquare. All Rights Reserved.`}
        </BottomWrapper>
      </Container>
    </Wrapper>
  );
}
