'use strict';

const express = require('express');
let app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Your server is up on port 3000');
});
