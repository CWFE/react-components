export declare interface BaseComponentProps {
  width?: number | string
  height?: number | string
  children?: JSX.Element | JSX.Element[]
  style?: React.CSSProperties,
  bgColor?: string
}

export { default as Flex } from './Flex/index'