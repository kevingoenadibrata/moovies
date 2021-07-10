/** @jsxImportSource @emotion/react */

import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useMyMooContext } from "../../Context/MyMooContext";
import { buttonIconCss } from "./index.styles";
import { activeButtonCss, buttonCss } from "./AddToMyMoo.styles";

const AddToMyMoo = ({ movieId }) => {
  const { checkIfMovieExists, addMovie, removeMovie, movies } =
    useMyMooContext();
  const [exists, setExists] = useState(checkIfMovieExists(movieId));

  const handleClickAddToMyMoo = () => {
    if (exists) removeMovie(movieId);
    else addMovie(movieId);
  };

  useEffect(() => {
    setExists(checkIfMovieExists(movieId));
  }, [movies, movieId, checkIfMovieExists]);

  if (exists) {
    return (
      <div>
        <button css={activeButtonCss} onClick={handleClickAddToMyMoo}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <button css={buttonCss} onClick={handleClickAddToMyMoo}>
        <FontAwesomeIcon icon={faPlus} css={buttonIconCss} />
        Add to MyMoo
      </button>
    </div>
  );
};

export default AddToMyMoo;
