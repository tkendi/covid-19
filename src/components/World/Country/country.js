import React from "react";
import { countryPicker } from "../../../api/world";
import { TextField, MenuItem } from "@material-ui/core";
import styles from "../../style/picker.module.css";

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const countryData = await countryPicker();
    this.setState({
      data: countryData,
    });
  }
  render() {
    let data = this.state.data;
    data = Array.from(data)
    console.log(typeof(data))

    return (
      <div className={styles.form}>
        <TextField
          select
          label="region"
          className={styles.formControl}
          onChange={(e) => this.props.handleCountryChange(e.target.value)}
        >
          {data.map((data, index) => (
            <MenuItem key={index} value={index}>
              {data}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

export default Country;
