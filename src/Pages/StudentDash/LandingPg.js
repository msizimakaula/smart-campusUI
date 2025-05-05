import React, { useState, useEffect } from 'react';
import './landingpg.css';

// Importing icon components (assumed defined or stubbed elsewhere)
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
  

function LandingPg({ role }) {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    // Update the time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Only show the page if user is a student
  if (role !== 'student') return null;

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const handleNavClick = (navItem) => {
    setActiveNavItem(navItem);
    alert(`Navigating to ${navItem}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleButtonClick = (action) => {
    alert(`Action: ${action}`);
  };

  const handleNotificationClick = () => {
    setNotificationCount(0);
  };

  return (
    <div className="student-dashboard">
      {/* Sidebar Navigation */}
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
              {item === 'Dashboard' && <FaTachometerAlt />}
              {item === 'Timetable' && <FaCalendarAlt />}
              {item === 'Book Services' && <FaBook />}
              {item === 'Maintenance' && <FaTools />}
              {item === 'Announcements' && <FaBullhorn />}
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

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <form className="search-container" onSubmit={handleSearch}>
            <div className="search-box">
            <FaSearch />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          <div className="header-right">
            <div className="notification-icon" onClick={handleNotificationClick}>
            <FaBell />
              {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
            </div>
            <div className="time">{formattedTime}</div>
            <div className="date">{formattedDate}</div>
          </div>
        </header>

        <section className="dashboard-content">
          <h1>Dashboard</h1>
          <p>Welcome back, Mandla</p>
          <div className="stat-grid">
            {/* Example stat cards */}
            <div className="stat-card">
              <div className="stat-header">
                <h3>Upcoming Classes</h3>
                <FaCalendarAlt />
              </div>
              <p className="stat-number">2</p>
              <p className="stat-description">Classes today</p>
              <button onClick={() => handleButtonClick('View Timetable')}>View Timetable</button>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Active Bookings</h3>
                <FaBook />
              </div>
              <p className="stat-number">3</p>
              <p className="stat-description">Upcoming reservations</p>
              <button onClick={() => handleButtonClick('Manage Bookings')}>Manage Bookings</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPg;
