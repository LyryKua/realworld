import { atom } from 'recoil'
import { ArticlesService } from '../../services/ArticlesService'

type ServicesState = {
  articlesService: ArticlesService
}

export const servicesState = atom<ServicesState>({
  key: 'services',
  default: {
    articlesService: new ArticlesService(),
  },
})
