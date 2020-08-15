import React from "react";
import { cityPicker } from "../../../api/world";
import { TextField, MenuItem } from "@material-ui/core";

class country extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const countryData = await cityPicker();
    this.setState({
      data: countryData,
    });
  }
  render() {
    const data = this.state.data;
    return (
      <React.Fragment>
        <TextField
          select
          label="region"
        >
          {data.map((city, i) => (
            <MenuItem key={i} value={i}>
              {city}
            </MenuItem>
          ))}
        </TextField>
      </React.Fragment>
    );
  }
}

export default country;
