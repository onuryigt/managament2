const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Örnek bir API endpoint'i
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Diğer route'lar burada tanımlanmalı

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});