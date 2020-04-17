const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const route = require('./routes/server');

//import route here
// const HouseRoutes = require('./routes/homeRoutes');
// const propertysRoutes = require('./routes/propertys');
// const auth = require('./routes/index');

app.use(cors());

app.use(express.json());

//routes midleware

// app.use('/api/v1', HouseRoutes);
// app.use('/api/v1/signup', usersRoutes);
// app.use('/api/v1/property', propertysRoutes);
app.use('/api/v1', route);

app.listen(port, () => console.log(`listening on port ${port}`));
