import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react'
import { useLocation, Link } from 'react-router-dom'

export default function Breadcrumbx() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter((v) => v)
  const disable = location.pathname !== '/' && !location.key
  return (
    !disable && (
      <Box bg="gray.100" borderRadius="md" p={3}>
        <Breadcrumb fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((v, index, self) => (
            <BreadcrumbItem key={index} isLastChild={index === self.length - 1}>
              <BreadcrumbLink as={Link} to={`/${self.slice(0, index + 1).join('/')}`}>
                {v}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box>
    )
  )
}
