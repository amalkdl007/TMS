import React, { useEffect, useState } from 'react';
import './admintable.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button  from '@mui/material/Button';




function AdminTable(props) {
  const [tableContent, settableContent] = useState([])
  

  useEffect(()=>{
    fetchAPI();
  },[])

  async function fetchAPI(){
    const response=await fetch(`http://localhost:5001/api/enrollments`)
    const body=await response.json()
    console.log(body.length)
    
    settableContent(body)
    
    
    
  }

  
  return (
    <div className='container'>
    
    <TableContainer component={Paper}  >
      <Table  sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
        <TableHead >
          <TableRow  className='thead'>
            <TableCell id='id' align="right">Name</TableCell>
            <TableCell id='id' align="right">Email</TableCell>
            <TableCell id='id' align="right">Phone</TableCell>
            <TableCell id='id' align="right">Qualification</TableCell>
            <TableCell id='id' align="right">Skills</TableCell>
            <TableCell id='id' align="right">Current Company</TableCell>
            <TableCell id='id' align="right">Designation</TableCell>
            <TableCell id='id' align="right">Course</TableCell>
            <TableCell id='id' align="right">Employment</TableCell>
            <TableCell id='id' align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.length===0?<div className='text-pending'>No pending requests</div>:
          tableContent.map((row) => (
            <TableRow
              key={row.name} className='tablerow'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell id='id_name' align="right">{row.first_name} {row.last_name}</TableCell>
              <TableCell id='id_person' align="right">{row.email_address}</TableCell>
              <TableCell id='id_person' align="right">{row.phone}</TableCell>
              <TableCell id='id_person' align="right">{row.highest_qualification}</TableCell>
              <TableCell id='id_person' align="right">{row.skill_set}</TableCell>
              <TableCell id='id_person' align="right">{row.current_company_name}</TableCell>
              <TableCell id='id_person' align="right">{row.current_designation}</TableCell>
              <TableCell id='id_person' align="right">{row.ictak_course_handling}</TableCell>
              <TableCell id='id_person' align="right">
                  <FormControl required sx={{ m:1,minWidth: 160 }}>
                  
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      label="Employment *"
                      className='select'
                    >
                      
                      <MenuItem value='internal'>Internal</MenuItem>
                      <MenuItem value='empanelled'>Empanelled</MenuItem>
                      <MenuItem value='industry expert'>Industry Expert</MenuItem>
                    </Select>
                    
                  </FormControl>
              </TableCell>
              <TableCell  id='id_person' align="right">
                <Button variant="outlined" id='approve'>Approve</Button>
                <Button variant="outlined" id='reject' >Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
    
  );
}

export default AdminTable;

