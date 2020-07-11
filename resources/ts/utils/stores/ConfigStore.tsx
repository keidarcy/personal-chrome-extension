import { createContext } from 'react'
import { TOGGLE_SETTING } from '../actions'

export const initialState = {
  config: { isSet: true }
}

type InitialStateType = {
  config: { isSet: boolean }
}

type Actions = { type: typeof TOGGLE_SETTING }

export const configReducer = (
  state: InitialStateType,
  action: Actions
): InitialStateType => {
  switch (action.type) {
    case TOGGLE_SETTING:
      // Todo: set to db and add language
      return { config: { isSet: !state.config.isSet } }
    default:
      return state
  }
}

export const ConfigContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => null
})

ConfigContext.displayName = 'ConfigContext'
