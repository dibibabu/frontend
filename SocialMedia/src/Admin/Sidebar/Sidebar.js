import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../img/logo.png'
import { SidebarData } from '../../data/Data.js'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'
import { Link, Navigate, NavLink } from 'react-router-dom'
import UserManagement from '../../pages/UserManagement/UserManagement'
import { Admin } from '../../pages/AdminD/Admin'
import { UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart } from '@iconscout/react-unicons'
import {useDispatch} from 'react-redux'
import { logOut } from '../../action/AuthAction'


const Sidebar = () => {

    const dispatch = useDispatch()

    const [selected, setSelected] = useState(0)
    const [expended, setExpended] = useState(true)


    const sidebarVariants = {
        true: {
            left: "0"
        },
        false: {
            left: "-60%"
        }
    }

    // logout admin

    const handleLogout = ()=>{
        dispatch(logOut())
    }

    return (
        <>

            <div className='bars' style={expended ? { left: "44%" } : { left: "5%" }}
                onClick={() => setExpended(!expended)}
            >
                <UilBars />
            </div>
            <motion.div className="Sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expended}` : ''}
            >
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>Co<span>nn</span>ect</span>

                </div>

                {/* menu side */}
                <div className="menu">
                 
              

                 <Link to='/admin' style={{textDecoration: 'none',color:"white"}}>
                    <div className={selected === 0 ? 'menuItem active' : "menuItem"}
                        onClick={() => { setSelected(0) }}>
                    
                        <div>
                            <UilEstate />

                        </div>
                            <span >
                                DashBooard
                            </span>
                    </div>
                        </Link>
                        
                        <Link to='/admin/user' style={{textDecoration: 'none',color:"white"}}>
                    <div className={selected === 1 ? 'menuItem active' : "menuItem"}
                        onClick={() => { setSelected(1) }} >
                        <div>
                            <UilUsersAlt />

                        </div>

                            <div  onClick={() => setSelected(1)}>
                                Users
                            </div>
                    </div>
                        </Link>
                        <Link to='/post' style={{textDecoration: 'none',color:"white"}}>
                    <div className={selected === 2 ? 'menuItem active' : "menuItem"}
                        onClick={() => { setSelected(2) }}
                    >
                        <div>
                            <UilPackage />

                        </div>
                            <span >
                            Posts
                        </span>
                    </div>
                        </Link>
                    <div className={selected === 3 ? 'menuItem active' : "menuItem"}
                        onClick={() => { setSelected(3) }}
                    >
                        <div>
                            <UilChart />

                        </div>
                        <span >
                            Analytics
                        </span>
                    </div>


                    <div className="menuItem" onClick={handleLogout}>
                        <UilSignOutAlt /> Sign Out
                    </div>


                </div>
            </motion.div>
        </>
    )
}

export default Sidebar