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
  Drawer,
  useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

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
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  render() {
    const {window} = this.prop;
    const classes = this.props;
    const theme = useTheme()
    const container = window !== undefined ? () => window().document.body : undefined
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              arial-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Covid-19
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} arial-label="mailbox floders">
          <Drawer
            containert={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classe={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >

          </Drawer>
        </nav>
      </div>
    );
  }
}

export default Appbar;
