const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(__dirname + 'styles.css'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, 'index.html');
    res.sendFile(filePath);
})

app.get('/about', (req, res) => {
   const filePath = path.resolve(__dirname, 'about.html');
   res.sendFile(filePath); 
})

app.get('/contact', (req, res) => {
    const filePath = path.resolve(__dirname, 'contact.html');
    res.sendFile(filePath) 
})

app.listen(3000, () => {
    console.log('Server is running');
})