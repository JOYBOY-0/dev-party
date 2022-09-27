import { CategoryTheme } from '@/theme/CategoryTheme'
import { FC } from 'react'
import IconCard from './IconCard'

type Props = {
  className?: string
  category?: any
  onClick?: () => void
}

export const CategoryCard: FC<Props> = ({ category, className, onClick }) => {
  const Icon = CategoryTheme[category].icon
  return (
    <IconCard
      className={className}
      text={CategoryTheme[category].name}
      fill={CategoryTheme[category].textColor}
      background={CategoryTheme[category].backgroundColor}
      onClick={onClick}
    >
      <Icon fill={CategoryTheme[category].textColor} y={'-20px'} />
    </IconCard>
  )
}
