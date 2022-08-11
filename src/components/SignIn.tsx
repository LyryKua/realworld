import React, { useState } from 'react'
import {
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base'

export const SignIn = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label>Login</FormControl.Label>
        <Input placeholder="login" onChangeText={value => setLogin(value)} />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Password</FormControl.Label>
        <Input placeholder="password" onChangeText={value => setPassword(value)} />
      </FormControl>
      <Button onPress={() => console.log(login, password)}>Go YOLO</Button>
    </VStack>
  )
}
