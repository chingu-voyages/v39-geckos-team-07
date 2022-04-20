import { useQuery } from "react-query";
import { MEALDB_BASE_PATH } from "../constants";

// export async function getCategories() {
//   const res = await fetch(`${MEALDB_BASE_PATH}/list.php?c=list`);

//   const data = await res.json();

//   return data;
// }
export async function getCategories() {
  const data = await (
    await fetch(`${MEALDB_BASE_PATH}/list.php?c=list`)
  ).json();

  return data;
}

export default function useCategories() {
  return useQuery("categories", getCategories);
}
