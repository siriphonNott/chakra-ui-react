import React from 'react'
import { PageTitle } from '@components'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Users() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [isOpenAlert, setIsOpen] = React.useState(false)
  const onCloseAlert = () => setIsOpen(false)
  const cancelRef = React.useRef()

  return (
    <Box>
      <Box mb={4}>
        <PageTitle name="users" />
      </Box>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        New User
      </Button>
      <Button colorScheme="red" ml={1} onClick={() => setIsOpen(true)}>
        Delete User
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create new user</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <AlertDialog isOpen={isOpenAlert} leastDestructiveRef={cancelRef} onClose={onCloseAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You cannot undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseAlert}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onCloseAlert} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  )
}
