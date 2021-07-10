/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { browseContainerCss, pageTitleCss } from "./index.styles";
import axios from "axios";
import MovieCard from "../../Components/MovieCard";
import Pagination from "./Pagination";
import Loader from "../../Components/Loader";

const ENTRIES_PER_PAGE = 10;

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (requestedPage) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=15157d9e&s=Cow&page=${requestedPage}`
      );
      setMovies(res.data.Search);
      setPage(requestedPage);
      setPageCount(Math.floor(res.data.totalResults / ENTRIES_PER_PAGE));
    } catch {
      console.error("Error fetching data from OMDB");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(1);
  }, []);

  const onPageClick = (i) => {
    if (i >= 1 && i <= pageCount) getData(i);
  };

  return (
    <div css={browseContainerCss}>
      <h3 css={pageTitleCss}>Browse Moovies</h3>
      {isLoading ? (
        <Loader />
      ) : (
        movies.map((item) => <MovieCard key={item?.imdbID} data={item} />)
      )}
      <Pagination count={pageCount} current={page} onPageClick={onPageClick} />
    </div>
  );
};

export default Browse;
