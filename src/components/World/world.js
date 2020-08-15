// import React from "react";
// import { Cards, Chart, CountryPicker } from "../public";
// import styles from "./world.module.css";
// import { fetchData } from "../../api/world";
// import coronaImage from '../../images/image.png'

// class word extends React.Component {
//   state = {
//     data: {},
//     country: "",
//   };

//   async componentDidMount() {
//     const fetchedData = await fetchData();

//     this.setState({ data: fetchedData });
//   }

//   handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);

//     this.setState({ data: fetchedData, country: country });
//   };

//   render() {
//     const { data, country } = this.state;
//     return (
//       <div className={styles.container}>
//         <img src={coronaImage} className={styles.image} alt="COVID-19" />
//         <Cards data={data} />
//         <CountryPicker handleCountryChange={this.handleCountryChange} />
//         <Chart data={data} country={country} className={styles.chart} />
//       </div>
//     );
//   }
// }

// export default word;

import React from "react";
import Country from "./Country/country";
import coronaImage from "../../images/image.png";
import styles from "../style/page.module.css";

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
      </div>
    );
  }
}

export default World;
