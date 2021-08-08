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
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import world from "../../World/world";
import korea from "../../Korea/korea.tsx";
import news from "../../News/list/newsList";
import { Route } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function SideBar() {
    const classes = useStyles();

    return ( <
        div >
        <
        Drawer className = { classes.drawer }
        variant = "permanent"
        classes = {
            { paper: classes.drawerPaper } }
        anchor = "left" >
        <
        div className = { classes.toolbar }
        />

        <
        Divider / >
        <
        List >
        <
        ListItem button >
        <
        ListItemIcon >
        <
        HomeIcon / >
        <
        /ListItemIcon> <
        Link href = "/" > World Status < /Link> <
        /ListItem> <
        ListItem button >
        <
        ListItemIcon >
        <
        AlternateEmailIcon / >
        <
        /ListItemIcon> <
        Link href = "/korea" > Korea Status < /Link> <
        /ListItem> <
        ListItem button >
        <
        ListItemIcon >
        <
        AnnouncementIcon / >
        <
        /ListItemIcon> <
        Link href = "/news " > Corona News < /Link> <
        /ListItem> <
        /List> <
        /Drawer> <
        Route path = "/"
        component = { world }
        exact = { true }
        /> <
        Route path = "/korea"
        component = { korea }
        /> <
        Route path = "/news"
        component = { news }
        /> <
        /div>
    );
}