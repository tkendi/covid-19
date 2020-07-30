import React from "react";
import { cityPicker } from "../../../api/korea";
import {
  FormControl,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import styles from "./city.module.css";

class city extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const cityData = await cityPicker();

    console.log(cityData);

    this.setState({
      data: cityData,
    });
  }
  render() {
    const data = this.state.data;
    return (
      <div>
        <FormControl className={styles.formControl}>
          <InputLabel id="city-select-label">Region</InputLabel>
          <NativeSelect
            defaultValue=""
            onChange={(e) => this.props.handleNumberChange(e.target.value)}
          >
            {data.map((city, i) => {
              return (
                <option value={i} key={i}>
                  {city}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

export default city;
