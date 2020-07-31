import React, { Component } from "react";
import { numbers, dateCreate } from "../../../api/korea";
import { Typography, Grid, CardContent, Card } from "@material-ui/core";
import cx from "classnames";
import styles from "./numberCard.module.css";

class numberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Infected: [],
      Recover: [],
      Deaths: [],
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
      <div>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={"auto"}
            md={"auto"}
            className={cx(styles.card, styles.confirm)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                전일대비 증가 수
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
            xs={"auto"}
            md={"auto"}
            className={cx(styles.card, styles.confirm)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Number of recoveries from COVID-19
              </Typography>
              <Typography>{this.state.Recover}</Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of increasing patients
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={"auto"}
            md={"auto"}
            className={cx(styles.card, styles.confirm)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Number of death caused by COVID-19
              </Typography>
              <Typography>{this.state.Deaths}</Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of increasing patients
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default numberCard;
