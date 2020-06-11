import React, { SFC, Props } from 'react'
import { BaseComponentProps } from '.'
import './index.less'

type TNode = (Props: any) => React.ReactNode
type WrappedComponentFunction = (Component: React.ReactNode) => React.ReactNode

const withBaseProps = <P extends BaseComponentProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => (props) => {
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
    <WrappedComponent {...props} className={`${className} ${hoverTitle && 'cwfe-hover-title'}`} style={{ ...style }}>
      { children }
      {
        hoverTitle && <p className='hoverTitle' />
      }
    </WrappedComponent>
  )
}

export default withBaseProps