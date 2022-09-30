import { CategoryTheme } from '@/theme/CategoryTheme'
import { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  theme?: 0 | 1 | 2
}

export const CategoryBtn: FC<Props> = ({
  className,
  children,
  theme,
  ...props
}) => {
  const selectedTheme =
    theme !== undefined ? CategoryTheme[theme] : CategoryTheme[1]
  return (
    <button
      className={`px-4 py-1 rounded-full font-bold shadow-solidMd min-w-[100px] hover:brightness-110  ${className}`}
      style={{
        ...selectedTheme,
        color: selectedTheme.textColor,
        boxShadow: `4px 4px 0px 0px ${selectedTheme.backgroundColor}30`
      }}
    >
      {children}
    </button>
  )
}
