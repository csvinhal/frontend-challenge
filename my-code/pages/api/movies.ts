import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import {
    Movie,
    MovieResponse,
    OmdbMovieResponse,
    SearchResponse,
} from '../../models/movie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { title } = req.query
            const response = await axios.get<OmdbMovieResponse>(
                `http://www.omdbapi.com/?s=${title}&apikey=${process.env.API_KEY}`,
            )

            if (response.data.Response === 'False') {
                return res.status(500).json(response.data.Error)
            }

            const parsedData = parseResponse(response.data)
            return res.status(200).json(parsedData)
        } catch (e: any) {
            return res.status(500).json(e)
        }
    }
    return res.status(400)
}

function parseResponse(data: OmdbMovieResponse): MovieResponse {
    const parsedMovies = parseMovie(data.Search)

    return {
        movies: parsedMovies,
        totalResults: data.totalResults,
    }
}

function parseMovie(omdbMovies: SearchResponse[]): Movie[] {
    return omdbMovies.map(movie => ({
        title: movie.Title,
        imdb: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
    }))
}

export default handler
