import "./App.css";
import { Detailsform } from "./Components/Detailsform";
import React, { useState } from "react";
import { DataTable } from "./Components/DataTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginForm } from "./Components/LoginForm";

function App() {
  const [fdata, setFdata] = useState([]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route
            exact
            path="/form"
            component={() => <Detailsform setFdata={setFdata} />}
          />
        </Switch>
      </Router>

      <DataTable fdata={fdata} />
    </>
  );
}

export default App;
