import React, { SFC, Props } from 'react'
import { BaseComponentProps } from '.'

type TNode = (Props: any) => React.ReactNode
type WrappedComponentFunction = (Component: React.ReactNode) => React.ReactNode

const withBaseProps = <P extends BaseComponentProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => (props) => {
  console.log(props)

  const { children, width, height, style = {} } = props
  if (width) {
    style.width = width
  }
  if (height) {
    style.height = height
  }
  return (
    <WrappedComponent {...props} style={{ ...style }}>
      { children }
    </WrappedComponent>
  )
}

export default withBaseProps