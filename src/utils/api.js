export const api_key = process.env.NEXT_PUBLIC_API_KEY;
export const image_url = process.env.NEXT_PUBLIC_API_URL;
export const tumUrl =
  "	https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/894637e3-da8e-43f2-a347-58a867e97a70/MA-en-20220103-popsignuptwoweeks-perspective_alpha_website_small.jpg";
const URL = {
  original: `/discover/tv/?api_key=${api_key}&with_networks=213`,
  trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  romanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  comedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  horroeMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  documentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};
export default URL;
