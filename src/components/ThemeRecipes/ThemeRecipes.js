import { useQuery } from "react-query";
import styled from "styled-components";
import { getCategories } from "../../api";

const ThemeRecipes = () => {
  const { data: categories, isLoading: LoadCT } = useQuery(
    ["categories"],
    getCategories
  );

  return <></>;
};

export default ThemeRecipes;
