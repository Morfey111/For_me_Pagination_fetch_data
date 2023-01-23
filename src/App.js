import { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import "./App.css";
import Pagination from "./Pagination";

function App() {
  const [photos, setPhotos] = useState([]);
  const [curentPage, setCurentPAge] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);

  const url = "https://jsonplaceholder.typicode.com/photos";

  const lastIndex = curentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;

  const curentData = photos.slice(firstIndex, lastIndex);

  console.log(curentData);

  const datafromApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPhotos(data);
  };

  useEffect(() => {
    datafromApi();
  }, []);

  return (
    <div>

      <div className="container-card">
        {curentData.map((curentPhoto) => {
          return (
            <div key={curentPhoto.id}>
              <PhotoCard curentPhoto={curentPhoto} />
            </div>
          );
        })}
      </div>
      <Pagination
        photos={photos.length}
        postsPerPage={postsPerPage}
        setCurentPAge={setCurentPAge}
      />
    </div>
  );
}

export default App;
