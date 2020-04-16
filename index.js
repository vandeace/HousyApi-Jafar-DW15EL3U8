const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const router = require('./routes/server');

//import route here
// const usersRoutes = require('./routes/users');
// const propertysRoutes = require('./routes/propertys');
// const auth = require('./routes/index');

app.use(cors());

app.use(express.json());

//routes midleware
// app.use('/api/v1/users', usersRoutes);
// app.use('/api/v1/signup', usersRoutes);
// app.use('/api/v1/property', propertysRoutes);
app.use('/api/v1', router);

app.listen(port, () => console.log(`listening on port ${port}`));
