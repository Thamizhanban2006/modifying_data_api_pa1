const express = require('express');
const { resolve } = require('path');
const schema = require('./schema');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.post('/menu',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
