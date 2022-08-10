import React, { FC, Suspense } from 'react'
import { Text } from 'native-base'

export const withSuspense = <Props, >(cmp: FC<Props>) => (props: Props) => (
  <Suspense fallback={<Text>loading...</Text>}>
    {React.createElement(cmp, props)}
  </Suspense>
)
