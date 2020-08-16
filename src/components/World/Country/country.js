import React from "react";
import { countryPicker } from "../../../api/world";
import { TextField, MenuItem } from "@material-ui/core";
import styles from "../../style/picker.module.css";

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const countryData = await countryPicker();
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
          {data.map((country, i) => (
            <MenuItem key={i} value={i}>
              {country}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

export default Country;
