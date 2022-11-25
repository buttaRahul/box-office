import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const initalState = {
    show:null,
    isLoading:true,
    error:null
}

const reducer = (prevState,action)=> {
    switch(action.type)
    {
        case 'FETCH_SUCCESS' : {
            return {...prevState,isLoading:false,show:action.show}
        }
        case 'FETCH_FAILED' : {
            return {...prevState,isLoading:false,error:action.error}
        }
        default : return prevState;
    };
};

const Show = () => {
  const {id}  = useParams();
  const url = `/shows/${id}?embed[]=seasons&embed[]=cast`;
  
  //   const [state,dispatch] = useReducer(reducer,initalState);
  const [{show,isLoading,error},dispatch] = useReducer(reducer,initalState);


  useEffect(()=>{
    apiGet(url).then(results => {
        setTimeout(()=>{
            dispatch({type:'FETCH_SUCCESS',show:results})
        },1000);
    }).catch(err => {
        dispatch({type:'FETCH_FAILED',error:err.message})
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