import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './Api';
import styles from './App.module.css';

import merci from './images/merci.jpeg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h3>شكرا لكل من يساعد في محاربة الفيروس</h3>
        <h3>thank you to everyone who helps fight the coronavirus</h3>
        <h3>merci à tous ceux qui aident à combattre le coronavirus</h3>
        <img className={styles.image} src={merci} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;