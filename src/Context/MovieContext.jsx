import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
  return useContext(MovieContext);
};

// eslint-disable-next-line react/prop-types
export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const setMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <MovieContext.Provider value={{ selectedMovie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
