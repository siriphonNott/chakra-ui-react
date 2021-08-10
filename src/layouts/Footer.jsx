import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box color="white" w="100%" p={3} px={4} bg="gray.800" position="fixed" bottom={0}>
      <Flex justify="center">
        <small>
          Made With ❤️ by{' '}
          <Link to={{ pathname: 'https://nottdev.com' }} target="_blank">
            NottDev
          </Link>
        </small>
      </Flex>
    </Box>
  )
}
