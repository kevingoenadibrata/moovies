import { set, get } from "js-cookie";
import React, {
  useContext,
  createContext,
  useCallback,
  useState,
  useEffect,
} from "react";

const MyMooContext = createContext();
const useMyMooContext = () => useContext(MyMooContext);

const MyMooProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCookie = useCallback(async () => {
    setLoading(true);
    const cookieData = JSON.parse(get("movies"));
    if (!cookieData || !cookieData?.id) {
      setMovies([]);
      set("movies", { id: [] });
    } else {
      setMovies(cookieData.id);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCookie();
  }, [fetchCookie]);

  const addMovie = (id) => {
    if (!movies.includes(id)) {
      const temp = [...movies];
      temp.push(id);
      setMovies(temp);
      set("movies", { id: temp });
    }
  };

  const removeMovie = (id) => {
    if (movies.includes(id)) {
      let temp = [];
      for (let i = 0; i < movies.length; i++) {
        if (movies[i] !== id) {
          temp.push(movies[i]);
        }
      }
      setMovies(temp);
      set("movies", { id: temp });
    }
  };

  const checkIfMovieExists = (id) => {
    return movies.includes(id);
  };

  return (
    <MyMooContext.Provider
      value={{ addMovie, removeMovie, checkIfMovieExists, loading, movies }}
    >
      {children}
    </MyMooContext.Provider>
  );
};

export { MyMooProvider, useMyMooContext };
