import express from 'express';
import React from 'react';
import Home from './containers/Home';
import { renderToString } from 'react-dom/server';

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>title</title> 
            </head> 
            <body>
                <h1>title</h1> 
                ${renderToString(<Home />)}
            </body>
        </html> 
    `)
})

const server = app.listen(3000)