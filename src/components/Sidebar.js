import React, { useState, useEffect } from 'react';
import './sidebar.css';
import {
    FaTachometerAlt,
    FaCalendarAlt,
    FaBook,
    FaTools,
    FaBullhorn,
    FaSearch,
    FaBell,
    // FaHexagon
  } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';
  

function Sidebar({ activePage, onNavigate }) {
    const [activeNavItem, setActiveNavItem] = useState('/Dashboard');
  const navigate = useNavigate();
  
  const handleNavClick = (navItem) => {
  const pathMap = {
    Dashboard: '/landingpg',
    Timetable: '/timetable',
    BookServices: '/book-services',
    Maintenance: '/maintenance',
    Announcements: '/announcements',
  };
  setActiveNavItem(navItem);
  navigate(pathMap[navItem]);
};

  return (
    <aside className="sidebar">
            <div className="logo">
            {/* <FaHexagon /> */}
              <span>Campus Portal</span>
            </div>
            <nav className="nav-menu">
              {['Dashboard', 'Timetable', 'Book Services', 'Maintenance', 'Announcements'].map((item) => (
                <div
                  key={item}
                  className={`nav-item ${activeNavItem === item ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item === '/Dashboard' && <FaTachometerAlt />}
                  {item === '/Timetable' && <FaCalendarAlt />}
                  {item === '/Book Services' && <FaBook />}
                  {item === '/Maintenance' && <FaTools />}
                  {item === '/Announcements' && <FaBullhorn />}
                  <span>{item}</span>
                </div>
              ))}
            </nav>
            <div className="user-profile">
              <div className="avatar">MN</div>
              <div className="user-info">
                <div className="user-name">Mandla Nkosi</div>
                <div className="user-role">Student</div>
              </div>
            </div>
          </aside>
    
  );
}

export default Sidebar;
