import { review } from '../../constants/data/review'

export default function handler(req, res) {
    res.status(200).json(review)
}
