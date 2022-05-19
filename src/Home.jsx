import React from 'react';
import { useState } from "react";
import Date from "./Date";
import style from "./Todo.module.css";
function Home() {
  const [item, setitem] = useState("");
  const [arr, setarr] = useState([]);
  const[line,setline] = useState(false);
  const changeeve = (e) => {
    setitem(e.target.value);
  };
  const add = () => {
    setarr((olditem) => {
      return [...olditem, item];
    });
  };
   const remove = (index)=>{
        arr.splice(index,1);
        setarr([...arr])}
  
  const check = ()=>{
    setline(true);
  }
  return (
    <div>
      
      <h1 className={style.todo}>To Do App</h1>
      <br />
      <input type="text" placeholder="Add Item" onChange={changeeve} className={style.add}/>
      &nbsp;
      <button onClick={add} class="bg-success text-white rounded">ADD</button>
      <ul className={style.item} class="list-group w-50 list-inline mx-auto justify-content-center">
        {arr.map((itemval,i) => {
          return (<div className={style.div}>
                          <li class="list-group-item border border-white rounded" style={{textDecoration: line ? "line-through" : null}}>
                            {itemval}&nbsp;
                            <input type="text" />&nbsp;
                            <button onClick={()=>remove(i)}class="bg-danger text-white rounded">Delete Item</button><br />
                            <Date/>
                            <input type="checkbox" name="" id=""  className={style.checkbox} onClick={check} input/>
              
                           </li>&nbsp;
                          
                     
                    </div>
                      )
        })}
      </ul>
    </div>
  );
}

export default Home;
