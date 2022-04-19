// call api

const BASE_PATH = "https://www.themealdb.com/api/json/v1/1";

export function getCategories() {
  return fetch(`${BASE_PATH}/list.php?c=list`).then((response) =>
    response.json()
  );
}
