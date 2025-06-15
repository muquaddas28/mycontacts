const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

// Routes
// app.use("/api/contacts", require("./routes/contactRoutes"));

app.get('/api/contacts', (req, res) => {
    res.send("get all contacts");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
