const API_KEY = 'f93b01b73c44b40ba53413c6e5601742';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchUrl(url = '', config = {}) {
   const r = await fetch(url, config);
   return r.ok ? await r.json() : Promise.reject(new Error('Nothing found'));
};

export function fetchTrending () {
   return fetchUrl(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
   );
};
export function fetchSearch (searchQuery) {
   return fetchUrl(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
   );
};
export function fetchDetails (movieId) {
     return fetchUrl(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
   );
};
export function fetchCredits (movieId) {
     return fetchUrl(
        `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
   );
};
export function fetchReviews(movieId) {
     return fetchUrl(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
   );
};

