import React from 'react'
import withBaseProps from '../withBaseProps'
import { BaseComponentProps } from '..'

type Size = 'large' | 'middle' | 'small'
type Direction = 'horizontal' | 'vertical'

function transformSize (size: Size) : string {
  if (size === 'small') {
    return '1px'
  }
  if (size === 'middle') {
    return '2px'
  }
  return '5px'
}

interface SeparatorProps extends BaseComponentProps {
  direction?: Direction,
  size?: Size,
  color?: string,
  margin?: string,
  style?: React.CSSProperties
}

const Separator = (props: SeparatorProps) => {
  const direction = props.direction || 'horizontal'
  const size = props.size || 'small'
  const color = props.color || '#CCCCCC'
  const margin = props.margin || (direction === 'horizontal' ? '10px 0' : '0 10px')

  let sizeValue = transformSize(size)
  const width = direction === 'horizontal' ? '100%' : sizeValue
  const height = direction === 'vertical' ? '100%' : sizeValue
  return (
    <div style={Object.assign({
      width: width,
      height: height,
      backgroundColor: color,
      margin: margin
    }, props.style)}  />
  )
}

export default withBaseProps(Separator)