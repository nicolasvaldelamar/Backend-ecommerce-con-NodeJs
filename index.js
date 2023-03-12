const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res)=>{
  res.send('Hola, este es mi server en express!')
})

routerApi(app)

app.listen(port, ()=>{
  console.log('server running at http://localhost:'+port)

})
