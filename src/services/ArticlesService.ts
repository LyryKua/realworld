const ARTICLES_URL = 'https://api.realworld.io/api/articles'

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: null // TODO: add type
    image: string
    following: boolean
  }
  createdAt: Date
  updatedAt: Date
}

export type ListArticles = {
  articles: Article[]
  articlesCount: number
}

export class ArticlesService {
  async listArticles(): Promise<ListArticles> {
    const response = await fetch(ARTICLES_URL)
    return response.json()
  }
}
