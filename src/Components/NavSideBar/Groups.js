import { Box, Typography } from '@mui/material'
import React from 'react'
import { SideBar } from '../SideBar'

const Groups = () => {
  return (
    <>
    <Box>
    <SideBar/>
    </Box>
    <Box  position="absolute" bottom={350} left={700}>
        <Typography variant="h6" >I am Pages</Typography>
      </Box>
    </>
  )
}

export default Groups