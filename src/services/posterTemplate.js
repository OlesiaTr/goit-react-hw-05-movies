export const posterTemplate = poster => {
  if (!poster) return 'https://www.movienewz.com/img/films/poster-holder.jpg';
  return `https://image.tmdb.org/t/p/w300/${poster}`;
};
