import React from 'react'
import { Box } from '@chakra-ui/react'
import { animationPing } from '@styles/main'

export default function Badge(props = {}) {
  const BadgeItem = ({ animation } = {}) => (
    <Box
      h={props.h || 2}
      w={props.w || 2}
      pos="absolute"
      top={props.top || '0'}
      right={props.right || '0'}
      bg={props.bg || '#EE4344'}
      borderRadius="50px"
      className={animation && animationPing}
    ></Box>
  )
  return (
    <>
      <BadgeItem />
      {props.animation && <BadgeItem animation />}
    </>
  )
}
