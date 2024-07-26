const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./backend/controllers/user.controller'); // Doğru dosya yolu
const userRoutes = require('./backend/routes/user.routes'); // Doğru dosya yolu

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});