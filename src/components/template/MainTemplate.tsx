import { ReactNode } from 'react'

import { MainWrapper } from './styles'

interface Props {
  children: ReactNode
  header: ReactNode
  footer: ReactNode
}

const MainTemplate: React.FC<Props> = ({ children, header, footer }) => {
  return (
    <MainWrapper className="min-h-screen">
      <div className="flex flex-col bg-white">
        {header}
        {children}
        {footer}
      </div>
    </MainWrapper>
  )
}

export default MainTemplate
