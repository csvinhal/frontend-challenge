import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { title } = req.query
        const response = await fetch(
            `http://www.omdbapi.com/?s=${title}&apikey=${process.env.API_KEY}`,
        )
        const movie = await response.json()
        return res.status(200).json(movie)
    }
    return res.status(400)
}

export default handler
