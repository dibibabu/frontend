import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
import { getAllUser, updateUserAdmin } from '../../api/UserRequest';
import {useState,useEffect} from 'react'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "Approved", 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  
];

const makeStyles = (status) => {
  if(status === "Approved"){
    return{
        background:'#E3F6DD',
        color:"green"
    }
  }else if(status === "Pending"){
    return{
        background:'#dde5f6',
        color:"red"
    }
  }else{
    return{
        background:'#8b8f3d',
        color:"white"
    }
  }
}

export default function BasicTable() {

  const [allUser,setAllUsers] = useState([])

  useEffect(()=>{
    const fetchPersons = async() =>{
        const {data} = await getAllUser();
        setAllUsers(data)
        console.log(data);

    }
    fetchPersons()
},[])

// block user
const blockUser = (userId) =>{
 
 let data ={
     block : true,
     _id :userId
 }
 updateUserAdmin(userId,data)
     
}

// unblock user
const unBlockUser = (userId) =>{
  let data = {
    block:false
  }
  updateUserAdmin(userId,data)
}
   
  return (
    <div className="Table">
    <h2 >Recent</h2>

    <TableContainer component={Paper} style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px",marginTop:"200px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Report</TableCell>
            <TableCell align="left">Edit User</TableCell>
            <TableCell align="left">id User</TableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {allUser.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="left">{row.block?"Not Active" :"Active"}</TableCell>
              <TableCell align="left">report</TableCell>
              {row.block?
              <TableCell align="left"><button className='button' onClick={() => unBlockUser(row._id)}>Unblock</button> </TableCell>:
              <TableCell align="left"><button className='button' onClick={() => blockUser(row._id)}>Block</button> </TableCell>}
                            <TableCell align="left">{row._id}</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
