import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  CssBaseline,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from '../SideBar/drawer'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    }
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !(this.state.mobileOpen)
    })
  }

  render() {
    const classes = this.props;
    return (
      <div className = {classes.root}>
        <CssBaseline />
        <AppBar position = "fixed" className = {classes.appBar}>
          <Toolbar>
            <IconButton color = "inherit" arial-label = "open drawer" edge = "start" onClick = {this.handleDrawerToggle} className = {classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant = "h6" noWrap>
              Covid-19
            </Typography>
           </Toolbar>
        </AppBar>
        <nav className = {classes.drawer} arial-label="mailbox floders">
          <Hidden smUp implementation = "css">
            <Drawer />
          </Hidden>
        </nav>  
      </div>
    );
  }
}

export default Appbar;
