import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppProvider } from '@shopify/polaris'
import { Provider } from '@shopify/app-bridge-react'
import { BrowserRouter } from 'react-router-dom'
import enTranslations from '@shopify/polaris/locales/en.json'
import { config } from './utils'
import '@shopify/polaris/styles.css'
import Layout from './common/Layout'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <Provider config={config}>
          <Layout />
        </Provider>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
