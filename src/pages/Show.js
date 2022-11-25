import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';
// const QUERY_STRING = '/shows/id/'
const Show = () => {
  const {id}  = useParams();
  const url = `/shows/${id}?embed[]=seasons&embed[]=cast`;

  const [show,setShow] = useState(null);
  useEffect(()=>{
    apiGet(url).then(results=>setShow(results));
  },[id])
  console.log(id);
  console.log('show',show);

  return (
    <div>Show {id} </div>
  )
}

export default Show