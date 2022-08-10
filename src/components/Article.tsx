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

export const Article: FC = () => {
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
              uri: 'https://img.pravda.com/images/doc/c/a/ca467ef-photo-2022-07-14-13-49-48.jpg',
            }} alt="image" />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Russia is a terrorist state
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
            21 people died, about 50 are seriously wounded.
          </Text>
          <Text fontWeight="400">
            As a result of the Russian attack on the centre of Vinnytsia on Thursday, 21 people are currently known to
            have died, about 90 people have sought help from medical institutions, about fifty of them are in critical
            condition.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: 'warmGray.200',
              }} fontWeight="400">
                14 JULY 2022
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}
