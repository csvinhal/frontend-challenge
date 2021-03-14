import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { title } = req.query
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${title}&apikey=${process.env.API_KEY}`,
        )
        return res.status(200).json(response.data)
    }
    return res.status(400)
}

export default handler
