import React from 'react'
import { TitleWrapper } from './Titled.styled'

const Titile = ({title,subtitle}) => {
  return (
    <TitleWrapper>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </TitleWrapper>
  )
}

export default Titile