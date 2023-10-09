import { createContext, useContext } from 'react'

export interface AppContextInterface {
  name: string
  version: string
}

const AppContext = createContext<Nullable<AppContextInterface>>(null)

export function cerateAppContext(): AppContextInterface {
  return {
    name: 'drei-html-demo',
    version: '1.0.0',
  }
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('AppContext is null.')
  }

  return context
}
