import React, { FC } from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { FeedStack } from './FeedStack'
import { RecoilRoot } from 'recoil'

export const App: FC = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <RecoilRoot>
        <FeedStack />
      </RecoilRoot>
    </NavigationContainer>
  </NativeBaseProvider>
)

