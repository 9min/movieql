let movies = [
  {
    id: 1,
    name: 'Star Wars - The new one',
    score: 1,
  },
  {
    id: 2,
    name: 'Avengers - The new one',
    score: 8,
  },
  {
    id: 3,
    name: 'The Godfather I',
    score: 99,
  },
  {
    id: 4,
    name: 'Logan',
    score: 2,
  },
];

export const getById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0];
}

export const getMovies = () => movies;

export const deleteMovie = (id) => {
  const clearedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > clearedMovies.length) {
    movies = clearedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
