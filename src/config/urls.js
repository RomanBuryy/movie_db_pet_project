export const apiKey = '5118b3b515f320b4cfe57cc9e4793445';

const baseURL = 'https://api.themoviedb.org/3';

export default baseURL;

export const urls = {
    movies: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`,
    movie: '/movie',
    genres: `/genre/movie/list?api_key=${apiKey}&language=en-US`,

}
