import React from 'react'
import { PageTitle } from '@components'
import { Heading, Box, useToast, Button, Wrap, WrapItem } from '@chakra-ui/react'

export default function Charts() {
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']
  const positions = ['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left']

  return (
    <Box>
      <PageTitle name="charts" />
      <Heading as="h3" size="md" mt={4} mb={2}>
        Normal#
      </Heading>
      <Wrap>
        <WrapItem>
          <Button
            mr={2}
            onClick={() =>
              toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
              })
            }
          >
            Show Success Toast
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            mr={2}
            onClick={() =>
              toast({
                position: 'bottom-left',
                // eslint-disable-next-line react/display-name
                render: () => (
                  <Box color="white" p={3} bg="blue.500">
                    Hello World
                  </Box>
                ),
              })
            }
          >
            Show Info Toast
          </Button>
        </WrapItem>
      </Wrap>

      <Heading as="h3" size="md" mt={4} mb={2}>
        Status#
      </Heading>
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Heading as="h3" size="md" mt={4} mb={2}>
        Position#
      </Heading>
      <Wrap>
        {positions.map((position, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${position} toast`,
                  position: position,
                  isClosable: true,
                })
              }
            >
              Show {position} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
