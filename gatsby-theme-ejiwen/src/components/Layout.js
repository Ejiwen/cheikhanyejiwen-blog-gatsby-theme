import React from "react"
import { Heading, Container, Box, Flex } from "theme-ui"

const Layout = ({ children }) => {
  
  return (
    <div>
      {/* <h2>hello</h2>
      <Heading>Gatsby Events Theme</Heading>
      <Container>{children}</Container> */}

<Flex>
  <Box p={2} bg='muted'>
  <Heading>Gatsby Events Theme</Heading>
  </Box>
  <Box p={2} bg='primary' sx={{ flex: '1 1 auto' }}>
  <Container>{children}</Container>
  </Box>
</Flex>

    </div>
  )
}

export default Layout