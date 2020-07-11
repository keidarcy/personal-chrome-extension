import React from 'react'
import { EmptyState } from '@shopify/polaris'
import { useInitial } from '../utils'

const NotFound: React.FC = () => {
  const { history } = useInitial(null)
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
      <p>Don&rsquo;t wrong, we will always be together with you.</p>
    </EmptyState>
  )
}

export default NotFound
