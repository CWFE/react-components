import React, { createContext, useReducer, Context } from 'react'

interface CWFEBaseContextProps {
  hoverTitle?: React.ReactHTMLElement<any>
}

export enum CWFEBaseActionTypes {
  updateHoverTitle = 'updateHoverTitle'
}

const initState: CWFEBaseContextProps = {
  hoverTitle: null
}

const reducer = (state: CWFEBaseContextProps, action: { type: string, payload: React.ReactHTMLElement<any> }) => {
  switch (action.type) {
    case CWFEBaseActionTypes.updateHoverTitle:
      const t: CWFEBaseContextProps = { ...state, hoverTitle: action.payload }
      return t
  }
}

export const CWFEBaseContext: Context<any> = createContext(initState)

export const ContextApp = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <CWFEBaseContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CWFEBaseContext.Provider>
  )
}
