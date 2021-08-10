import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'

export default function PageNotFound() {
  return (
    <Box align="center">
      <Heading as="h1" sizes="xl" color="red">
        404
      </Heading>
      <Text>Page not found</Text>
    </Box>
  )
}
