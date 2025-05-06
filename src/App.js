import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import LandingPg from './Pages/StudentDash/LandingPg';
import Timetable from './Pages/StudentDash/Timetable';
// import AdminDashboard from "./AdminDashboard";
// import LecturerDashboard from "./LecturerDashboard";

function App() {
  const [activePage, setActivePage] = useState('LandingPg');

  // const renderPage = () => {
  //   switch (activePage) {
  //     case 'Dashboard':
  //       return <h1>Dashboard Page</h1>;
  //     case 'Timetable':
  //       return <h1>Timetable Page</h1>;
  //     case 'Book Services':
  //       return <h1>Book Services Page</h1>;
  //     case 'Maintenance':
  //       return <h1>Maintenance Page</h1>;
  //     case 'Announcements':
  //       return <h1>Announcements Page</h1>;
  //     default:
  //       return <h1>Welcome</h1>;
  //   }
  // };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route path="/landingpg" element={<LandingPg role="student" />} />
         <Route exact path="/timetable" element={<Timetable />} />
         
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} /> */}
      </Routes>

      {/* Optional: render extra content for testing */}
      {/* <div style={{ marginTop: '2rem' }}>
        {renderPage()}
      </div> */}
    </Router>
  );
}

export default App;
