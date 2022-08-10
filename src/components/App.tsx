import React, { FC } from 'react'
import { NativeBaseProvider } from 'native-base'
import { Feed } from './Feed'
import { Article } from './Article'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const StackNavigator = createStackNavigator()
export const App: FC = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Feed" component={Feed}/>
        <StackNavigator.Screen name="Article" component={Article}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
)

