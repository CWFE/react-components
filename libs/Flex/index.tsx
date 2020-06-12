import * as React from 'react'
import withBaseProps from '../withBaseProps'
import { BaseComponentProps } from '..'

type FlexAlign = 'start' | 'end' | 'center'
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

interface FlexProps extends BaseComponentProps {
  direction?: FlexDirection
  align?: FlexAlign
  justify?: FlexJustify
}

function transformAlign (align: FlexAlign) : string | null {
  if (align === 'center') return 'center'
  if (align === 'start') return 'flex-start'
  if (align === 'end') return 'flex-end'
  return null
}
function transformJustify (justify: FlexJustify) : string | null {
  if (justify === 'start') return 'flex-start'
  if (justify === 'end') return 'flex-end'
  if (justify === 'center') return 'center'
  if (justify === 'around') return 'space-around'
  if (justify === 'between') return 'space-between'
  if (justify === 'evenly') return 'space-evenly'
  return null
}

const Flex = (props: FlexProps) => {
  const direction = props.direction || 'row'
  const align = transformAlign(props.align) || (direction === 'row' ? 'center' : 'flex-start')
  const justify = transformJustify(props.justify) || 'flex-start'

  return (
    <div
      {
        ...props
      }
      style={Object.assign({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify
      }, props.style)}
    >
      {
        props.children
      }
    </div>
  )
}

export default withBaseProps(Flex)