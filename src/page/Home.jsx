import React, { useRef, useEffect } from 'react';
import Nav from '../components/Nav'
import ListPost from '../components/ListPost'
import Video from '../components/Video'
import '../css/homecontainer.css'

export const Home = () => {
  return (
    <div>
        <Nav/>
        <div className='HomeContainer'>
          <div className='homeContent'>
        <Video/>
        <ListPost/>
        </div>
        <div className='Homeadds'>
        </div>
        </div>
    </div>
    
  );
}


