import { FC } from 'react'
import { ProductivityIcon } from '../icons'
import CodeIcon from '../icons/CodeIcon'
import DesignIcon from '../icons/DesignIcon'
import IconCard from './IconCard'

type Props = {
  className?: string
  category?: any
  onClick?: () => void
}

export const CategoryCard: FC<Props> = ({ category, className, onClick }) => {
  if (category === 0) {
    return (
      <IconCard
        className={className}
        text='Productivity'
        fill='#0F172A'
        background='var(--devyellow-400)'
        onClick={onClick}
      >
        <ProductivityIcon fill='#0F172A' y={'-20px'} />
      </IconCard>
    )
  }
  if (category === 1)
    return (
      <IconCard
        className={className}
        text='Design'
        fill='#FFFF'
        background='var(--devpink-600)'
        onClick={onClick}
      >
        <DesignIcon fill='#FFF' height={'75%'} y={'10'} />
      </IconCard>
    )
  if (category === 2)
    return (
      <IconCard
        className={className}
        text='Code'
        fill='#FFF'
        background='var(--devblue-600)'
        onClick={onClick}
      >
        <CodeIcon fill='#FFF' y={'-20px'} />
      </IconCard>
    )
  return null
}
