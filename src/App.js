import { Header, Footer, Sidebar } from '@layouts'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Dashboard, Users, Todos, Charts, PageNotFound } from '@pages'
import { Box } from '@chakra-ui/react'
import { css } from '@emotion/css'
import { Breadcrumb } from '@components'

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Box ml={190} p={5}>
        <Box
          p={8}
          className={css`
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
          `}
        >
          <Box mb={3}>
            <Breadcrumb />
          </Box>
          <Switch>
            <Route exact path={['/', '/dashboard']} component={Dashboard} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/charts" component={Charts} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Box>
      </Box>
      <Footer />
    </Router>
  )
}

export default App
