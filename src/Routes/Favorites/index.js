/** @jsxImportSource @emotion/react */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import MovieCard from "../../Components/MovieCard";
import { useMyMooContext } from "../../Context/MyMooContext";
import { pageTitleCss } from "../Browse/index.styles";
import { myMoosContainerCss } from "./index.styles";

const Favorites = () => {
  const { movies } = useMyMooContext();
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const movieDataTemp = [];
    for (let i = 0; i < movies.length; i++) {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=15157d9e&i=${movies[i]}`
        );
        movieDataTemp.push(res.data);
      } catch {
        console.error("Error fetching data from OMDB");
      }
    }
    setMovieData(movieDataTemp);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [movies]);

  return (
    <div css={myMoosContainerCss}>
      <h3 css={pageTitleCss}>MyMoos</h3>
      {isLoading ? (
        <Loader />
      ) : (
        movieData.map((item, index) => (
          <MovieCard key={item?.imdbID} i={index} data={item} />
        ))
      )}
    </div>
  );
};

export default Favorites;
