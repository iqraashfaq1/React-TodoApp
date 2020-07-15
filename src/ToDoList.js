import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListCom from './ListCom' ;





const ToDoList = ()  => {
    const [item,setItem]=useState('');
    const [newitem,setNewItem]=useState([]);
    const itemEvent= (event) => {

        setItem(event.target.value);
    } ;
    const listOfItems =() => {
        setNewItem((prevValue) => {
            return[...prevValue,item] ;

        })
    } ;


return (
<>
    <div className="main_div">
    <div className="center_div">
    <br/>
    <h1>ToDo List</h1>
    
<div className= 'inLineBlockTest'>
    <input type="Text" value={item} placeholder="Add an item" onChange={itemEvent}/> 
    {/* <br/> */}
    <button className='newBtn' onClick={listOfItems}>
        <AddCircleIcon/>


    </button>
    </div>
    <ol>
        {newitem.map((val,index) =>{
            return <ListCom  key= {index} text={val}/> ;
        })
        }
    </ol>
    <br/>

    </div>
    </div>
</>
     
)
}
export default ToDoList;
