import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Avatar, Box, HStack, Pressable, ScrollView, Spacer, Text, VStack, Divider } from 'native-base'
import React, { FC } from 'react'

type ArticleItemProps = {
  authorImg: string
  author: string
  title: string
  date: Date
}

const ArticleItem: FC<ArticleItemProps> = props => {
  const { authorImg, author, title, date } = props
  const navigation = useNavigation<StackNavigationProp<any>>()
  const handleClick = () => navigation.push('Article')

  return (
    <Box>
      <Pressable onPress={handleClick} _dark={{
        bg: 'coolGray.800',
      }} _light={{
        bg: 'white',
      }}>
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{ uri: authorImg }} />
            <VStack>
              <Text color="coolGray.800" _dark={{
                color: 'warmGray.50',
              }} bold>
                {title}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }}>
                {author}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" color="coolGray.800" _dark={{
              color: 'warmGray.50',
            }} alignSelf="flex-start">
              {date.toDateString()}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  )
}
const factory = (time: number) => Array(time).fill(undefined).map((it, index) => ({
  author: ['Arm Ukraine', 'Brave Ukrainian', 'Putin Huilo'][index % 3],
  authorImg: 'https://picsum.photos/200/300',
  date: new Date(),
  title: ['Russia invaded  Ukraine', 'Support Ukraine', 'Glory to Ukraine', 'Russia is a terrorist state'][index % 4],
}))

export const Feed: FC = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {
      factory(12).map((it, index) => (
        <Box key={index}>
          <ArticleItem {...it} />
          <Divider />
        </Box>
      ))
    }
  </ScrollView>
)
