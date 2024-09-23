import React from 'react'
import { Counter } from '../../components/Counter'

type Props = {}

export const MainPage = (props: Props) => {
  return (
    <>
      <div>MainPage</div>
      <div><Counter></Counter></div>
    </>
  )
}

export default MainPage