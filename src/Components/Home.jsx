import { Box, Stack } from '@mui/material';
import Add from './Add';
import { Feed } from './Feed';
import RightBar from './RightBar';
import { SideBar } from './SideBar';
const Home = () => {
  return (
    <Box >
    <Stack direction={"row"} spacing={2} justifyContent="space-between" >
    <SideBar />
    <Feed/>
    <RightBar/>
    </Stack>
    <Add/>
    </Box>
  )
}

export default Home