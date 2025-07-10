const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Atlas connection string
const MONGO_URI = `mongodb+srv://intern:123abc@cluster0.pisis.mongodb.net/intern-expense-tracker?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());

// Пример маршрута
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running.');
});

// Подключение к MongoDB и запуск сервера
mongoose.connect(MONGO_URI)
.then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Ошибка подключения к MongoDB:', err);
});
