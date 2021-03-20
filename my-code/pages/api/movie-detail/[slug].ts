import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import Favorite from '../../../models/favorite'
import { DetailResponse, MovieDetails } from '../../../models/movieDetails'
import dbConnect from '../../../utils/mongo'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req

    switch (method) {
        case 'GET':
            return handleGet(req, res)
        case 'POST':
            return handlePost(req, res)
    }
}

const handleGet = async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    const { slug } = req.query

    const response = await axios.get<DetailResponse>(
        `http://www.omdbapi.com/?i=${slug}&apikey=${process.env.API_KEY}&plot=full`,
    )

    if (hasError(response.data.Response)) {
        return res.status(500).json(response.data)
    }

    const parsedMovie = await parseMovie(response.data)

    return res.status(200).json(parsedMovie)
}

const hasError = (response: 'True' | 'False'): boolean => {
    return response === 'False'
}

const parseMovie = async (movie: DetailResponse): Promise<MovieDetails> => {
    const rottenRation = movie.Ratings.find(rate =>
        rate.Source.toLowerCase().includes('rotten'),
    )
    const favorite = await getFavorite(movie.imdbID)
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
        favorite,
    }
}

const getFavorite = async (slug: string): Promise<boolean> => {
    await dbConnect()
    return await Favorite.exists({ slug })
}

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query
    const { favorite } = req.body
    await dbConnect()

    if (favorite) {
        await Favorite.findOneAndRemove({ slug: slug as string })
        return res.status(200).json({ favorite: false })
    }

    await Favorite.create({ slug: slug as string })
    return res.status(200).json({ favorite: true })
}

export default handler
