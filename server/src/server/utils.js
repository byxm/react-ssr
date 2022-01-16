import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../routes";
import { getStore } from "../store";

const render = (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(Routes, req.path);
  const promiseLoadData = [];

  matchedRoutes.forEach((rt) => {
    if (rt.route.loadData) {
      promiseLoadData.push(rt.route.loadData(store));
    }
  });
  Promise.all(promiseLoadData).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {
            <div>
              { renderRoutes(Routes) }
            </div>
          }
        </StaticRouter>
      </Provider>
    );
    const restString = `
          <html>
              <head>
                  <title>title</title> 
              </head> 
              <body>
                  <h1>title</h1> 
                  <div id='root'>${content}</div>
                  <script>
                    window.context = {
                      state: ${JSON.stringify(store.getState())}
                    }
                  </script>
                  <script src='/index.js'></script>
              </body>
          </html> 
      `;
    res.send(restString);
  });
};

export default render;
