import { useState } from "react";
import SingleImage from "./SingleImage";

const Home = () => {
  const [images, setImages] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    fetch(
      `https://pixabay.com/api/?key=37751582-2d5c45858694200b38b39ca6c&q=${name}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      });
  };

  return (
    <div>
      <h1 className="text-center text-sky-500 capitalize text-4xl mt-4">
        search image
      </h1>
      <form onSubmit={handleSearch} className="text-center my-5">
        <input
          type="text"
          name="name"
          className="border border-blue-800 p-2 rounded-lg me-3"
        />
        <input
          type="submit"
          value="Search"
          className="px-4 py-2 border border-sky-800 rounded-lg"
        />
      </form>

      {images.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, i) => (
            <SingleImage key={i} image={image}></SingleImage>
          ))}
        </div>
      ) : (
        <div className="text-center capitalize text-2xl text-cyan-400">
          Please search something.
        </div>
      )}
    </div>
  );
};

export default Home;
