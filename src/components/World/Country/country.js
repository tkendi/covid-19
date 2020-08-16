import React from "react";
import { cityPicker } from "../../../api/world";
import { TextField, MenuItem } from "@material-ui/core";
import styles from "../../style/picker.module.css";

class Country extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const countryData = await cityPicker();
    console.log(countryData);
    this.setState({
      data: countryData,
    });
  }
  render() {
    const data = this.state.data;
    return (
      <div className={styles.form}>
        <TextField
          select
          label="region"
          className={styles.formControl}
          onChange={(e) => this.props.handleCountryChange(e.target.value)}
        >
          {data.map((city, i) => (
            <MenuItem key={i} value={i}>
              {city}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

export default Country;
