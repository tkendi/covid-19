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
    console.log(countryData);
    this.setState({
      data: countryData,
    });
  }
  render() {
    return (
      <div className={styles.form}>
        <TextField
          select
          label="region"
          className={styles.formControl}
          onChange={(e) => this.props.handleCountryChange(e.target.value)}
        >
          {this.state.data.map((country, i) => (
            <MenuItem key={i} value={i}>
              {country}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

// function ItemList({ items }) {
//   return (
//     <React.Fragment>
//       {items.map((country, index) => (
//         <MenuItem key={index} value={index}>
//           {country}
//         </MenuItem>
//       ))}
//     </React.Fragment>
//   );
// }

export default Country;
