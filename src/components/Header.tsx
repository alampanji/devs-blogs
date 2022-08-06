import React, { FC } from 'react'
import "@/styles/components/Header.less"

interface HeaderProps {
}

type Menus = {
  key: string,
  label: string
}

const menus: Menus[] = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'about',
    label: 'Services',
  },
  {
    key: 'blog',
    label: 'Blog',
  },
]

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="header-container">
      { menus.map(item =>
        (
          <a className="menu-item" key={item.key} href="" >{item.label}</a>
        )
      )}
    </div>
  )
}

export default Header;
