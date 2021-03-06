import React, { useState, useEffect } from 'react';
import AFL from '../Industry/Images/AFL.svg'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useNavigate, useLocation, Outlet, Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
            // marginLeft: drawerWidth,
            background: '#d2e1e6',
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
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState([]);

    const totalQuantity =cart.reduce((total,item)=> total + (item.quantity),0);

    useEffect(() => {
        getuser();
        products();
    }, []);

    const getuser = () => {
        axios.get("profile")
            .then((response) => {
                const getdata = response.data;
                localStorage.setItem('user', JSON.stringify(response.data))
                setUser(getdata)
            }).catch(error => console.error(error))
    }

    const products = () => axios.get("cart")
        .then(res => {
            setCart(res.data);
        }).then(
    ).catch(e => {
        console.log(e);
    });

    function logout() {
        localStorage.clear();
        history('/')
    }
    function updateProfile() {
        history('/profile')
    }
    function changePassword() {
        history('/changepassword')
    }
    function orderHistory() {
        history('/orderhistory')
    }

    const menuItems = [
        {
            text: "Homepage",
            icon: <HomeOutlinedIcon />,
            path: "/homepagefarmer",
        },
        {
            text: "My Machines",
            icon: <CalendarTodayIcon />,
            path: "/mymachines",
        },
        {
            text: "Residue",
            icon: <AddCircleOutlineOutlined />,
            path: "/residuedetails",
        },

        {
            text: "Connections",
            icon: <GroupAddOutlinedIcon />,
            path: "/connection",
        },
        {
            text: "Requests",
            icon: <FavoriteBorderIcon />,
            path: "/requestfarmer",
        },
        // {
        //     text: "Settings",
        //     icon: <SettingsOutlinedIcon />,
        //     path: "/settings",
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
                    <span>
                        <Link to="/cart" style={{ width: "30px", textAlign: "right", marginLeft: "10%", color: "black" }}>
                            <ShoppingCartIcon />
                        </Link>
                    </span>
                    <span >
                        <h4 style={{ color: "#172578" }}>{totalQuantity}</h4>
                    </span>
                    {localStorage.getItem('user') ?
                        <Nav >
                            <NavDropdown className={classes.user} style={{ color: "black" }} title={user.username}>
                                <NavDropdown.Item onClick={orderHistory} >Order History</NavDropdown.Item>
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
                <Typography variant='h6' style={{ color: "#ffffff" }} className={classes.title} >{user.name}</Typography>
                {/* <Typography variant="subtitle1" className={classes.bottom} >{user.email}</Typography> */}
                <br></br>
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