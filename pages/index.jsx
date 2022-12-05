import React from 'react'
import {Stack, Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function Homepage() {
  return (
    <>
    <div class="rounded-full ... bg-red-700 text-9xl">Hello</div>
  <Stack >
  <Skeleton height='500px' margin={20}  />
  </Stack>
  <Stack>
  <Skeleton height='500px' margin={20}>
  <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
  </Skeleton>
  </Stack>
  <Stack>
  <Skeleton height='500px' margin={20} />
  </Stack>
    </>
  )
}
