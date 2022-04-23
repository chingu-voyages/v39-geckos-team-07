import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import mainSearch from "../../public/img/mainSearch_bg.jpg";

const SearchArea = styled.div`
  width: 100%;
  height: 477px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
  h2 {
    font-family: "Soak-Up-The-Sun";
    font-weight: lighter;
    text-align: center;
    font-size: 9.375rem;
    color: ${COLORS.white};
  }
  form {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    & > div {
      width: 582px;
      position: relative;
      input {
        width: 100%;
        height: 70px;
        padding: 0.5rem 4rem;
        font-size: 20px;
        border-radius: 100px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        &:focus {
          outline: none;
        }
      }
      div {
        position: absolute;
        top: 50%;
        left: 1.25rem;
        transform: translateY(-50%);
      }
    }
  }
`;
const MainSearchbar = () => {
  return (
    <>
      <SearchArea
        style={{
          backgroundSize: "cover",
          background: `url(${mainSearch}) no-repeat center`,
        }}
      >
        <div>
          <h2>Find Your Recipes</h2>
          <form>
            <div>
              <input placeholder="main ingredient" />
              <Icon id="search" size={24} color={COLORS.primary} />
            </div>
          </form>
        </div>
      </SearchArea>
    </>
  );
};

export default MainSearchbar;
