import React from 'react'
import Sidebar from '../../Admin/Sidebar/Sidebar'
import '../AdminD/Admin.css'
import Table from '../../Admin/Table/Table'



const UserManagement = () => {
  return (
    <div className='admin'>
    <div className="AppGlass">
        <Sidebar/>
        <Table/>

       
        </div>
        </div>
  
  )
}

export default UserManagement