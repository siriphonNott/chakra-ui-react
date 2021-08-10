import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/css'
import { menuItems } from '@app/constants.jsx'
import { useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const pathname =
    location.pathname === '/'
      ? ['dashboard']
      : location.pathname
          .split('/')
          .filter((v) => v && v !== '/')
          .reverse()
  console.log(pathname)
  const menuActive = pathname.length > 0 ? { name: pathname[0] } : {}

  const MenuItem = ({ title, icon, linkto, active }) => {
    return (
      <Link to={linkto}>
        <Flex
          px={4}
          py={2}
          className={css`
            transition: all 0.3s;
            &:hover {
              background-color: #2d3648;
              shadow: 10px 10px 10px rgba(2, 0, 0, 0.2);
            }
            background-color: ${active ? '#333F54' : ''};
            shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
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
            <MenuItem
              key={index}
              title={menu.title}
              icon={menu.icon}
              linkto={menu.linkto}
              active={menuActive.name === menu.title.toLocaleLowerCase()}
            />
          ))}
        </Flex>
      </Box>
    </>
  )
}
