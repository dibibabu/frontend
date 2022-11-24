import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Admin.css'
import Sidebar from '../../Admin/Sidebar/Sidebar'
import MainDash from '../../Admin/MainDash/MainDash'
import RightSide from '../../Admin/RightSide/RightSide'





export  const Admin = () => {


  

  return (
  <div className='admin'>
<div className="AppGlass">

<Sidebar/>
 <MainDash/>
  <RightSide/>

</div>
  </div>
  )
}

