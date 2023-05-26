import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from "./crud.module.css"

const Users=()=>{
    
    let [data,setData]=useState([])

    useEffect(()=>{axios.get(`http://localhost:3000/content`)
    .then((x)=>{
        console.log(x)
        setData(x.data) })
    .catch(()=>{console.log("data not fetched")})},[])

    let deletedata=(x)=>{axios.delete(`http://localhost:3000/content/${x}`)
    
}
    return (
       <div id={style.users}>
        {data.map((x)=>{
            return (
            <div id={style.cards}>
                <table>
                    <tr>
                        <td>Name :</td>
                        <td>{x.name}</td>
                    </tr>
                    <tr>
                        <td>Salary :</td>
                        <td>{x.salary}</td>
                    </tr>
                    <tr>
                        <td>Company :</td>
                        <td>{x.company}</td>
                    </tr>
                    <tr>
                        <td> <button><Link to={`/edituser/${x.id}`}>edit</Link></button></td>
                       <td> <button onClick={()=>{deletedata(x.id)}}>delete</button></td>
                       
                    </tr>
                    
                </table>
            </div>)
        })}

       </div>)


    
}
export default Users