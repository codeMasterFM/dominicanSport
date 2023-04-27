import React, { useRef, useEffect } from 'react';
import Nav from '../components/Nav'
import ListPost from '../components/ListPost'
import Video from '../components/Video'
import '../css/homecontainer.css'
import Adds from '../components/Adds';

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
         <Adds/>
        </div>
        </div>
    </div>
    
  );
}


