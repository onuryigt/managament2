import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Yönetim Paneli
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/expense-report">
          Harcama Raporu
        </Button>
        <Button color="inherit" component={Link} to="/stock-report">
          Stok Raporu
        </Button>
        <Button color="inherit" component={Link} to="/employee-management">
          Eleman Yönetimi
        </Button>
        <Button color="inherit" component={Link} to="/attendance">
          Puantaj
        </Button>
        <Button color="inherit" component={Link} to="/shift">
          Shift
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;