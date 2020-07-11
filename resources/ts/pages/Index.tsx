import React, { useContext } from 'react'
import { Button, EmptyState } from '@shopify/polaris'
import { useInitial } from '../utils'
import { ConfigContext } from '../utils/stores/ConfigStore'
import { TOGGLE_SETTING } from '../utils/actions'

const Index: React.FC = () => {
  const { history } = useInitial(null)
  const { state, dispatch } = useContext(ConfigContext)
  return (
    <EmptyState
      heading="Seems like you lost"
      action={{
        content: 'Go back to dashboard',
        onAction: () => history.push('/')
      }}
      secondaryAction={{
        content: 'Our website',
        url: 'https://blog.xyyolab.com/'
      }}
      image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    >
      <Button onClick={() => dispatch({ type: TOGGLE_SETTING })}>
        {JSON.stringify(state)}
      </Button>
      <p>Don&rsquo;t wrong, we will always be together with you.</p>
    </EmptyState>
  )
}

export default Index
