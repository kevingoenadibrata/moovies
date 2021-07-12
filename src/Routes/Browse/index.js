/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { browseContainerCss, pageTitleCss } from "./index.styles";
import axios from "axios";
import MovieCard from "../../Components/MovieCard";
import Pagination from "./Pagination";
import Loader from "../../Components/Loader";
import { useHistory, useLocation } from "react-router-dom";
import { parse, stringify } from "query-string";

const ENTRIES_PER_PAGE = 10;

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const getData = async () => {
    setIsLoading(true);
    try {
      const parsedLocation = parse(location.search);
      const requestedPage = parseInt(parsedLocation?.page);
      if (!requestedPage) {
        history.push(`?${stringify({ page: 1 })}`);
        return;
      }
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
    getData();
  }, [location.search]);

  return (
    <div css={browseContainerCss}>
      <h3 css={pageTitleCss}>Browse Moovies</h3>
      {isLoading ? (
        <Loader />
      ) : (
        movies.map((item, index) => (
          <MovieCard i={index} key={item?.imdbID} data={item} />
        ))
      )}
      <Pagination count={pageCount} current={page} />
    </div>
  );
};

export default Browse;
