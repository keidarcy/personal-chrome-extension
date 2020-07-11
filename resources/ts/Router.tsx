import React from 'react'
import { Switch, Redirect, Route, withRouter, RouteComponentProps } from 'react-router'
import { useRoutePropagation } from '@shopify/app-bridge-react'
import NotFound from './pages/NotFound'
import Index from './pages/Index'

const Routes = (props: RouteComponentProps) => {
  const { location } = props

  useRoutePropagation(location)

  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/setup" component={Index} />
        <Route path="/edit" component={Edit} />
        <Route path="/instruction" component={Instruction} /> */}
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  )
}
export default withRouter(Routes)
