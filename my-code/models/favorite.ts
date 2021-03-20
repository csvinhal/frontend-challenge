import mongoose, { model, models } from 'mongoose'

interface IFavorite {
    slug: string
}

const FavoriteSchema = new mongoose.Schema({
    slug: {
        type: String,
        index: true,
        unique: true,
    },
})

export default models.Favorite ||
    model<IFavorite & mongoose.Document>('Favorite', FavoriteSchema)
