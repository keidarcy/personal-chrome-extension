import React, { useReducer } from 'react'
import { TitleBar } from '@shopify/app-bridge-react'
import { useInitial } from '../utils'
import Router from '../Router'
import Footer from './Footer'
import { ConfigContext, configReducer, initialState } from '../utils/stores/ConfigStore'

const Layout: React.FC = () => {
  const { history } = useInitial(null)
  const [state, dispatch] = useReducer(configReducer, initialState)
  const secondaryActions = [
    { content: 'setup', onAction: () => history.push('/') },
    {
      content: 'dashboard',
      onAction: () => history.push('/dashboard')
    },
    {
      content: 'instruction',
      onAction: () => history.push('/instruction')
    },
    {
      content: 'contact',
      destructive: true,
      onAction: () => window.open('mailto:test@example.com')
    }
  ]

  return (
    <>
      <TitleBar
        title="歴史"
        secondaryActions={secondaryActions}
        primaryAction={{
          content: 'primary action',
          onAction: () => history.push('/edit')
        }}
      />
      <ConfigContext.Provider value={{ state, dispatch }}>
        <Router />
      </ConfigContext.Provider>
      <Footer />
    </>
  )
}
export default Layout
