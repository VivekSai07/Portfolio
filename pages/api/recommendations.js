import { recommendationCard } from '../../constants/data/recommendations'

export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}