import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./crud.module.css"

const Edit=()=>{
    let {index}=useParams()
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    useEffect(()=>{axios.get(`http://localhost:3000/content/${index}`)
    .then((x)=>{
        console.log(x.data.name)
        setName(x.data.name)
        setCompany(x.data.company)
        setSalary(x.data.salary)
    })
    .catch(()=>{console.log("data is not added")})},[index])

    let updatename =(e)=>{setName(e.target.value)}

    let updatecompany=(e)=>{setCompany(e.target.value)}

    let updatesalary=(e)=>{setSalary(e.target.value)}

    let formupdate =()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,payload)
        .then(()=>{console.log("data updates");})
        .catch(()=>{console.log("data is not updates");})
        navigate("/users")
    }



    return(
        <div>
             <section id={style.createuser}>
            <table>
                <tr>
                    <td><label htmlFor="">Name :</label></td>
                    <td><input type="text" value={name} onChange={updatename}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">salary :</label> </td>
                    <td><input type="text" value={salary} onChange={updatesalary}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">company :</label></td>
                    <td><input type="text" value={company} onChange={updatecompany}/></td>
                </tr>
                <tr>
                    <th colSpan={2}><button onClick={formupdate} >edit</button></th>
                </tr>
            </table>
        </section>

        </div>
    )
}
export default Edit