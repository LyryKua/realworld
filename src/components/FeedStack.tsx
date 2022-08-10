import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { FeedStackParam } from './App'
import { Article } from './Article'
import { Feed } from './Feed'

const FeedStackProvider = createStackNavigator<FeedStackParam>()

export const FeedStack: FC = () =>
  (
    <FeedStackProvider.Navigator>
      <FeedStackProvider.Screen name="Feed" component={Feed} />
      <FeedStackProvider.Screen name="Article" component={Article} />
    </FeedStackProvider.Navigator>
  )
