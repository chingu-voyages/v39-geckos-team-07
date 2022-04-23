import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../../constants";
import useCategories from "../../hooks/useCategories";
import Icon from "../Icon";
export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const SectionTitle = styled.h3`
  width: 100%;
  margin-top: 5rem;
  padding: 4rem;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.25em;
  text-align: center;
`;
const SectionWrap = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  grid-template-areas:
    "img img"
    "main sub"
    ". .";
`;
const ImgWrapper = styled.div`
  position: relative;
  img {
    display: block;
  }
`;

const SubTitle = styled.div`
  background-color: ${COLORS.primary};
  padding: 1rem;
  width: 282px;
  text-align: center;
  color: ${COLORS.white};
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MainRecipe = styled.div`
  background-color: ${COLORS.gray[100]};
  padding: 1rem;
  position: relative;
  h4 {
    font-weight: bold;
    font-size: 3rem;
    width: 80%;
    line-height: 1.2;
  }
  a {
    position: absolute;
    color: ${COLORS.primary};
    font-size: 1.25rem;
    font-weight: bold;
    right: 20px;
    bottom: 20px;
  }
`;
const Category = styled.span`
  font-size: 1.25rem;
  color: ${COLORS.primary};
  letter-spacing: 0.1em;
`;
const Description = styled.p`
  padding: 1rem 0;
`;
const SubRecipes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SubRecipe = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0 1rem;
  }
`;
const ThemeRecipes = () => {
  return (
    <>
      <Section>
        <SectionTitle>DISCOVERY</SectionTitle>
        <SectionWrap>
          <ImgWrapper style={{ gridArea: "img" }}>
            <SubTitle>THEME RECIPES</SubTitle>
            <img
              src="https://via.placeholder.com/1000x430"
              alt="theme recipe img"
            />
          </ImgWrapper>
          <MainRecipe style={{ gridArea: "main" }}>
            <Category>dessert</Category>
            <h4>Lorem ipsum dolor sit amet</h4>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              at aliquet mattis metus. Arcu, mattis enim, mi, aliquam et turpis
              pharetra quis. Vulputate sapien ullamcorper sit urna quisque.
            </Description>
            <span>Tag</span>
            <p>Lorem, ipsum, dolor, sit, amet</p>

            <Link href="/">
              <a href="/">more</a>
            </Link>
          </MainRecipe>
          <SubRecipes style={{ gridArea: "sub" }}>
            <Link href="/">
              <a href="/">
                <SubRecipe>
                  <img
                    src="https://via.placeholder.com/200x135"
                    alt="theme recipe thumbnail"
                  />
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </SubRecipe>
              </a>
            </Link>
            <Link href="/">
              <a href="/">
                <SubRecipe>
                  <img
                    src="https://via.placeholder.com/200x135"
                    alt="theme recipe thumbnail"
                  />
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </SubRecipe>
              </a>
            </Link>
            <Link href="/">
              <a href="/">
                <SubRecipe>
                  <img
                    src="https://via.placeholder.com/200x135"
                    alt="theme recipe thumbnail"
                  />
                  <span>Lorem ipsum dolor sit amet, consectetur</span>
                </SubRecipe>
              </a>
            </Link>
          </SubRecipes>
        </SectionWrap>
      </Section>
    </>
  );
};

export default ThemeRecipes;
