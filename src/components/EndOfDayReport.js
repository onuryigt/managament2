// src/components/EndOfDayReport.js

import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Snackbar } from '@mui/material';
import axios from 'axios';

const EndOfDayReport = () => {
  const [report, setReport] = useState({
    date: '',
    ropCiro: '',
    yemeksepetiCiro: '',
    ysOnline: '',
    kasaBaslangici: '',
    kasaSon: '',
    pos1: '',
    pos2: '',
    pos3: '',
    ticket: '',
    multinet: '',
    sodexo: '',
    banka: '',
    harcama: ''
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setReport({
      ...report,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gün sonu raporunu gönder
    axios.post('/api/endofday', report)
      .then(response => {
        setMessage('Gün sonu raporu başarıyla eklendi!');
        setOpen(true);
        setReport({
          date: '',
          ropCiro: '',
          yemeksepetiCiro: '',
          ysOnline: '',
          kasaBaslangici: '',
          kasaSon: '',
          pos1: '',
          pos2: '',
          pos3: '',
          ticket: '',
          multinet: '',
          sodexo: '',
          banka: '',
          harcama: ''
        });
      })
      .catch(error => {
        console.error('Error adding end of day report:', error);
        setMessage('Gün sonu raporu eklenirken bir hata oluştu.');
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>Gün Sonu Raporu</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              label="Tarih"
              name="date"
              value={report.date}
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
              type="number"
              label="ROP Ciro"
              name="ropCiro"
              value={report.ropCiro}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="YemekSepeti Ciro"
              name="yemeksepetiCiro"
              value={report.yemeksepetiCiro}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="YS Online"
              name="ysOnline"
              value={report.ysOnline}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Kasa Başlangıcı"
              name="kasaBaslangici"
              value={report.kasaBaslangici}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Kasa Son"
              name="kasaSon"
              value={report.kasaSon}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="POS1"
              name="pos1"
              value={report.pos1}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="POS2"
              name="pos2"
              value={report.pos2}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="POS3"
              name="pos3"
              value={report.pos3}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Ticket"
              name="ticket"
              value={report.ticket}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Multinet"
              name="multinet"
              value={report.multinet}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Sodexo"
              name="sodexo"
              value={report.sodexo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Banka"
              name="banka"
              value={report.banka}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Harcama"
              name="harcama"
              value={report.harcama}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Gün Sonu Yap
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={6000}
        onClose={handleClose}
      />
    </Container>
  );
};

export default EndOfDayReport;