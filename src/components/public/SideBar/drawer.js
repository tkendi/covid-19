import React from "react";
import {
  Drawer,
  Divider,
  Link,
  List,
  makeStyles,
  ListItemIcon,
  ListItem,
} from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import HomeIcon from "@material-ui/icons/Home";
import world from "../../World/world";
import korea from "../../Korea/korea";
import { Route } from "react-router-dom";
import main from "../../Main/main";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link href="/">World Status</Link>
        </ListItem>
        <Divider />
        <List>
          {/* <ListItem button>
            <ListItemIcon>
              <AcUnitIcon />
            </ListItemIcon>
            <Link href="/world">World Status</Link>
          </ListItem> */}

          <ListItem button>
            <ListItemIcon>
              <AlternateEmailIcon />
            </ListItemIcon>
            <Link href="/korea">Korea Status</Link>
          </ListItem>
        </List>
      </Drawer>
      {/* <Route path="/" component={world} exact={true} /> */}
      <Route path="/korea" component={korea} />
    </div>
  );
}
