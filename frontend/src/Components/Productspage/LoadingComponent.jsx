import React from 'react'

import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
const LoadingComp = () => {
  return (
    <div>
    <Stack>
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
  <Skeleton height='15px' />
</Stack>
      
    </div>
  )
}

export default LoadingComp
