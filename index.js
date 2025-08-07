const express = require('express');
const app = express();

app.get('/', (req, res) => {
  setTimeout(()=>{
    res.send('Hello Express!');
  }, 10 * 1000)
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
