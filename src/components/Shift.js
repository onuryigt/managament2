// src/components/Shift.js

import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, MenuItem, Grid, Paper } from '@mui/material';
import axios from 'axios';

const Shift = () => {
  const [employees, setEmployees] = useState([]);
  const [shift, setShift] = useState({
    day: '',
    employee: '',
    startTime: '',
    endTime: ''
  });
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    // Çalışanları yükle
    axios.get('/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });

    // Kaydedilen shiftleri yükle
    axios.get('/api/shifts')
      .then(response => {
        setShifts(response.data);
      })
      .catch(error => {
        console.error('Error fetching shifts:', error);
      });
  }, []);

  const handleChange = (event) => {
    setShift({
      ...shift,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Shift ekle
    axios.post('/api/shifts', shift)
      .then(response => {
        alert('Vardiya başarıyla eklendi!');
        setShifts([...shifts, response.data]);
      })
      .catch(error => {
        console.error('Error adding shift:', error);
        alert('Vardiya eklenirken bir hata oluştu.');
      });
  };

  return (
    <Container>
      <h1>Shift Yönetimi</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Gün"
              name="day"
              value={shift.day}
              onChange={handleChange}
              fullWidth
              required
            >
              {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Çalışan"
              name="employee"
              value={shift.employee}
              onChange={handleChange}
              fullWidth
              required
            >
              {employees.map((employee) => (
                <MenuItem key={employee.id} value={employee.name}>
                  {employee.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="time"
              label="Başlama Saati"
              name="startTime"
              value={shift.startTime}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="time"
              label="Bitiş Saati"
              name="endTime"
              value={shift.endTime}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Kaydet
            </Button>
          </Grid>
        </Grid>
      </form>
      <h2>Kaydedilen Shiftler</h2>
      <Paper>
        <table>
          <thead>
            <tr>
              <th>Gün</th>
              <th>Çalışan</th>
              <th>Başlama Saati</th>
              <th>Bitiş Saati</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift, index) => (
              <tr key={index}>
                <td>{shift.day}</td>
                <td>{shift.employee}</td>
                <td>{shift.startTime}</td>
                <td>{shift.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </Container>
  );
};

export default Shift;