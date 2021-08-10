import React from 'react'
import { menuItems } from '../app/constants.jsx'
import { Flex, Heading, Divider } from '@chakra-ui/react'

export default function PageTitle({ name }) {
  const page = menuItems.find((v) => v.i18n === name)
  return (
    <>
      <Flex>
        {page.icon}
        <Heading as="h1" size="lg" ml={1}>
          {page.title}
        </Heading>
      </Flex>
      <Divider mb={4} />
    </>
  )
}
