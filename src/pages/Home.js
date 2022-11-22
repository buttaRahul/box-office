import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'

const Home = () => {

  const [input,setInput] = useState('')
  const [results,setResults] = useState(null)
  
  const onSearch = ()=>{
    // https://api.tvmaze.com/search/shows?q=men
    apiGet(`/search/shows?q=${input}`)
    .then(result => {
      setResults(result)
    })
  }

  const onInputChange = ev => {
    setInput(ev.target.value);
  }

  const onKeyDown = e => {
    if(e.keyCode === 13) onSearch()
  }

  const renderResults = () => {
    if(results && results.length === 0){
      return <div>No Results Found</div>
    }
    if(results && results.length > 0){
      return <div>{results.map(item =><div key={item.show.id}>{item.show.name} </div>)}</div>
    }
  }

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
      <button type="button" value="" onClick={onSearch}> Search </button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home