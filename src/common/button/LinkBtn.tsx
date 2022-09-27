import { CategoryTheme } from '@/theme/CategoryTheme'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import './button.style.css'

type Props = LinkProps & {
  theme?: 0 | 1 | 2
}

export const LinkButton: FC<Props> = ({
  onClick,
  theme,
  className,

  ...props
}) => {
  const selectedTheme =
    theme !== undefined ? CategoryTheme[theme] : CategoryTheme[1]
  return (
    <Link
      className={`btn ${className}`}
      style={{
        ...selectedTheme,
        color: selectedTheme.textColor
      }}
      {...props}
    />
  )
}
