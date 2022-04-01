import "./App.css";
import { useEffect, useState, Component } from "react";
import Axios from "axios";
import Header from "./Header";
import Line from "./Line";
import { Link, Route, Swith } from "react-router-dom";
function App() {
  let [list, setList] = useState([]);

  const showEmployee = () => {
    Axios.get("http://localhost:3001/users")
      .then((response) => {
        setList(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  };
  useEffect(() => {
    showEmployee();
  }, []);
  return (
    <>
      <div className="information">
        <div className="App"></div>
      </div>
      <Header />
      <Route exact path="/">
        {list.map((a, i) => {
          return (
            <div className="card">
              <Line a={a} i={i} />
            </div>
          );
        })}
      </Route>
      <Route exact path="/detail/:id" component={Detail}></Route>
    </>
  );
}

export default App;
