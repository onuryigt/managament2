const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});