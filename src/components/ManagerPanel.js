import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ManagerPanel = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Müdür Paneli
      </Typography>
      <ul>
        <li><Link to="/manager/end-of-day-report">Gün Sonu Yap</Link></li>
        <li><Link to="/manager/expense-report">Harcama Raporu Yükle</Link></li>
        <li><Link to="/manager/stock-report">Stok Sayımı Yükle</Link></li>
        <li><Link to="/manager/employee-management">Eleman Yönetimi</Link></li>
        <li><Link to="/manager/attendance">Puantaj</Link></li>
        <li><Link to="/manager/shift">Shift Yönetimi</Link></li>
      </ul>
    </Container>
  );
};

export default ManagerPanel;