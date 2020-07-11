import { AppConfig } from '@shopify/app-bridge/client'
import { useHistory, useLocation } from 'react-router-dom'

const configEle = document.getElementById('app-config') as HTMLInputElement

export const apiKey: string = configEle.dataset.api || ''

export const shopOrigin: string = configEle.dataset.shop || ''

const useQuery = () => new URLSearchParams(useLocation().search)

export const useInitial = (
  param: string | null
): { query: string | null; history: any } => {
  const query = useQuery().get(param || '')
  const history = useHistory()
  return { query, history }
}

export const config: AppConfig = {
  apiKey,
  shopOrigin,
  forceRedirect: false
}
