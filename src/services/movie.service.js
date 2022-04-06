import {axiosService} from "./axios.service";
import {apiKey, urls} from "../config/urls";

export const movieService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movie}/${id}?api_key=${apiKey}&language=en-US`).then(value => value.data)
}
