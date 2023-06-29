import React from 'react'
import { useState, useEffect } from 'react'
import ListAdd from '../components/ListAdd'
import ListPost from '../components/ListPost'
import Nav from '../components/Nav'
import IframeVideo from '../components/IframeVideo'

const MlbVideo = () => {
  const [Getparam,Setparam]= useState("players/san-diego-padres-at-pittsburgh-pirates-home/")
  useEffect(()=>{
    const urlparam = new URLSearchParams(window.location.search)
    const myparam = urlparam.get("url")
    Setparam(myparam)
  },[])
  return (
   <>
       <div>
        
        <Nav/>
        <div className='HomeContainer'>
          <div className='homeContent'>
            <IframeVideo param ={Getparam} />  
        <ListPost/>
        </div>
        <div className='Homeadds'>
          <ListAdd/>
        </div>
        </div>
    </div>
          
          </>
        
  )
}

export default MlbVideo