import React from "react";
import City from "./City/city";
import Number from "./numberCard/numberCard";
import styles from "../style/page.module.css";
import coronaImage from "../../images/image.png";

class Korea extends React.Component {
  state = {
    data: "",
    city: "",
  };

  handleCityChange = async (city) => {
    this.setState({
      data: city,
    });
  };

  render() {
    console.log(this.state.city)
    return (
      <div className={styles.form}>
        <img src={coronaImage} className={styles.image} alt="COVID-19" />
        <City handleCityChange={this.handleCityChange} />
        <Number city={this.state.data} />
      </div>
    );
  }
}

export default Korea;
