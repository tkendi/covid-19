import React, { Component } from "react";
import { numbers, dateCreate } from "../../../api/korea";
import { Typography, Grid, CardContent, Card } from "@material-ui/core";
import cx from "classnames";
import styles from "./numberCard.module.css";

class numberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Infected: 0,
      Recover: 0,
      Deaths: 0,
      date: "",
    };
  }

  async componentDidMount() {
    const data = await numbers(this.props.city);
    const createDt = await dateCreate(this.props.city);
    if (!data) {
      return "Loading....";
    }
    this.setState({
      Infected: data.DPN,
      Recover: data.Recover,
      Deaths: data.Death,
      date: createDt,
    });
    console.log(data, createDt);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      const data = await numbers(this.props.city);
      const createDt = await dateCreate(this.props.city);
      this.setState({
        Infected: data.DPN,
        Recover: data.Recover,
        Deaths: data.Death,
        date: createDt,
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className = {styles.form}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.confirm)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography>{this.state.Infected}</Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of increasing patients
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovers
              </Typography>
              <Typography>{this.state.Recover}</Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of recovers by COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography>{this.state.Deaths}</Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of patients by COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default numberCard;
