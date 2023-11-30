import * as React from 'react';
import * as mui from "@mui/material";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useMENU_LIST } from '../configs/site'

const drawerWidth = 200;

interface Props {
  window?: () => Window;
}

export default function TablePage(props: Props) {
  let navigate = useNavigate()
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseNavMenu = (page: string) => {
    navigate(page);
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  

  const drawer = (
    <div>
      <mui.Toolbar />
      <mui.Divider />
      <mui.List>
        {useMENU_LIST().map((page) => (
          <div>
            {Object.values(page)[0].length > 1  ?
              <mui.ListItemButton onClick={handleClick}>
                <mui.ListItemText primary={Object.keys(page)} />
                  {open ? <ExpandLess /> : <ExpandMore />}
              </mui.ListItemButton>
              :
              Object.values(page)[0].map((item: any) => (
                <mui.ListItem key={item.code} disablePadding>
                  <mui.ListItemButton key={item.code}
                      onClick={()=>handleCloseNavMenu(item.route as string)}
                      sx={{ my: 2, color: 'block', display: 'block' }}>
                        <mui.ListItemText primary={item.name} />
                  </mui.ListItemButton>
                </mui.ListItem>
              ))}
              {Object.values(page)[0].length > 1  &&
                <mui.Collapse in={open} timeout="auto" unmountOnExit>
                  <mui.List component="div" disablePadding>
                    {Object.values(page)[0].map((item: any) => (
                      <mui.ListItemButton
                        key={item.code}
                        onClick={()=>handleCloseNavMenu(item.route as string)}
                        sx={{ pl: 4 }}>
                          <mui.ListItemText primary={item.name} />
                      </mui.ListItemButton>
                    ))}
                  </mui.List>
                </mui.Collapse>
              }
            </div>
        ))}
      </mui.List>
    </div>
  );

  return (
    <mui.Box sx={{ display: 'flex' }}>
      <mui.AppBar
        color="inherit"
        position="fixed"
      >
        <mui.Toolbar>
          <mui.IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </mui.IconButton>
        </mui.Toolbar>
      </mui.AppBar>
      <mui.Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <mui.Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </mui.Drawer>
        <mui.Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </mui.Drawer>
      </mui.Box>
      <mui.Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <mui.Toolbar />
        <Outlet></Outlet>
      </mui.Box>
    </mui.Box>
  );
}
