import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardHome from './DashboardHome'; // Bu yolun doğru olduğundan emin olun
import ExpenseReport from './ExpenseReport';
import StockReport from './StockReport';
import EmployeeManagement from './EmployeeManagement';
import Attendance from './Attendance';
import ShiftManagement from './ShiftManagement';

const Dashboard = () => {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <nav style={{ width: '250px', background: '#f8f9fa', padding: '10px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link to="/dashboard/home">Dashboard</Link></li>
                        <li><Link to="/dashboard/expense-report">Harcama Raporu</Link></li>
                        <li><Link to="/dashboard/stock-report">Stok Raporu</Link></li>
                        <li><Link to="/dashboard/employee-management">Eleman Yönetimi</Link></li>
                        <li><Link to="/dashboard/attendance">Puantaj</Link></li>
                        <li><Link to="/dashboard/shift-management">Shift Yönetimi</Link></li>
                    </ul>
                </nav>
                <div style={{ flex: 1, padding: '10px' }}>
                    <Routes>
                        <Route path="/dashboard/home" element={<DashboardHome />} />
                        <Route path="/dashboard/expense-report" element={<ExpenseReport />} />
                        <Route path="/dashboard/stock-report" element={<StockReport />} />
                        <Route path="/dashboard/employee-management" element={<EmployeeManagement />} />
                        <Route path="/dashboard/attendance" element={<Attendance />} />
                        <Route path="/dashboard/shift-management" element={<ShiftManagement />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;