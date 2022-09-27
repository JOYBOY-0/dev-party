import { CategoryTheme } from '@/theme/CategoryTheme'
import { FC, HTMLAttributes } from 'react'
import './button.style.css'

type Props = HTMLAttributes<HTMLButtonElement> & {
  theme?: 0 | 1 | 2
  onClick?: () => void
}

export const Button: FC<Props> = ({ onClick, theme, className, ...props }) => {
  const selectedTheme =
    theme !== undefined ? CategoryTheme[theme] : CategoryTheme[1]
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={{
        ...selectedTheme,
        color: selectedTheme.textColor
      }}
      {...props}
    />
  )
}
