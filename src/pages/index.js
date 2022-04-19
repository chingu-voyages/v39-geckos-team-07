import React from "react";
import Head from "next/head";
import ThemeRecipes from "../components/ThemeRecipes/ThemeRecipes";

const HomePage = () => {
  return (
    <>
      <Head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        <title>Tonight Dining</title>
      </Head>
      <div>HomePage</div>
      <ThemeRecipes />
    </>
  );
};

export default HomePage;
