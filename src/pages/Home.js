import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'

const Home = () => {

  const [input,setInput] = useState('');
  const [results,setResults] = useState(null);
  const [searchOption,setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows'
  const onSearch = ()=>{
    // https://api.tvmaze.com/search/shows?q=men
    // console.log(searchOption,input);
    
    apiGet(`/search/${searchOption}?q=${input}`)
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

  const onRadioChange = ev => {
    setSearchOption(ev.target.value)
    setResults(null)
  }

  const renderShows = () => {
    return <div>{results.map(item =><div key={item.show.id}>{item.show.name} </div>)}</div>
  }

  const renderActors = () => {
    return <div>{results.map(item =><div key={item.person.id}>{item.person.name} </div>)}</div>
  }
  const renderResults = () => {
    if(results && results.length === 0){
      return <div>No Results Found</div>
    }
    if(results && results.length > 0){
      return searchOption === 'shows' ? renderShows() : renderActors();        
    }
  }

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input type="radio" name="" id="shows-search" value='shows' checked={isShowsSearch} onChange={onRadioChange}/>
        </label>
        <label htmlFor="actors-search">
          Actors
          <input type="radio" name="" id="actors-search" value='people' checked={!isShowsSearch} onChange={onRadioChange} />
        </label>
      </div>
      <button type="button" value="" onClick={onSearch}> Search </button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home