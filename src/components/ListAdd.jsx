import React from 'react'
import Adds from './AddsBaner'
import Adds2 from './AddsBaner2';
import ListJuegos from './ListJuegos';


const ListAdd = () => {
    const lol = [1,2,3,4,5,6,7,8,9]
    return (
        <div>
            <Adds />
            <Adds2/>
            <Adds />
            <Adds2/>
            <Adds2/>
            <Adds2/>
            <ListJuegos/>
        </div>
      );
}

export default ListAdd