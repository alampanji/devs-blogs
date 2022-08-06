import React from 'react'
import { hot } from 'react-hot-loader/root'

import Header from '@components/Header'
import PostList from '@components/PostList'

export const App = hot(_App)
export function _App(): JSX.Element | null {
  return (
    <div className="main">
      <Header />

      <PostList />
    </div>
  )
}