const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// 1. connect using sequelize

// 2. setup models

// 3. setup associations

// 4. work on routes

