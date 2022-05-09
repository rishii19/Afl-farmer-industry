import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import { Nav, NavDropdown } from 'react-bootstrap'



const drawerWidth = 250

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            marginLeft: theme.spacing(12),

        },
        bottom: {
            marginLeft: theme.spacing(7)

        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: '#f4f4f4'
        },
        date: {
            flexGrow: 1,

        },

        toolbar: theme.mixins.toolbar,
        avatar: {
            marginTop: theme.spacing(4),
            marginLeft: theme.spacing(10),
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        avatar1: {
            marginLeft: theme.spacing(2)
        }
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const history = useNavigate();
    // const state = useSelector((state) => state.handleCart)
    const user = JSON.parse(localStorage.getItem('user_info'));
    console.warn(user);
    function logout() {
        localStorage.clear();
        history('/')
    }

    const menuItems = [
        {
            text: 'Homepage',
            icon: <HomeOutlinedIcon color="primary" />,
            path: '/homepagei'
        },
        {
            text: 'Machine List',
            icon: <CalendarTodayIcon color="primary" />,
            path: '/homepagei/machinelist'
        },
        {
            text: 'Add Machine',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/homepagei/addmachine'
        },
        {
            text: 'Connections',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/homepagei/connections'
        },
        {
            text: 'Requests',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/homepagei/request'
        },

        {
            text: 'Exit',
            icon: <ExitToAppRoundedIcon color="primary" />,
            path: '/'
        },
    ];

    return (
        <div className={classes.root}>
            {/* app bar */}
            {/* <AppBar
                position="fixed"
                className={classes.appBar}
                elevation={0}

            >
                <Toolbar>
                    <Typography className={classes.date}
                        color='primary'
                        variant='h5'
                        align='center'>
                        AFL
                    </Typography>
                    <a href='#'
                    color='primary'
                    variant='h6'
                     onClick={logout}>Logout</a>
                    { localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> 
                    :null
                    } 
                
                </Toolbar>
            </AppBar > */}

            {/* side drawer */}
            < Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }
                }
                anchor="left"

            >
                <div>
                    {/* <Typography variant="h5" className={classes.title}>
            AFL
          </Typography> */}
                </div>
                <Avatar className={classes.avatar} align="center" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Typography variant='h6' className={classes.title}>Mario</Typography>
                <Typography variant="subtitle1" className={classes.bottom} >mario@gmail.com</Typography>
                <br></br>
                {/* links/list section */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer >

            {/* main content */}
            {/* <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div> */}
            <Outlet />
        </div >

    )
}