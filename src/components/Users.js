import classes from "./Users.module.css"
import { useState } from "react"
const Users = () => {
    const [selectedPage, setSelectedPage] = useState(0)
    return (
        <div className={classes.container}>
            <button>Volver</button>
            <div>
                <h4>Crud de usuarios</h4>
            </div>
        </div>

    )
}
export default Users