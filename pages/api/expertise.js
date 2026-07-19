import { expertise } from '../../constants/data/expertise'

export default function handler(req, res) {
    res.status(200).json(expertise)
}
