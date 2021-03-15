import { MovieResponse } from './movie'

export interface FetchMoviesState {
    loading: boolean
    data: MovieResponse
    error: any
}
