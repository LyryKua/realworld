import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Article as ArticleType } from '../api/article/Article'
import { Article } from './Article'
import { Feed } from './Feed'

export type FeedStackParam = {
  Feed: undefined
  Article: ArticleType
}

const FeedStackProvider = createStackNavigator<FeedStackParam>()

export const FeedStack: FC = () =>
  (
    <FeedStackProvider.Navigator>
      <FeedStackProvider.Screen name="Feed" component={Feed} />
      <FeedStackProvider.Screen name="Article" component={Article} />
    </FeedStackProvider.Navigator>
  )
