const {exec} = require('child_process');
const express = require('express');
const { stderr } = require('process');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

  exec('cd /nuxt && yarn build && npx nuxt generate',(err,stdout,stderr) => {
    if(err){
      res.send(JSON.stringify(err));
      return;
    }
    res.send('Hello World !!');
  });

  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);