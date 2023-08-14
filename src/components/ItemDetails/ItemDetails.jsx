import React, { useEffect, useState } from 'react'
import { getDetails } from '../../Api/Api';
import {Offline} from 'react-detect-offline';
import Disconnected from '../Disconnected/Disconnected'
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

export default function ItemDetails(props) {
  let parmas = useParams();
  console.log(parmas);
    const [Details , setDetails] = useState('');
    async function getData() {
      let details = await getDetails(parmas.id, parmas.media);
      setDetails(details);
    };
    console.log(Details);
    useEffect(()=>{
      getData();
    },[])
  return (
    <>
    {/* the detected offline */}
 <Offline><Disconnected/></Offline>
  {/* check network for loading component */}
    {Details? <div className="container pt-5">
        <div className="row">
            <div className="col-md-4">
            <img className='py-5 w-100' src= {`https://image.tmdb.org/t/p/w500/${Details.poster_path}`} alt="img-Movie" />
            </div>
            <div className="col-md-8">
                <div className='py-5 '> 
                    <h1 className='py-3 text-center'>{Details.title} {Details.name}</h1>
                    {Details.genres.map((value, index)=><span key={index} className='badge p-3 mx-2 ' >{value.name}</span>)}
                    <ul className='text-start py-3 '>
                      <li className='py-3 details' ><span className='px-2 text-white'>Vote </span>{Details.vote_average.toFixed(1)}</li>
                      {Details.vote_count?<li className='py-3 details'><span className='px-2 text-white'> Vote Count  </span>{Details.vote_count}</li>:<div></div>}
                      {Details.popularity?<li className='py-3 details'><span className='px-2 text-white'> Popularity  </span>{Details.popularity.toFixed(1)}</li>:<div></div>}
                      {Details.release_date? <li  className='py-3 details'><span className='px-2 text-white'>  Release date  </span>{Details.release_date}</li>:<div></div>}
                    </ul>
                    <p>{Details.overview}</p>
                </div>
            </div>
        </div>
    </div>
    : <Loading/>}
    </>
  )
  }
