import React, { FC } from 'react'
import { NativeBaseProvider } from 'native-base'
import { Feed } from './Feed'
import { Article } from './Article'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Article as ArticleType } from '../services/ArticlesService'

export type FeedStackParam = {
  Feed: undefined
  Article: ArticleType
}

const FeedStack = createStackNavigator<FeedStackParam>()
export const App: FC = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <FeedStack.Navigator>
        <FeedStack.Screen name="Feed" component={Feed}/>
        <FeedStack.Screen name="Article" component={Article}/>
      </FeedStack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
)

