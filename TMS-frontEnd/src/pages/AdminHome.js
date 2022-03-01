import React from 'react';
import AdminTable from '../components/admin/AdminTable';
import Footer from '../components/footer/Footer';
import AdminNav from '../components/navbar/AdminNav';


function AdminHome(props) {
    
    return (
        <div>
            <AdminNav/>
            <AdminTable/>
            <Footer/>
        </div>
    );
}

export default AdminHome;


