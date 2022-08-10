import { selector } from 'recoil'
import { servicesState } from '../atoms/services'

export const articlesState = selector({
  key: 'articles',
  get: ({ get }) => {
    const { articlesService } = get(servicesState)

    return articlesService.listArticles()
  }
})
