import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface HeaderCardProps {
  children: ReactNode
}

export function HeaderCard({ children }: HeaderCardProps) {
  return <CardContainer>{children}</CardContainer>
}
