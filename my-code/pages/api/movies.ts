import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import Favorite from '../../models/favorite'
import {
    Movie,
    MovieResponse,
    OmdbMovieResponse,
    SearchResponse,
} from '../../models/movie'
import dbConnect from '../../utils/mongo'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { title } = req.query
            const response = await axios.get<OmdbMovieResponse>(
                `${process.env.OMDB_API}/?s=${title}&type=movie&apikey=${process.env.API_KEY}`,
            )

            if (hasError(response.data.Response)) {
                return handleError(res, response.data.Error)
            }

            const parsedData = await parseResponse(response.data)
            return res.status(200).json(parsedData)
        } catch (e: unknown) {
            return res.status(500).json({
                title: 'Ops! Something went wrong.',
                subtitle: 'Please try again later.',
            })
        }
    }
    return res.status(400)
}

function hasError(response: 'True' | 'False'): boolean {
    return response === 'False'
}

function handleError(res: NextApiResponse, error: string) {
    switch (error) {
        case 'Movie not found!':
            return res.status(404).json({
                title: "What a pity! We don't found this movie.",
                subtitle: 'Try to search for another movie.',
            })
        case 'Too many results.':
            return res.status(500).json({
                title: 'We found too many results.',
                subtitle:
                    'Please try your search again with more specific keywords.',
            })
        default:
            return res.status(500).json({
                title: 'Ops! Something went wrong.',
                subtitle: 'Please try again later.',
            })
    }
}

const parseResponse = async (
    data: OmdbMovieResponse,
): Promise<MovieResponse> => {
    const parsedMovies = await parseMovie(data.Search)

    return {
        movies: parsedMovies,
        totalResults: data.totalResults,
    }
}

const parseMovie = async (omdbMovies: SearchResponse[]): Promise<Movie[]> => {
    const imdbs = omdbMovies.map(movie => movie.imdbID)

    await dbConnect()

    const favorites = await Favorite.find({ slug: { $in: imdbs } })

    return omdbMovies.map(movie => ({
        title: movie.Title,
        imdb: movie.imdbID,
        year: movie.Year,
        poster: movie.Poster.includes('http')
            ? movie.Poster
            : `/${movie.Poster}`,
        favorite: !!favorites.find(favorite => favorite.slug === movie.imdbID),
    }))
}

export default handler
