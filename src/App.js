const App = () => {
  const movie1 = {
    Title: "The Lion King",
    Year: "2019",
    Runtime: "118 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  };

  return (
    <div>
      <div className=" border  inline-block bg-gray-600 p-4 m-4">
        <img src={movie1.Poster} alt="" />
        <div className="text-center font-serif text-lg text-red-500 capitalize">
          <h1>{movie1.Title}</h1>
          <h3>{movie1.Year}</h3>
          <h4>{movie1.Runtime}</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
