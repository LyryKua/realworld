import { selector } from 'recoil'
import { articlesService } from '../api/article'
import { Article } from '../api/article/Article'

type ArticlesMap = Record<string, Article>

export const keyBy = <ItemType>(arr: ItemType[], field: keyof ItemType): Record<string, ItemType> => arr.reduce((acc: Record<string, ItemType>, item) => {
  acc[`${item[field]}`] = item
  return acc
}, {})

enum SelectorKeys {
  ARTICLES_MAP = 'ARTICLES_MAP',
  ARTICLES = 'ARTICLES',
}

export const articlesMapSelector = selector<ArticlesMap>({
  key: SelectorKeys.ARTICLES_MAP,
  get: async () => {
    const { articles } = await articlesService.listArticles()

    return keyBy(articles, 'slug')
  }
})

export const articlesSelector = selector<Article[]>({
  key: SelectorKeys.ARTICLES,
  get: ({ get }) => {
    const articlesMap = get(articlesMapSelector)
    return Object.values(articlesMap)
  }
})
