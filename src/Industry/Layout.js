import React, { useState, useEffect } from 'react';
import AFL from '../Industry/Images/AFL.svg'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ShopIcon from '@material-ui/icons/Shop'
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@material-ui/icons/Home';
import { GoRequestChanges } from 'react-icons/go'
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import { Nav, NavDropdown } from 'react-bootstrap'
import axios from '../api/axios';


const drawerWidth = 250

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(2),
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            color: 'white'
        },
        drawerPaper:
        {
            width: drawerWidth,
            backgroundColor: '#172578',

        },
        hover: {
            color: '#ffffff',
            "&:hover,&:focus": {
                backgroundColor: "#293683",
                color: "white",
            },
        },
        active: {
            background: '#293683',
        },

        title: {
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(6),

        },
        bottom: {
            marginLeft: 20

        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: '#d2e1e6',
            // #b8cfec
            height: 60
        },
        logo: {
            width: 70,
            height: 70
        },
        navtop: {
            flexGrow: 1,
        },
        user: {
            font: 20,
            color: '#ffffff',
            padding: 10
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

export default function SideBar({ children }) {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const history = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        getuser();
    }, []);

    const getuser = () => {
        axios.get("profile")
            .then((response) => {
                const getdata = response.data;
                localStorage.setItem('user', JSON.stringify(response.data))
                setUser(getdata)
            }).catch(error => console.error(error))
    }

    function logout() {
        localStorage.clear();
        history('/')
    }
    function updateProfile() {
        history('/profilei')
    }
    function changePassword() {
        history('/changepasswordi')
    }

    const menuItems = [
        {
            text: 'Homepage',
            icon: <HomeIcon />,
            path: '/homepagei'
        },
        {
            text: 'Machine List',
            icon: <InventoryIcon />,
            path: '/machinelist'
        },
        {
            text: 'Add Machine',
            icon: <AddCircleOutlineOutlined />,
            path: '/addmachine'
        },
        {
            text: 'Residues',
            icon: <ShopIcon />,
            path: '/residues'
        },
        {
            text: 'Connections',
            icon: <PeopleAltIcon />,
            path: '/connections'
        },
        {
            text: 'Requests',
            icon: <GoRequestChanges />,
            path: '/requestpage'
        },
        // {
        //     text: "Settings",
        //     icon: <SettingsOutlinedIcon />,
        //     path: "/settingsi",
        // },
    ];

    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                position="fixed"
                className={classes.appBar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.navtop}  >
                        <img className={classes.logo} src={AFL} alt="logo" />
                    </Typography>
                    {localStorage.getItem('user') ?
                        <Nav>
                            <NavDropdown className={classes.user} title={user.username}>
                                <NavDropdown.Item onClick={updateProfile} >Update Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={changePassword} >Change Password</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                    }
                </Toolbar>
            </AppBar >

            {/* side drawer */}
            < Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }
                }
                anchor="left"

            >
                <Avatar className={classes.avatar} style={{ backgroundColor: "#ffffff" }} align="center" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Typography variant='h6' style={{ color: "#ffffff", marginBottom: "5px" }} className={classes.title} >{user.name}</Typography>

                {/* links/list section */}
                <List >
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            className={location.pathname === item.path ? classes.active : classes.hover}

                        >
                            <ListItemIcon style={{ color: '#fff' }} >{item.icon}</ListItemIcon>
                            <ListItemText style={{ color: '#fff' }} primary={item.text} />
                        </ListItem>
                    ))}
                    <ListItem
                        className={classes.active ? classes.hover : null}
                        button
                        onClick={() => logout()}
                    >
                        <ListItemIcon style={{ color: '#fff' }} ><ExitToAppRoundedIcon /></ListItemIcon>
                        <ListItemText style={{ color: '#fff' }} primary="Logout" />
                    </ListItem>
                </List>
            </Drawer >
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
            <Outlet />
        </div >

    )
}