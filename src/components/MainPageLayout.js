import React from 'react'
import Nav from './Nav'
import Titile from './Titile'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <Titile title='Box Office' subtitle='Are you looking for a movie or actor'/>
        <Nav/>
        {children}
    </div>
  )
}

export default MainPageLayout