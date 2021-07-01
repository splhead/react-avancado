import React, {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  // children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  // onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
