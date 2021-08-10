import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/css'
import { menuItems } from '@app/constants.jsx'

export default function Sidebar() {
  const MenuItem = ({ title, icon, linkto }) => {
    return (
      <Link to={linkto}>
        <Flex
          px={4}
          py={2}
          className={css`
            &:hover {
              background-color: #4b5563;
              color: white;
            }
          `}
        >
          {icon}
          <Box ml={2}>{title}</Box>
        </Flex>
      </Link>
    )
  }
  return (
    <>
      <Box color="white" w={190} h="100%" bg="#1f2837" position="fixed" left={0}>
        <Flex direction="column">
          {menuItems.map((menu, index) => (
            <MenuItem key={index} title={menu.title} icon={menu.icon} linkto={menu.linkto} />
          ))}
        </Flex>
      </Box>
    </>
  )
}
