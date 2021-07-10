/** @jsxImportSource @emotion/react */

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../Constants/Colors";
import { subtitleCss } from "../Constants/Typography.styles";
import { useMyMooContext } from "../Context/MyMooContext";
import {
  buttonContainerCss,
  cardCss,
  getPosterCss,
  innerCardCss,
} from "./MovieCard.styles";

const MovieCard = ({ data }) => {
  const history = useHistory();
  const { checkIfMovieExists } = useMyMooContext();

  return (
    <div css={cardCss} onClick={() => history.push(`/m/${data.imdbID}`)}>
      <div css={getPosterCss(data.Poster)}></div>
      <div css={innerCardCss}>
        <p>{data.Title}</p>
        <h4 css={subtitleCss}>
          {data.Year} - {data.Type}
        </h4>
      </div>
      <div css={buttonContainerCss}>
        {checkIfMovieExists(data.imdbID) ? (
          <FontAwesomeIcon
            icon={faHeartSolid}
            size="lg"
            color={colors.pinkPrimary}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            color={colors.pinkPrimary}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
