import { Box } from '@mui/material'
import * as React from 'react';
import Cards from './Cards';

export const Feed = () => {
  return (
    <Box  p={5} flex={4}>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </Box>
  )
}
