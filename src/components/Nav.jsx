import style from "./crud.module.css"
import {Link} from "react-router-dom"
const Nav =()=>{
    return (
        <div id={style.nav}>
            <ol>
               <li><Link to="/createusers">create-users</Link></li>
               <li><Link to="/users">users</Link></li>
            </ol>

        </div>
    )
}
export default Nav