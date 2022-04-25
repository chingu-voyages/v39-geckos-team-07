import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { Section, SectionTitle } from "../ThemeRecipes/ThemeRecipes";

const SectionWrap = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;
`;
const Item = styled.a`
  display: block;
  padding: 1.5rem 0;
  text-align: center;
`;
const Category = styled.span`
  font-size: 14px;
  color: ${COLORS.primary};
  letter-spacing: 0.1em;
`;
const Title = styled.span`
  position: relative;
  display: block;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  font-weight: bold;
  line-height: 1.3;
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 60px;
    height: 2px;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    background-color: ${COLORS.primary};
  }
`;

const LookupRecipes = () => {
  return (
    <>
      <Section>
        <SectionTitle>LOOKUP RECIPES</SectionTitle>
        <SectionWrap>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img
                src="https://via.placeholder.com/467x260"
                alt="lookup recipe thumbnail"
              />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
          <Link href="/">
            <Item href="/">
              <img src="https://via.placeholder.com/467x260" />
              <Category>CATEGORY</Category>
              <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            </Item>
          </Link>
        </SectionWrap>
      </Section>
    </>
  );
};

export default LookupRecipes;
