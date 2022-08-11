export type ApiArticle = {
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

export type Article = {
  slug: string
  title: string
  tagList: string[]
  favoritesCount: number
  description: string
  body: string
  author: {
    username: string
    image: string
  }
  createdAt: Date
  updatedAt: Date
}
