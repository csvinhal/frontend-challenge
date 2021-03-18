import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { DetailResponse, MovieDetails } from '../../../models/movieDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { slug } = req.query

        const response = await axios.get<DetailResponse>(
            `http://www.omdbapi.com/?i=${slug}&apikey=${process.env.API_KEY}&plot=full`,
        )

        if (hasError(response.data.Response)) {
            return res.status(500).json(response.data)
        }

        const parsedMovie = parseMovie(response.data)

        return res.status(200).json(parsedMovie)
    }
}

function hasError(response: 'True' | 'False'): boolean {
    return response === 'False'
}

function parseMovie(movie: DetailResponse): Partial<MovieDetails> {
    const rottenRation = movie.Ratings.find(rate =>
        rate.Source.toLowerCase().includes('rotten'),
    )
    return {
        title: movie.Title,
        imdb: movie.imdbID,
        year: movie.Year,
        poster: movie.Poster.includes('http')
            ? movie.Poster
            : `/${movie.Poster}`,
        rated: movie.Rated,
        runtime: movie.Runtime,
        plot: movie.Plot,
        actors: movie.Actors.split(','),
        genre: movie.Genre.split(','),
        director: movie.Director.split(','),
        imdbRate: `${movie.imdbRating}/10`,
        rottenRate: rottenRation ? `${rottenRation.Value}` : null,
    }
}

export default handler
