import React from "react";
import SideBar from "./components/public/SideBar/drawer";
import NewsList from "./components/News/list/newsList";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
      </React.Fragment>
    );
  }
}

export default App;
