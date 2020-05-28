import { Product } from '../shared/types'

export interface SearchResult {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: Product
}
