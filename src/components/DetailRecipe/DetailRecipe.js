import styled from "styled-components";
import { COLORS } from "../../constants";
import { Section } from "../ThemeRecipes/ThemeRecipes";

const Title = styled.span`
  position: relative;
  width: 40%;
  line-height: 1.3;
  padding: 4rem;
  font-weight: 1000;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-align: center;
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 60px;
    height: 2px;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    background-color: ${COLORS.primary};
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
`;

const Ingredients = styled.div`
  background-color: ${COLORS.gray[100]};
  width: 470px;
  margin: 0 1rem;
  position: relative;
  h4 { 
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3;
    color: #1b5b4a;
  }
  ul {
    padding: 2rem 4rem;
    list-style-type: disc;
  }
  li {
    font-weight: 600;
    line-height: 2.2;
  }
`;

const Instructions = styled.div`
  background-color: ${COLORS.gray[100]};
  width: 1170px;
  margin: 0 1rem;
  padding: 1rem;
  position: relative;
  p {
    font-weight: bold;
    text-align: center;
    line-height: 2.2;
  }
`;

const SubTitle = styled.h1`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  padding: 4rem;
  font-weight: bold;
  font-size: normal;
  letter-spacing: 0.25em;
  text-align: center;
  color: #1b5b4a;
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 30px;
    height: 2px;
    left: 50%;
    bottom: 45px;
    transform: translateX(-50%);
    background-color: ${COLORS.primary};
  }
`;

const Video = styled.div`
`;

const DetailRecipe = () => {
  return (
    <Section>
      <Title>Lorem ipsum dolor sit amet, consectetur</Title>
      <Contents>
        <img src="https://via.placeholder.com/670x546" alt="detail recipe thumbnail" height="546"/>
        <Ingredients>
          <h4>Ingredients</h4>
          <ul>
            <li>dolor sit ametconsectetur</li>
            <li>adipiscing elit Nam pellentesque</li>
            <li>volutpat varius sit pretium in.</li>
            <li>Accumsan, sed eros, </li>
            <li>leo blandit egestas aliquam ultricies.</li>
            <li>Accumsan, sed eros, </li>
          </ul>
        </Ingredients>
      </Contents>
      <SubTitle>Youtube</SubTitle>
      <Video>
        <iframe
          width="800" height="450"
          src="https://www.youtube.com/embed/4aZr5hZXP_s"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Video>
      <SubTitle>How to Make</SubTitle>
      <Instructions>
        <p>
          Preheat oven to 350° F.<br></br>
          Spray a 9x13-inch baking pan with non-stick spray.<br></br>
          Combine soy sauce, ½ cup water, brown sugar,
          ginger and garlic in a small saucepan and cover.<br></br>
          Bring to a boil over medium heat.<br></br>
          Remove lid and cook for one minute once boiling.<br></br>
          Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth.<br></br>
          Once sauce is boiling, add mixture to the saucepan and stir to combine.<br></br>
          Cook until the sauce starts to thicken then remove from heat.<br></br>
          Place the chicken breasts in the prepared pan.<br></br> ... <br></br>
          Enjoy!
        </p>
      </Instructions>
    </Section>
  );
};

export default DetailRecipe;
