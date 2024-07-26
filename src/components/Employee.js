// src/components/Employee.js

import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    phone: '',
    role: '',
    hourlyWage: '',
  });

  useEffect(() => {
    // Çalışanları veritabanından çek
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yeni çalışanı veritabanına ekle
    fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        setEmployees([...employees, data.employee]);
        setNewEmployee({
          name: '',
          phone: '',
          role: '',
          hourlyWage: '',
        });
      })
      .catch(error => console.error('Error adding employee:', error));
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h4" gutterBottom>
        Çalışan Yönetimi
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Çalışan İsmi"
              name="name"
              fullWidth
              value={newEmployee.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefon"
              name="phone"
              fullWidth
              value={newEmployee.phone}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Görev"
              name="role"
              fullWidth
              value={newEmployee.role}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Saatlik Ücret"
              name="hourlyWage"
              type="number"
              fullWidth
              value={newEmployee.hourlyWage}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Ekle
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="h6" style={{ marginTop: 16 }}>
        Mevcut Çalışanlar
      </Typography>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.phone} - {employee.role} - {employee.hourlyWage} ₺
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default Employee;