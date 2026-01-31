import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import Students from '../pages/students/Students';
import Teachers from '../pages/Teachers';
import Notices from '../pages/Notices';
import './Drawer.css';


const routeMap = {
    home: '/',
    students: '/student',
    teachers:'/teacher',
    notices:'/notices'
}
export default function AnchorTemporaryDrawer(props) {
  const {opendrawer, setOpendrawer} = props

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {['Home', 'Teachers', 'Students', 'Notices'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={routeMap[text.toLowerCase()] || '/'}>{text}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>      
          <Drawer
            anchor={"left"}
            open={opendrawer}
            onClose={() => setOpendrawer(false)}
            >
            {list()}
          </Drawer>
    </div>
  );
}
