import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
import DataMapped from "./DataMapped";

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, []);
  console.log("test", props.data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stocks</h1>
        <DataMapped />
        {props.data.map((data) => (
          <h1>{data.login}</h1>
        ))}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
