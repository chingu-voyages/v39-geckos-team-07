import React from "react";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import useCategories, { getCategories } from "../hooks/useCategories";

const HomePage = () => {
  const { data: categories } = useCategories();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Tonight Dining</title>
      </Head>
      <div>HomePage</div>
      {/* <ThemeRecipes /> */}
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("categories", getCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;
