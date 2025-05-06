import React, { useState } from "react"
import "./homepage.css"
import { useNavigate } from "react-router-dom"

function Homepage() {
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Student")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const dummyUsers = [
    { email: "student@university.ac.za", password: "password123", role: "Student" },
    { email: "lecturer@university.ac.za", password: "password123", role: "Lecturer" },
    { email: "admin@university.ac.za", password: "password123", role: "Admin" },
  ]

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  
    setTimeout(() => {
      const user = dummyUsers.find(
        (u) => u.email === email && u.password === password && u.role === role
      );
  
      if (user) {
        // alert(`Login successful! Welcome, ${role}!`);
        if (role === "Student") {
          navigate("/landingpg");
        } else if (role === "Lecturer") {
          navigate("/lecturer-dashboard");
        } else if (role === "Admin") {
          navigate("/admin-dashboard");
        }
      } else {
        setError("Invalid email, password, or role. Try using the dummy credentials.");
      }
  
      setIsLoading(false);
    }, 1000);
  }

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const selectRole = (selectedRole) => {
    setRole(selectedRole)
    setIsDropdownOpen(false)
  }

  return (
    <div className="app">
      <div className="login-container">
        <div className="logo-container">
          <div className="logo">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="#0ea5e9" />
            </svg>
          </div>
        </div>

        <h1 className="title">Smart Campus Portal</h1>
        <p className="subtitle">Access all university services in one place</p>

        <div className="tabs">
          <button className={`tab ${activeTab === "login" ? "active" : ""}`} onClick={() => setActiveTab("login")}>
            Login
          </button>
        
        </div>

        <div className="form-container">
          <h2 className="form-title">Login to your account</h2>
          <p className="form-subtitle">Enter your credentials to access the portal</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // placeholder="m.student@university.ac.za"
                // required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <div className="dropdown">
                <button type="button" className="dropdown-toggle" onClick={toggleDropdown}>
                  {role} <span className="dropdown-arrow">▼</span>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {["Student", "Lecturer", "Admin"].map((r) => (
                      <div key={r} className="dropdown-item" onClick={() => selectRole(r)}>
                        {r}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="forgot-password">
            <a href="#forgot">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
