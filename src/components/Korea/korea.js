import React from "react";
import City from "./City/city";
import Number from "../public/numbberCard/numberCard";
import styles from "./korea.module.css";
import coronaImage from '../../images/image.png'

class App extends React.Component {
  state = {
    data: "",
    city: "",
  };

  handleNumberChange = async (city, number) => {
    this.setState({
      data: city,
    });
  };

  render() {
    return (
      <div className={styles.form}>
        <img src = {coronaImage} className = {styles.image} alt = "COVID-19" />
        <City handleNumberChange={this.handleNumberChange} />
        <Number city={this.state.data} />
      </div>
    );
  }
}

export default App;
