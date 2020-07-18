import React from 'react';
import {koreaData} from './api/korea';

class App extends React.Component  {
  state = {
    data: {},
  }

  async componentDidMount() {
    const korea_fechData = await koreaData();
    this.setState({data: korea_fechData})
    console.log(this.state.data)
  }
  render() {
    const {data} = this.state
    return(
      <div>
         App
      </div>
    )
  }
}

export default App;