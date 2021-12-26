const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>title</title> 
            </head> 
            <body>
                <h1>title</h1> 
                <p>name</p>
            </body>
        </html> 
    `)
})

const server = app.listen(3000)