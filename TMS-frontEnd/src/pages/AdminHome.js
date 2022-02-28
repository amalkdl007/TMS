import React from 'react';
import AdminTable from '../components/admin/AdminTable';
import AdminNav from '../components/navbar/AdminNav';


function AdminHome(props) {
    
    return (
        <div>
            <AdminNav/>
            
            <AdminTable/>
        </div>
    );
}

export default AdminHome;


