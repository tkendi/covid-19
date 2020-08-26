import React from "react";
import SideBar from './components/public/SideBar/drawer'
import {news} from './api/news'

class App extends React.Component {
  async componentDidMount() {
    const data = await news()
    console.log(data)
  }
  render() {
    return(
      <React.Fragment>
        <SideBar />
      </React.Fragment>
    )
  }
}

export default App;
