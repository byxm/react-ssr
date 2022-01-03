import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./containers/routes";
import getStore from './store'



const render = (req) => {
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  return `
        <html>
            <head>
                <title>title</title> 
            </head> 
            <body>
                <h1>title</h1> 
                <div id='root'>${content}</div>
                <script src='/index.js'></script>
            </body>
        </html> 
    `;
};

export default render;
