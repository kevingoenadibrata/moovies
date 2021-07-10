/** @jsxImportSource @emotion/react */

import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { stringify } from "query-string";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  getCaretCss,
  getPageElementCss,
  paginationContainerCss,
} from "./Pagination.styles";

const PAGE_PAD = 4;

const Pagination = ({ count, current }) => {
  const history = useHistory();

  const handlePageClick = (i) => {
    if (i >= 1 && i <= count) {
      history.push(`?${stringify({ page: i })}`);
    }
  };

  const factoryElement = (val, active) => (
    <p
      css={getPageElementCss(active)}
      onClick={() => (active ? null : handlePageClick(val))}
    >
      {val}
    </p>
  );

  const getNumbers = () => {
    //case where the number of pages is smaller than padding
    if (count <= PAGE_PAD) {
      let arr = [];
      for (let i = 1; i <= count; i++) {
        arr.push(i);
      }
      return arr.map((item) => factoryElement(item, item === current));
    }

    //case where active is on the left part
    if (current <= PAGE_PAD - 1) {
      let arr = [];
      for (let i = 1; i <= PAGE_PAD; i++) {
        arr.push(i);
      }
      arr.push("...");
      arr.push(count);
      return arr.map((item) => factoryElement(item, item === current));
    }

    //case where active is on the right part
    if (current >= count - PAGE_PAD + 1) {
      let arr = [];
      arr.push(1);
      arr.push("...");
      for (let i = count - PAGE_PAD; i <= count; i++) {
        arr.push(i);
      }
      return arr.map((item) => factoryElement(item, item === current));
    }

    //case where active is on the middle part
    let arr = [];
    arr.push(1);
    arr.push("...");
    arr.push(current - 1);
    arr.push(current);
    arr.push(current + 1);
    arr.push("...");
    arr.push(count);

    return arr.map((item) => factoryElement(item, item === current));
  };

  return (
    <div css={paginationContainerCss}>
      <FontAwesomeIcon
        icon={faCaretLeft}
        css={getCaretCss(current === 1)}
        onClick={() => handlePageClick(current - 1)}
      />
      {getNumbers()}
      <FontAwesomeIcon
        icon={faCaretRight}
        css={getCaretCss(current === count)}
        onClick={() => handlePageClick(current + 1)}
      />
    </div>
  );
};

export default Pagination;
