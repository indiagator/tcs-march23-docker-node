const express = require('express');

const app = express();

const port = 8090;

app.get('/',(req,res) => (res.send('Hello Docker')));

app.listen(port, ( ) => console.log(`Server is up on PORT: ${port}`));