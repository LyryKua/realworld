import React, { FC } from 'react'
import {
  HStack,
  Center,
  Text,
  HamburgerIcon,
  AddIcon,
  IconButton,
} from 'native-base'

export const Header: FC = () => {
  return <Center safeAreaTop>
    <HStack bg="#6200ee" px="3" py="4" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <IconButton icon={<HamburgerIcon size="sm" name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<AddIcon name="add" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </Center>
}
