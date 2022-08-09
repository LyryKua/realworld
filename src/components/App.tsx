import React, { FC } from 'react'
import { NativeBaseProvider } from 'native-base'
import { Header } from './Header'
import { Feed } from './Feed'

export const App: FC = () => (
  <NativeBaseProvider>
    <Header />
    <Feed />
  </NativeBaseProvider>
)

