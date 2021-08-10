import React from 'react'
import { PageTitle } from '@components'
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function Todos() {
  return (
    <Box>
      <PageTitle name="todos" />
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </Box>
  )
}
