import React from 'react'
import { Box, Image, Flex, Text, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ViteLogo from '@assets/images/vite-logo.svg'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Badge } from '@components'

export default function Header() {
  const iconStyle = {
    width: '1.5rem',
  }
  const NavItem = styled.div`
    cursor: pointer;
  `
  return (
    <Box pos="sticky" top="0" left="0" color="white" w="100%" p={3} px={5} bg="gray.800">
      <Flex align="center" justify="between">
        <NavItem>
          <Link to="/">
            <Flex>
              <Image mr={2} boxSize={5} src={ViteLogo} alt="Segun Adebayo" />
              <Text>Vite + React + Tailwindcss</Text>
            </Flex>
          </Link>
        </NavItem>
        <Spacer />
        <NavItem>
          <Flex>
            <Box pos="relative">
              <svg
                style={iconStyle}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <Badge animation />
            </Box>
            <svg
              style={iconStyle}
              className={css`
                margin-left: 10px;
              `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </Flex>
        </NavItem>
      </Flex>
    </Box>
  )
}
