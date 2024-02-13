import { ReactNode } from 'react'

import './style.scss'

const Nav = ({ children }: { children: ReactNode }): JSX.Element => {
  return <nav className={'nav_wrapper'}>{children}</nav>
}

export default Nav
