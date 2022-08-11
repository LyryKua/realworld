import { ApiArticle, Article } from './Article'
import { ObjectMapper } from '../ObjectMapper'

export const articleMapper: ObjectMapper<Article, ApiArticle> = {
  toApi: () => {
    throw new Error('not implemented')
  },
  toDomain: (apiArticle) => {
    return {
      ...apiArticle,
    }
  },
}
