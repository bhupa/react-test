import React, { useState, useEffect } from 'react';
import { Box,Typography,Card,CardContent,Avatar,Divider,Modal } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import rows from '../../../dataSource.json';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
function Categories () {
    const [filterModel, setFilterModel] = useState(rows);
    const [open, setOpen] = useState(false);
    const columns = [
        { field: 'id', headerName: 'ID',style: { background: 'blue' } },
        { field: 'title', headerName: 'Title',style: { color: 'blue' } },
        { field: 'description', headerName: 'Description',style: { color: 'blue' } },
        { field: 'price', headerName: 'Price',style: { color: 'blue' } },
        { field: 'rating', headerName: 'Rating',style: { color: 'blue' } },
        { field: 'brand', headerName: 'Brand',style: { color: 'blue' } },
        { field: 'category', headerName: 'Category',style: { color: 'blue' } },
       
      ];
      const onCreatClick =()=>{

      }
      const onEditClick = (id) => {
        // Handle edit button click for the row with the given id
        console.log(`Edit button clicked for ID: ${id}`);
      };
    
      const onDeleteClick = (id) => {
        // Handle delete button click for the row with the given id
        console.log(`Delete button clicked for ID: ${id}`);
      };
      const handleClose =()=>{
        setOpen(false)
      }
    
    const handleOpen = () => {
        setOpen(true);
    };
      

    return (
        <Box component="main" sx={{padding:'20px',width: '100%'}}>
            <Stack direction="row" spacing={2} sx={{ marginBottom: '20px', alignItems: 'center' }}>
            <Typography sx={styles.pageTitle} variant='h5'>Category Lists</Typography>
            <div style={{ marginLeft: 'auto' }}>
            <Button  size="small" variant="contained" color="primary" onClick={() => handleOpen()} startIcon={<AddIcon />}>Create New</Button>
            </div>
            </Stack>
            <Box sx={{ height:'auto' }}>
              <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell key={column.field}>{column.headerName}</TableCell>
                        ))}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                        {columns.map((column) => (
                            <TableCell key={column.field}>{row[column.field]}</TableCell>
                        ))}
                        <TableCell>
                        <Stack direction="row" spacing={2}>
                            <Button  sx={{ ...styles.smallBtn }} size="small" variant="contained" color="primary" onClick={() => onEditClick(row.id)} startIcon={<EditIcon sx={styles.btnPadding} />}></Button>
                            <Button  sx={{ ...styles.smallBtn }}  size="small" variant="contained" color="secondary" onClick={() => onDeleteClick(row.id)} startIcon={<DeleteIcon sx={styles.btnPadding} />}></Button>
                            </Stack>
                        </TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
            <Modal open={open} onClose={() => handleClose()}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            {/* Modal content */}
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <Button variant="contained" color="secondary" onClick={() => handleClose()}>
                Close Modal
            </Button>
            </Box>
        </Modal>
        </Box>
        
    )
}
/** @type { import("@mui/material").SxProps} */
const styles = {
    pageTitle:{
        md:2,
        mb:'20px'
    },
    smallBtn:{
        minWidth:'44px',
        P:'5px 5px'
    },
    btnPadding:{
        p:'0px',
        m:'0px'
    }
}



export default Categories;