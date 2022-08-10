import React, { FC } from 'react'
import {
  HStack,
  Text,
  Box,
  Heading,
  Image,
  AspectRatio,
  Stack,
} from 'native-base'

export const Article: FC = (props: any) => {
  console.log(props)
  const { route } = props
  const { params } = route
  return (
    <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }} _web={{
        shadow: 2,
        borderWidth: 0,
      }} _light={{
        backgroundColor: 'gray.50',
      }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
              uri: params.author.image,
            }} alt="image" />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {params.title}
            </Heading>
            <Text fontSize="xs" _light={{
              color: 'violet.500',
            }} _dark={{
              color: 'violet.400',
            }} fontWeight="500" ml="-0.5" mt="-1">
              Shelling of Vinnytsia
            </Text>
          </Stack>
          <Text fontWeight="400">
            {params.description}
          </Text>
          <Text fontWeight="400">
            {params.body}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }} fontWeight="400">
                {params.updatedAt}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}
