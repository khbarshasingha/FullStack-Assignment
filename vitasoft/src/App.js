import "./App.css";
import { Detailsform } from "./Components/Detailsform";
import React, { useState } from "react";
import { DataTable } from "./Components/DataTable";

function App() {
  const [fdata, setFdata] = useState([]);
  return (
    <>
      <Detailsform setFdata={setFdata} />
      <DataTable fdata={fdata} />
    </>
  );
}

export default App;
