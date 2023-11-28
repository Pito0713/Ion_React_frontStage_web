import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@mui/material/Drawer';

const pages = ['/mainPage/tablePage', '/mainPage/settingPage'];

function Nav () {
  let navigate = useNavigate()
  const handleCloseNavMenu = (page: string) => {
    navigate(page);
  };

  return (

      <Drawer anchor={'left'}
      open={true} sx={{ width: 180, height:'120vh',bg: '#FFFFFF' }}>
        <MenuList >
          {pages.map((page) => (
            <MenuItem>
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page as string)}
                sx={{ my: 2, color: 'block', display: 'block' }}
              >
                {page}
              </Button>
            </MenuItem>
          ))}
        </MenuList>
        </Drawer>


  );
}
export default Nav;