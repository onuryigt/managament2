import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Yönetici Paneli
      </Typography>
      <ul>
        <li><Link to="/admin/end-of-day-report">Gün Sonu Raporları</Link></li>
        <li><Link to="/admin/expense-report">Harcama Raporları</Link></li>
        <li><Link to="/admin/stock-report">Stok Raporları</Link></li>
        <li><Link to="/admin/employee-management">Eleman Yönetimi</Link></li>
        <li><Link to="/admin/attendance">Puantaj</Link></li>
        <li><Link to="/admin/shift">Shift Yönetimi</Link></li>
      </ul>
    </Container>
  );
};

export default AdminPanel;