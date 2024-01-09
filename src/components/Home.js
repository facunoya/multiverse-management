import classes from "./Home.module.css"
import { useState } from "react"
import Users from "./Users"
const Home = () => {
    const [selectedPage, setSelectedPage] = useState(0)
    return (
        <div className={classes.container}>
            <h1>Multiverse Management </h1>
            {selectedPage === 0 &&
                <div className={classes.navBarContainer}>
                    <button onClick={() => {
                        console.log(selectedPage)
                        setSelectedPage(1)
                    }}>Users</button>
                    <button>Fighters</button>
                    <button>Objects</button>
                </div>}
            {
                selectedPage === 1 && <Users></Users>
            }

        </div>

    )
}
export default Home