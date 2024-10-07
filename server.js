const express = require('express');
const app = express();
const employees = require('./employees'); 
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello employees!');
});

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);  
  const employee = employees.find(emp => emp.id === id); 

  if (employee) {
    res.json(employee);  
  } else {
    res.status(404).send({ error: 'Employee not found' });  
  }
});

app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.json(randomEmployee);  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

