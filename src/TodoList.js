import React, {useState} from 'react';
import styled from 'styled-components';
import {TodoItem} from './TodoItem';  


export const TodoList = () => {

    const [items,setItems] = useState([]);
    const [itemid,setitemId] = useState(0);
    //add function
    const add = () => {
        setItems([...items,itemid]);
        setitemId(itemid +1);
    }
    //filter
    //sort
    //delete
    const dItem = itemId => () => {
        let newArr = items.filter( x => x !== itemId);
        setItems(newArr);
    }

   //allow drop
    //e.preventDefault()

   //onDrop
    

   //drag
//    const onDrag = e => {
//         e.dataTransfer.setData('text',e.target.key)

//    }
    //get element key value



    return (

        <StyledList>
            <div><button onClick={add} className="add">Add</button></div>
            {items.map(id => <TodoItem key={id} d={dItem(id)}></TodoItem>)}
            
            

        </StyledList>
    )





}


const StyledList = styled.div `

    display:flex;
    margin: 100px auto;
    height:800px;
    width:350px;;
    border:1px solid black;
    flex-direction:column;
    overflow-y:scroll;
    .add{
        
    }



`
