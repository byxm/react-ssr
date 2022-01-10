import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes";
import { Provider } from "react-redux";
import getStore from "../store";

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {
          <div>
            {Routes.map((el) => (
              <Route {...el} />
            ))}
          </div>
        }
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
