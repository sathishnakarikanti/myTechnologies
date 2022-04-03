import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Select from 'react-select';

function Multid(){ //funtionname Multid

    let playGame=[   //array of objects
        {
            value:'cricket', //value mustbe unique it will 1,2,3,..or a,b,c....
            label:'cricket'
        },
        {
            value:'footbal',
            label:'footbal'
        },
        {
            value:'vollyball',
            label:'vollyball'
        },
        {
            value:'basketball',
            label:'basketball'
        },
        {
            value:'chess',
            label:'chess'
        },
        {
            value:'chess1',
            label:'carroms'
        },
    ];
    var [displayvalue1,getvalue]=useState(); //array values
                                            //using useState so 2 parameters will come .
                                            //getvalues for state values
                                            //displayvalues for setState
    
    var ddlonchange = (e)=>{   //declaring an event,event contains selected dropdown values.
 getvalue(Array.isArray(e)?e.map(x => x.label):displayvalue1);  //set updatation
                                                            //Array: selecting multiple dropdown values taking in to Array
                                                            //isArray: selcted items comes into array
     }
        return(
            <div>      
                      {/* dropdownlist */}
                      <Select isMulti options={playGame} onChange={ddlonchange}></Select>
                      
                      {/* selected items printing in  the browser */}
                      <center><h1>The selected Game is:</h1>{`${displayvalue1} `}</center> 

            </div>
        );
    
}
export default Multid;