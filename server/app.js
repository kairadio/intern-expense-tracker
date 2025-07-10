const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/expense-tracker';

app.use(cors());
app.use(express.json());

// Пример маршрута
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});

// Подключение к MongoDB и запуск сервера
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
//   });
// }).catch((err) => {
//   console.error('❌ Ошибка подключения к MongoDB:', err);
// });
