import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import Logo from "../Icon/Logo";

const FooterWrapper = styled.div`
  margin-top: 150px;
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: var(--color-white);
  background-color: var(--color-primary);
`;

const Top = styled.div`
  text-transform: uppercase;
  display: flex;
`;

const Bottom = styled.div``;

const ExternalLink = styled.a`
  display: flex;
  justify-content: center;
`;

const Copyright = styled.div`
  color: var(--color-gray-100);
  font-size: 0.85rem;
  margin-top: 8px;
`;

const Subtitle = styled.div`
  padding: 0px 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Top>
        <Logo width={21} height={26} white={true}/>
        <Subtitle>find dining</Subtitle>
      </Top>
      <Bottom>
        <ExternalLink
          href="https://github.com/chingu-voyages/v39-geckos-team-07"
          target="_blank"
        >
          <Icon id="github" size={24} />
        </ExternalLink>
        <Copyright>
          Copyright 2022. Chingu Voyage Geckos 07. All rights reserved.
        </Copyright>
      </Bottom>
    </FooterWrapper>
  );
};

export default Footer;
