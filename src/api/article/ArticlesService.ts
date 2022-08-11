import { ListArticles } from './Article'
import { articleMapper } from './articleMapper'

const ARTICLES_URL = 'https://api.realworld.io/api/articles'

export class ArticlesService {
  async listArticles(): Promise<ListArticles> {
    const response = await fetch(ARTICLES_URL)
    const { articles, articlesCount} = await response.json()

    return {
      articles: articles.map(articleMapper.toDomain),
      articlesCount,
    }
  }
}
