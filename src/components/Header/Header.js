import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Side />
          <Logo>Logo</Logo>
        <Side>
          <ProfileButton>
            <span><Icon id="user" size={20} /></span>
            <span>my page</span>
          </ProfileButton>          
        </Side>
      </SuperHeader>
      <Nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/advanced-search">
          <a>advanced search</a>
        </Link>
        <Link href="/random-recipe">
          <a>random recipe</a>
        </Link>
      </Nav>
    </header>
  );
}

const SuperHeader = styled.div`
  display: flex;
  padding: 0 36px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
    
`;

const ProfileButton = styled.button`
  float: right;
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;

  svg {
    color: var(--color-primary);
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  color: var(--color-white);
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  padding: 16px 0;

  a {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
  }

  a:first-child {
    margin-right: auto;
  }

  a:last-child {
    margin-left: auto;
  }
`;

export default Header;