import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Avatar, Box, HStack, Pressable, ScrollView, Spacer, Text, VStack, Divider } from 'native-base'
import React, { FC, useEffect, useState } from 'react'
import { Article, ArticlesService } from '../services/ArticlesService'
import { FeedStackParam } from './App'

type ArticleItemProps = {
  title: string
  tagList: string[]
  favoritesCount: number
  username: string
  image: string
  updatedAt: Date
}

const ArticleItem: FC<ArticleItemProps> = props => {
  const { title, updatedAt, image, username, tagList } = props
  const navigation = useNavigation<StackNavigationProp<FeedStackParam>>()
  const handleClick = () => navigation.push('Article', {
    slug: 'string',
    title,
    description: 'string',
    body: 'string',
    tagList,
    favorited: true,
    favoritesCount: 42,
    author: {
      username,
      bio: null,
      image,
      following: true,
    },
    createdAt: new Date(),
    updatedAt,
  })

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
                {updatedAt}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  )
}

export const Feed: FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const articlesService = new ArticlesService()

  const loadArticles = async () => {
    const loadedArticles = await articlesService.listArticles()
    setArticles(loadedArticles.articles)
  }

  useEffect(() => {
    loadArticles()
  })

  if (articles.length === 0) {
    return <Text>Loading...</Text>
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        articles.map((it, index) => (
          <Box key={index}>
            <ArticleItem
              tagList={it.tagList}
              title={it.title}
              updatedAt={it.updatedAt}
              image={it.author.image}
              username={it.author.username} favoritesCount={it.favoritesCount}
            />
            <Divider />
          </Box>
        ))
      }
    </ScrollView>
  )
}
