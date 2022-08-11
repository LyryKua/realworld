import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { Avatar, Box, HStack, Pressable, ScrollView, Spacer, Text, VStack, Divider } from 'native-base'
import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { FeedStackParam } from './FeedStack'
import { articlesMapSelector, articlesSelector } from '../state'
import { withSuspense } from './hoc/withSuspense'

type ArticleItemProps = {
  slug: string
  title: string
  tagList: string[]
  favoritesCount: number
  username: string
  image: string
  updatedAt: Date
}

const ArticleItem: FC<ArticleItemProps> = props => {
  const {slug, title, updatedAt, image, username, tagList, favoritesCount } = props
  const articlesMap = useRecoilValue(articlesMapSelector)
  const navigation = useNavigation<StackNavigationProp<FeedStackParam>>()
  const handleClick = () => {
    navigation.push('Article', articlesMap[slug])
  }

  return (
    <Box>
      <Pressable onPress={handleClick} _dark={{
        bg: 'coolGray.800',
      }} _light={{
        bg: 'white',
      }}>
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{ uri: image }} />
            <VStack>
              <Text color="coolGray.800" _dark={{
                color: 'warmGray.50',
              }} bold>
                {title}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }}>
                {username}
              </Text>
              {tagList.map(tag => (
                <Text px={1} key={tag} color="green.700" _dark={{
                  color: 'warmGray.200',
                }}>
                  {tag}
                </Text>
              ))}
            </VStack>
            <Spacer />
            <VStack>
              <Text fontSize="xs" color="coolGray.800" _dark={{
                color: 'warmGray.50',
              }} alignSelf="flex-start">
                {updatedAt}
              </Text>
              <Text fontSize="xs" color="coolGray.800" _dark={{
                color: 'warmGray.50',
              }} alignSelf="flex-start">
                {`<3: ${favoritesCount}`}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  )
}

type FeedProps = StackScreenProps<FeedStackParam, 'Feed'>

const FeedCmp: FC<FeedProps> = () => {
  const articles = useRecoilValue(articlesSelector)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        articles.map(it => (
          <Box key={it.slug}>
            <ArticleItem
              slug={it.slug}
              tagList={it.tagList}
              title={it.title}
              updatedAt={it.updatedAt}
              image={it.author.image}
              username={it.author.username}
              favoritesCount={it.favoritesCount}
            />
            <Divider />
          </Box>
        ))
      }
    </ScrollView>
  )
}

export const Feed = withSuspense(FeedCmp)
