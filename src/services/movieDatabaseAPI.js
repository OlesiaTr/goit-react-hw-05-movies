// Utils
import axios from 'axios';
import { posterTemplate } from './posterTemplate';

// Setups
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  api_key: process.env.REACT_APP_MOVIE_DATABASE,
  language: 'en-US',
  include_adult: false,
};

// HTTP requests
export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day?', { params });
  return normalizedData(data.results);
};

export const getMovieByName = async query => {
  const { data } = await axios.get('/search/movie?', {
    params: { query, ...params },
  });
  return normalizedData(data.results);
};

export const getPrimaryInfo = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  const {
    id,
    original_title,
    poster_path,
    title,
    vote_average,
    overview,
    genres,
  } = data;

  return {
    id,
    title: title ?? original_title,
    poster: posterTemplate(poster_path),
    vote: vote_average ? vote_average.toFixed(1) : 'No score yet',
    overview: overview ? overview : "Sorry, we don't have an overview yet",
    genres: genres
      ? genres.map(genre => genre.name).join(', ')
      : "Genres weren't added yet",
  };
};

export const getCastInfo = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?`, { params });
  return normalizedCast(data.cast);
};

export const getReviewsInfo = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?`, { params });
  return data.results;
};

const normalizedData = movies =>
  movies.map(
    ({
      id,
      original_title,
      poster_path,
      title,
      vote_average,
      overview,
      genres,
    }) => ({
      id,
      title: title ?? original_title,
      poster: posterTemplate(poster_path),
      vote: vote_average ? vote_average.toFixed(1) : 'No score yet',
      overview: overview ? overview : "Sorry, we don't have an overview yet",
      genres: genres
        ? genres.map(genre => genre.name).join(', ')
        : "Genres weren't added yet",
    })
  );

const normalizedCast = cast =>
  cast.map(({ id, original_name, profile_path, character }) => ({
    id,
    name: original_name,
    poster: posterTemplate(profile_path),
    character,
  }));
