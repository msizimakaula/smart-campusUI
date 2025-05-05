import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import LandingPg from './Pages/StudentDash/LandingPg';
// import AdminDashboard from "./AdminDashboard";
// import LecturerDashboard from "./LecturerDashboard";

// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/homepage' element={<Homepage />} />
        <Route path="/student-dashboard" element={<LandingPg role="student" />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} /> */}

      </Routes>
    </Router>
  );
}
export default App;
