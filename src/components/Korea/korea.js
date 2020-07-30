import React from "react";
import City from "../public/City/city";
import Number from "../public/numbberCard/numberCard";
import styles from "./korea.module.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: "",
    city: ""
  };

  handleNumberChange = async (city, number) => {
    console.log(city);
    this.setState({
      data: city,
    });
  };


  render() {
    return (
      <React.Fragment>
        <div className={styles.root}>
          <AppBar position="static">
            <Toolbar className={styles.toolBar}>
              {/* <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={styles.menuButton}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h5" noWrap className={styles.title}>
                국내 코로나 바이러스 시도별 상황
              </Typography>
              <Typography>
                현재상황
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className={styles.form}>
          <City handleNumberChange={this.handleNumberChange} />
          <Number city={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
