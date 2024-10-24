import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import Specie from "./Specie";
import InfiniteScroll from "react-infinite-scroller";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const InfiniteSpecie = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["sw-specie"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.next || undefined;
    },
  });

  if (isLoading) {
    return <div>loading....</div>;
  }
  if (isError) {
    return <div>Error! {error.toString()}</div>;
  }
  return (
    <>
      {" "}
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
      >
        {data.pages.map((pageData) => {
          return pageData.results.map((specie) => {
            return (
              <Specie
                key={specie.language}
                language={specie.language}
                averageLifeSpan={specie.average_lifespanpeople}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteSpecie;
