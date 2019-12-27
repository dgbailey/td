import React, {useState} from 'react';
import styled from 'styled-components';



export const TodoItem = (props) => {
    const {d:del} = props;

    const [status,setStatus] = useState(false);

    //toggle status
    const toggle = () => {
        setStatus(!status)
    }

    return (

        <StyledTodoItem className={!status ? '':'complete'}>
            <button onClick={toggle} >Complete</button>
            <button onClick={del}>Delete</button>
            <input className="todo-text"></input>
        </StyledTodoItem>

    )





}



const StyledTodoItem = styled.div `

    height:100px;
    width:100%;
    border:1px solid black;
    &:hover{
        cursor:pointer;
    }
    &.complete{
        background:green;
    }



`