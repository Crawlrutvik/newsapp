import React, { useContext } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import { useGlobelContext } from "./context";
import "./App.css";
import Class from "./Class";
import Error from "./Error";

function App() {
  const data = useGlobelContext();
  console.log("data:-------------- ", data);
  return (
    <>
      <Error>
        <Class imgame="noimg" />
      </Error>
      <Error>
        <Search />
      </Error>
      <Error>
        <Pagination />
      </Error>
      <Error>
        <Stories />
      </Error>
    </>
  );
}

export default App;
