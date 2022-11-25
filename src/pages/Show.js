import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';
// const QUERY_STRING = '/shows/id/'
const Show = () => {
  const {id}  = useParams();
  const url = `/shows/${id}?embed[]=seasons&embed[]=cast`;

  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const [show,setShow] = useState(null);
  useEffect(()=>{
    apiGet(url).then(results => {
        setTimeout(()=>{
          setShow(results)
          setIsLoading(false);
        },2000);
    }).catch(err => {
        setError(err.message);
        setIsLoading(false);
    });
  },[id]);
  if(isLoading){
    return <div> Data is being loading ...</div>
  }
  if(error){
    return <div>Error occured : {error}</div>
  }

  return (
    <div>{show.id} {show.name} </div>
  )
}

export default Show