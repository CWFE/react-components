import { HtmlHTMLAttributes, HTMLAttributes } from 'react'

export declare interface BaseComponentProps extends HTMLAttributes<any> {
  className?: string,
  width?: number | string
  height?: number | string
  children?: JSX.Element | JSX.Element[]
  style?: React.CSSProperties,
  bgColor?: string,
  hoverTitle?: string
}

export { default as Flex } from './Flex/index'
export { default as Separator } from './Separator/index'