import { ListArticles } from '../types'

const ARTICLES_URL = 'https://api.realworld.io/api/articles'

export class ArticlesService {
  async listArticles(): Promise<ListArticles> {
    const response = await fetch(ARTICLES_URL)
    return response.json()
  }
}
