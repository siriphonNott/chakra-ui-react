import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'
import ViteLogo from '@assets/images/vite-logo.svg'

export default function Header() {
  return (
    <Box color="white" w="100%" p={3} px={5} bg="gray.800">
      <Flex align="center">
        <Image mr={2} boxSize={5} src={ViteLogo} alt="Segun Adebayo" />
        Vite + React + Tailwindcss
      </Flex>
    </Box>
  )
}
