import React, { Component } from "react";
import {numbers} from '../../../api/korea'
import { Typography, Grid, CardContent, Card } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";
import styles from "../../style/number.module.css"

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
    console.log(this.props.city)
    const data = await numbers(this.props.city);
    if (!data) {
      return "Loading...";
    }
    this.setState({
      Infected: data.numbers.DPN,
      Rate: data.numbers.Rate,
      Deaths: data.numbers.Death,
      date: data.date,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      const data = await numbers(this.props.city);
      console.log(data)
      this.setState({
        Infected: data.numbers.DPN,
        Rate: data.numbers.Rate,
        Deaths: data.numbers.Deaths,
        date: data.date
      });
    }
  }

  render() {
    return (
      <div className={styles.form}>
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
              <Typography>
                <CountUp
                  start={0}
                  end={this.state.Infected}
                  duration={2.5}
                  separator=","
                />
              </Typography>
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
              <Typography>
                <CountUp
                  start={0}
                  end={this.state.Recover}
                  duration={2.5}
                  separator=","
                />
              </Typography>
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
              <Typography>
                <CountUp
                  start={0}
                  end={this.state.Deaths}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of deaths by COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default numberCard;
