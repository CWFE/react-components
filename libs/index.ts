export interface BaseComponentProps {
  width?: number | string
  height?: number | string
  children?: any[]
  style?: React.CSSProperties
}

export { default as Flex } from './Flex/index'