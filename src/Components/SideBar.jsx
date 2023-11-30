import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
export const SideBar = () => {
  return (
    <Box  p={8} flex={1}  sx={{display:{xs:"none",sm:"Block"}}}>
      <Box position={"fixed"} >
      <List>
    <ListItem disablePadding>
      <ListItemButton Component='a' to='/'>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/">Home</Link></ListItemText>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton Component='a' to='/Pages'>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/Pages">Pages</Link></ListItemText>

      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton Component='a' to='/Groups'>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/Groups">Groups</Link></ListItemText>
      </ListItemButton>
    </ListItem><ListItem disablePadding>
      <ListItemButton Component='a' to='/Marketplace'>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/MarketPlace">Marketplace</Link></ListItemText>

      </ListItemButton>
    </ListItem><ListItem disablePadding>
      <ListItemButton Component='a' to='/Friends'>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/Friends">Friends</Link></ListItemText>

      </ListItemButton>
    </ListItem><ListItem disablePadding>
      <ListItemButton Component='a' to='/Settings'>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/Settings">Settings</Link></ListItemText>

      </ListItemButton>
    </ListItem><ListItem disablePadding>
      <ListItemButton Component='a' to='/Profile' >
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText><Link style={{textDecoration:"none" , color:'inherit'}} to="/Profile">Profile</Link></ListItemText>

      </ListItemButton>
    </ListItem>
    </List>
    </Box>
     </Box>
  )
}
