import React, { useState, useEffect } from 'react';
import { Box,Typography,Card,CardContent,Avatar,Divider } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import rows from '../../../dataSource.json'
function Categories () {
    const [filterModel, setFilterModel] = useState(rows);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'price', headerName: 'Price', width: 200 },
        { field: 'rating', headerName: 'Rating', width: 200 },
        { field: 'brand', headerName: 'Brand', width: 200 },
        { field: 'category', headerName: 'Category', width: 200 },
      ];

    return (
        <Box>
        <Typography sx={styles.pageTitle} variant='h5'>Category Lists</Typography>

        <Box sx={{ height:'auto', width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
        </Box>
    )
}
/** @type { import("@mui/material").SxProps} */
const styles = {
    pageTitle:{
        md:2
    },
}



export default Categories;