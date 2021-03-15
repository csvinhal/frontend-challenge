import { MovieResponse } from './movie'

export interface FetchMoviesError {
    title: string
    subtitle: string
}

export interface FetchMoviesState {
    loading: boolean
    data: MovieResponse
    error: FetchMoviesError
}
