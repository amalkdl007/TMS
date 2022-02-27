import Error from './components/error/Error';
import CreateEnrollment from './components/enrollment/CreateEnrollment';
import Home from './components/enrollment/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
 
        <Routes>
        <Route path="/enroll" element={<CreateEnrollment />} />
        <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
