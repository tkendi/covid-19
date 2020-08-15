import React from "react";
import SideBar from './components/public/SideBar/drawer'
import {cityPicker} from './api/world'

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <SideBar />
      </React.Fragment>
    )
  }
}

export default App;
