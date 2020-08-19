import React from "react";
import Country from "./Country/country";
import coronaImage from "../../images/image.png";
import styles from "../style/page.module.css";
import WorldNumberCard from './numberCard/worldNumberCard'

class World extends React.Component {
  state = {
    data: "",
    city: "",
  };

  handleCountryChange = async (country, number) => {
    this.setState({
      data: country,
    });
  };

  render() {
    return (
      <div className={styles.form}>
        <img src={coronaImage} alt="COVID-19" className={styles.image} />
        <Country handleCountryChange={this.handleCountryChange} />
        <WorldNumberCard country={this.state.data} />
      </div>
    );
  }
}

export default World;
