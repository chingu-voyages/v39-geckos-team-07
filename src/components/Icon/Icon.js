import React from "react";
import styled from "styled-components";
import { Menu, ChevronDown, X, GitHub, User, Search } from "react-feather";

const icons = {
  menu: Menu,
  "chevron-down": ChevronDown,
  close: X,
  github: GitHub,
  user: User,
  search: Search,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
