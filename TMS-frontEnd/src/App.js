import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/error/Error';
import CreateEnrollment from './components/enrollment/CreateEnrollment';
import Home from './components/enrollment/Home';

import AdminHome from "./pages/AdminHome";
import Allocate from './pages/Allocate';
import ViewAllocations from './pages/ViewAllocations'



function App() {
  return (
    <Router>
      
 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/enroll" element={<CreateEnrollment/>} />
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/admin/allocate" element={<Allocate/>}/>
        <Route path="/admin/view-allocations" element={<ViewAllocations/>}/>
        <Route path="*" element={<Error />} />

        </Routes>
     
    </Router>
  );
}

export default App;
