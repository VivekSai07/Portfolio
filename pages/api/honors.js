import { honor } from '../../constants/data/honors'

export default function handler(req, res) {
    res.status(200).json(honor)
}
