import React from 'react'
import { Layout, FooterHelp, Link } from '@shopify/polaris'

const Footer: React.FC = () => {
  return (
    <Layout.Section>
      <FooterHelp>
        For more information, quick access to the{' '}
        <Link
          onClick={() => {
            window.open('https://blog.xyyolab.com/', '_blank')
          }}
        >
          Help Center
        </Link>
        .
      </FooterHelp>
    </Layout.Section>
  )
}

export default Footer
