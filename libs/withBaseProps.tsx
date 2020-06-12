import React, { SFC, Props, useRef, useContext } from 'react'
import { BaseComponentProps } from '.'
import './index.less'
import { CWFEBaseContext } from './context'

type TNode = (Props: any) => React.ReactNode
type WrappedComponentFunction = (Component: React.ReactNode) => React.ReactNode

const withBaseProps = <P extends BaseComponentProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => (props) => {
  const { state, dispatch } = useContext(CWFEBaseContext)

  const {
    children,
    width,
    height,
    bgColor,
    hoverTitle,
    style = {},
    className = ''
  } = props

  if (width) {
    style.width = width
  }
  if (height) {
    style.height = height
  }
  if (bgColor) {
    style.backgroundColor = bgColor
  }

  return (
    <WrappedComponent {...props} style={{ ...style }}>
      {children}
    </WrappedComponent>
  )
}

export default withBaseProps