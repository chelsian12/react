const App = () => {
  const movie1 = {
    Title: "The Lion King",
    Cast: [
      "Donald Glover",
      "Seth Rogen",
      "Chiwetel Ejiofor",
      "Alfre Woodard",
      "Billy Eichner",
      "John Kani",
      "John Oliver",
      "Beyoncé Knowles-Carter",
      "James Earl Jones",
    ],
    Director: "Jon Favreau",
    Producer: "Jon Favreau, Jeffrey Silver, Karen Gilchrist",
    Ratings: "6.8",
    Year: "2019",
    Runtime: "118 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  };

  return (
    <div>
      <div className=" rounded-xl flex-col justify-center  items-center bg-[#1F1F21] p-4  h-600 w-300 ml-80 m-2">
        <img
          className="rounded-xl h-350 w-full object-fill"
          src={movie1.Poster}
          alt=""
        />
        <div className=" text  text-sm text-white p-2 capitalize  break-normal">
          <h1>Title: {movie1.Title}</h1>
          <h3>Cast: {movie1.Cast.join(", ")}</h3>
          <h3>Director: {movie1.Director}</h3>
          <h3>Producer: {movie1.Producer}</h3>
          <h3>Ratings: {movie1.Ratings}</h3>
          <h3>Year: {movie1.Year}</h3>
          <h3>Runtime: {movie1.Runtime}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
