/** @jsxImportSource @emotion/react */

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../Constants/Colors";
import { subtitleCss, titleCss } from "../Constants/Typography.styles";
import { useMyMooContext } from "../Context/MyMooContext";
import {
  buttonContainerCss,
  getCardCss,
  getPosterCss,
  innerCardCss,
} from "./MovieCard.styles";

const MovieCard = ({ data, i }) => {
  const history = useHistory();
  const { checkIfMovieExists } = useMyMooContext();

  return (
    <div css={getCardCss(i)} onClick={() => history.push(`/m/${data.imdbID}`)}>
      <div css={getPosterCss(data.Poster)}></div>
      <div css={innerCardCss}>
        <h4 css={titleCss}>{data.Title}</h4>
        <p css={subtitleCss}>
          {data.Year} - {data.Type}
        </p>
      </div>
      <div css={buttonContainerCss}>
        {checkIfMovieExists(data.imdbID) ? (
          <FontAwesomeIcon
            icon={faHeartSolid}
            size="lg"
            color={colors.bluePrimary}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            color={colors.bluePrimary}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
