import React from "react";

function PhotoCard({ curentPhoto }) {
  return (
    <div className="card">
      <img src={curentPhoto.thumbnailUrl} alt={curentPhoto.title} />
      <h3>{curentPhoto.title}</h3>
    </div>
  );
}

export default PhotoCard;
