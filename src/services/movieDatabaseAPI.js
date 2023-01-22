// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  api_key: `${process.env.REACT_APP_MOVIE_DATABASE}`,
  language: 'en-US',
  include_adult: false,
};

// HTTP requests
export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day?', { params });
  return data;
};

export const getMovieByName = async query => {
  const { data } = await axios.get('/search/movie?', {
    params: { query, ...params },
  });
  return data;
};

export const getPrimaryInfo = async id => {
  const { data } = await axios.get(`/movie/${id}`, { params });
  return data;
};

export const getCastInfo = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?`, { params });
  return data;
};

export const getReviewsInfo = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?`, { params });
  return data;
};
