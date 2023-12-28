import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

import classes from './RootLayout.module.css'

function RootLayout(){
    return (
        <div className={classes.container}>
        <div className={classes.nav}>
            <SideBar/>
        </div>
        <div className={classes.content}>
            <Outlet />
        </div>
        </div>
        
    )
}

export default RootLayout