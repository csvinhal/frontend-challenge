import { MovieResponse } from '../models/movie'
import { MovieDetails } from '../models/movieDetails'
import axios from '../utils/axios'

export const getMovies = (title: string) => {
    return axios.get<MovieResponse>(`/movies`, {
        params: { title },
    })
}

export const getMovieDetail = (slug: string) => {
    return axios.get<MovieDetails>(`/movie-detail/${slug}`)
}

export const updateMovieFavorite = (slug: string, favorite: boolean) => {
    return axios.post<MovieDetails>(`/movie-detail/${slug}`, { favorite })
}
