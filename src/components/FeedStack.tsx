import { useNavigation } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { Article as ArticleType } from '../api/article/Article'
import { Article } from './Article'
import { Feed } from './Feed'
import { Button } from 'native-base'
import { SignIn } from './SignIn'

export type FeedStackParam = {
  Feed: undefined
  Article: ArticleType
  SignIn: undefined
}

const FeedStackProvider = createStackNavigator<FeedStackParam>()

export const FeedStack: FC = () => {
  const navigation = useNavigation<StackNavigationProp<FeedStackParam>>()
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <FeedStackProvider.Navigator>
      <FeedStackProvider.Screen name="Feed" component={Feed} options={{
        headerLeft: () => (
          <Button
            onPress={() => navigation.navigate('SignIn')}
            title="info"
          />
        ),
        headerRight: () => (
          <Button
            onPress={() => setIsSignedIn(prevState => !prevState)}
            title="info"
          />
        ),
      }} />
      <FeedStackProvider.Screen name="Article" component={Article} />
      {
        !isSignedIn && (
          <FeedStackProvider.Group screenOptions={{ presentation: 'modal' }}>
            <FeedStackProvider.Screen name="SignIn" component={SignIn} />
          </FeedStackProvider.Group>
        )
      }
    </FeedStackProvider.Navigator>
  )
}
