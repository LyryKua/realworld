import React, { FC } from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { FeedStack } from './FeedStack'
import { Article as ArticleType } from '../types'
import { RecoilRoot } from 'recoil'

export type FeedStackParam = {
  Feed: undefined
  Article: ArticleType
}


export const App: FC = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <RecoilRoot>
        <FeedStack />
      </RecoilRoot>
    </NavigationContainer>
  </NativeBaseProvider>
)

