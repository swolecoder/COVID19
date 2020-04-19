import React from "react";

import { CardComponenet, Chart, CountryPicker } from "./components";
import style from "./App.module.css";
import { fetchData } from "../src/api";
import ImageData from "./image.png";
class App extends React.Component {
  state = {
    data: [],
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    console.log("12i-ei12-e9-129e", country);
    const responseData = await fetchData(country);
    this.setState({ data: responseData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img className={style.image} src={ImageData} alt="images" />
        <CardComponenet data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
