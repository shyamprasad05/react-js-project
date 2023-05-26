import { useState} from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateUsers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let nav=useNavigate()
    let namedata=(e)=>{
        console.log(e.target.value)

        setName(e.target.value)
    }
    let salarydata=(e)=>{
        setSalary(e.target.value)
    }
    let companydata=(e)=>{
        setCompany(e.target.value)
    }
    let formhandle=()=>{
        let payload={name,salary,company}
        axios.post( " http://localhost:3000/content",payload)
        .then(()=>{console.log("data is added to database")})
        .catch(()=>{console.log("data is not added to database")})
        nav("/users")
    }
    return(
        <section id={style.createuser}>
            <table>
                <tr>
                    <td><label htmlFor="">Name :</label></td>
                    <td><input type="text"  value={name} onChange={namedata}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">salary :</label>
                    </td>
                    <td><input type="text" value={salary} onChange={salarydata}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">company :</label></td>
                    <td><input type="text" value={company} onChange={companydata} /></td>
                </tr>
                <tr>
                    <th colSpan={2}><button onClick={formhandle}>submit</button></th>
                </tr>
            </table>
        </section>
    )
}
export default CreateUsers