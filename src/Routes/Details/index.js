/** @jsxImportSource @emotion/react */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToMyMoo from "./AddToMyMoo";
import Loader from "../../Components/Loader";
import { subtitleCss } from "../../Constants/Typography.styles";
import DetailsElement from "./DetailsElement";
import {
  detailsContainerCss,
  innerTitleContainerCss,
  titleContainerCss,
} from "./index.styles";
import Poster from "./Poster";

const Details = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=15157d9e&i=${movieId}`
      );
      setMovie(res.data);
    } catch {
      console.error("Error fetching data from OMDB");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div css={detailsContainerCss}>
        <Loader />
      </div>
    );
  }

  return (
    <div css={detailsContainerCss}>
      <div css={titleContainerCss}>
        <div css={innerTitleContainerCss}>
          <h2>{movie?.Title}</h2>
          <p css={subtitleCss}>
            {movie?.Genre} - {movie?.Year}
          </p>
        </div>
        <div>
          <AddToMyMoo movieId={movieId} />
        </div>
      </div>
      <Poster url={movie?.Poster} />
      <DetailsElement title="IMDb Rating" value={movie?.imdbRating} />
      <DetailsElement title="Plot" value={movie?.Plot} />
      <DetailsElement title="Director" value={movie?.Director} />
      <DetailsElement title="Writer" value={movie?.Writer} />
      <DetailsElement title="Featured Casts" value={movie?.Actors} />
    </div>
  );
};

export default Details;
