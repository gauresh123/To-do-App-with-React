import React from 'react';
import { useState } from "react";
import style from "./Todo.module.css";


function Date (){
const[date,setdate]=useState("");
const[arry,setarry]=useState([]);
const itdte = (e)=>{
    setdate(e.target.value);
}
const click = ()=>{
    setarry((olddt)=>{
        return [...olddt,date];
    })
}

    return (
        <div>
            <input type="date" name="" id="" onChange={itdte} className={style.date}/>
            <button onClick={click} style={{marginLeft:"5px",marginBottom:"6px",marginTop:"-6px"}} className={style.date} class="bg-success text-white rounded">Add Date</button>
            <ol>
                { 

                    arry.map((arryval)=>{
                        return (<div>
                            <li className={style.datelist}>Due Date {arryval}
                            </li>
                            </div>
                        )
                    })
                    
                }
            </ol>
        </div>
    )
}

export default Date;