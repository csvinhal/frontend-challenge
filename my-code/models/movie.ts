export interface Movie {
    title: string
    imdb: string
    year: string
    poster: string
}

export interface MovieResponse {
    movies?: Movie[]
    totalResults?: string
}

export interface SearchResponse {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export interface OmdbMovieResponse {
    Search?: SearchResponse[]
    totalResults?: string
    Error?: string
    Response: 'True' | 'False'
}
