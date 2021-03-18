import { Movie } from './movie'

export interface MovieDetails extends Movie {
    rated: string
    runtime: string
    genre: string[]
    director: string[]
    plot: string
    actors: string[]
    imdbRate: string
    rottenRate: string
}

export interface DetailResponse {
    Title: string
    Year: string
    imdbID: string
    Poster: string
    Rated: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Ratings: { Source: string; Value: string }[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: 'True' | 'False'
}
