import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'

export default function InternalServerError() {
  return (
    <Box align="center">
      <Heading as="h1" sizes="xl" color="red">
        500
      </Heading>
      <Text>Internal Server Error</Text>
    </Box>
  )
}
