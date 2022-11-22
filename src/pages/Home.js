import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [input,setInput] = useState('')

  
  const onSearch = ()=>{
    // https://api.tvmaze.com/search/shows?q=men
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(resp => resp.json())
    .then(result => {
      console.log('response')
      console.log(result)
    })
  }

  const onInputChange = ev => {
    setInput(ev.target.value);
  }

  const onKeyDown = e => {
    if(e.keyCode == 13) onSearch()
  }

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
      <button type="button" value="" onClick={onSearch}> Search </button>
    </MainPageLayout>
  )
}

export default Home