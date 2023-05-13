const router = require('./routes/router.js');
const config = require('./routes/config.js');
const express = require('express');
const app = express();
const cors = require('cors');
// set up port
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded ({extended:true}));
app.use(cors());
// add routes
console.log(`NODE_ENV=${config.NODE_ENV}`);
app.use('/api', router);
// run server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(config.PORT, config.HOST, function () {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
  });