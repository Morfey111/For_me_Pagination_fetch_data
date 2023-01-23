import React from "react";

function Pagination({ photos, postsPerPage, setCurentPAge }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(photos / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurentPAge(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
