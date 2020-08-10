import React from "react";
import { Typography } from "@material-ui/core";
import styles from './main.module.css'


const main = () => {
  return (
    <div>
      <Typography className = {styles.text} >Main</Typography>
    </div>
  );
};

export default main;
