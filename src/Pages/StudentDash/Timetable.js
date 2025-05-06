import React, { useState } from 'react';
 import { jsPDF } from 'jspdf';
 import html2canvas from 'html2canvas';
import Sidebar from '../../components/Sidebar';
import './timetable.css';

function Timetable() {
  const [activePage, setActivePage] = useState('Timetable');
  const [activeView, setActiveView] = useState('Week');
  
  
  // Timetable data
  const timetableData = {
    Monday: {
      count: 3,
      classes: [
        {
          name: 'Computer Science 101',
          time: '08:00 - 09:30',
          location: 'Block A, Room 42',
          lecturer: 'Prof. Khumalo',
          type: 'lecture'
        },
        {
          name: 'Mathematics 202',
          time: '10:00 - 11:30',
          location: 'Science Building, Room 15',
          lecturer: 'Dr. Naidoo',
          type: 'lecture'
        },
        {
          name: 'Computer Science Lab',
          time: '14:00 - 16:00',
          location: 'CS Lab 3',
          lecturer: 'Mr. Zuma',
          type: 'practical'
        }
      ]
    },
    Tuesday: {
      count: 2,
      classes: [
        {
          name: 'Physics 101',
          time: '09:00 - 10:30',
          location: 'Physics Building, Room 22',
          lecturer: 'Prof. Mbeki',
          type: 'lecture'
        },
        {
          name: 'Academic Writing',
          time: '12:00 - 13:30',
          location: 'Humanities Building, Room 8',
          lecturer: 'Dr. Sisulu',
          type: 'tutorial'
        }
      ]
    },
    Wednesday: {
      count: 3,
      classes: [
        {
          name: 'Computer Science 101',
          time: '08:00 - 09:30',
          location: 'Block A, Room 42',
          lecturer: 'Prof. Khumalo',
          type: 'lecture'
        },
        {
          name: 'Mathematics 202',
          time: '10:00 - 11:30',
          location: 'Science Building, Room 15',
          lecturer: 'Dr. Naidoo',
          type: 'lecture'
        },
        {
          name: 'Physics Lab',
          time: '14:00 - 17:00',
          location: 'Physics Lab 2',
          lecturer: 'Ms. Dlamini',
          type: 'practical'
        }
      ]
    },
    Thursday: {
      count: 2,
      classes: [
        {
          name: 'Physics 101',
          time: '09:00 - 10:30',
          location: 'Physics Building, Room 22',
          lecturer: 'Prof. Mbeki',
          type: 'lecture'
        },
        {
          name: 'Mathematics Tutorial',
          time: '13:00 - 14:30',
          location: 'Science Building, Room 10',
          lecturer: 'Mr. Botha',
          type: 'tutorial'
        }
      ]
    },
    Friday: {
      count: 2,
      classes: [
        {
          name: 'Computer Science Tutorial',
          time: '10:00 - 11:30',
          location: 'CS Lab 1',
          lecturer: 'Ms. Ndlovu',
          type: 'tutorial'
        },
        {
          name: 'Academic Writing',
          time: '12:00 - 13:30',
          location: 'Humanities Building, Room 8',
          lecturer: 'Dr. Sisulu',
          type: 'tutorial'
        }
      ]
    },
    Saturday: {
      count: 0,
      classes: []
    },
    Sunday: {
      count: 0,
      classes: []
    }
  };

  // Handle navigation
  const handleNavigate = (page) => {
    setActivePage(page);
    if (page !== 'Timetable') {
      alert(`Navigating to ${page}`);
    }
  };


  // Export timetable as PDF
  const exportToPDF = () => {
    const input = document.getElementById('timetable-content');
    
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.text('Campus Portal - Timetable', 14, 15);
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);
      pdf.save('timetable.pdf');
    });
  };

  // Render class card
  const renderClassCard = (classItem, day) => {
    
    
    return (
      <div className={`class-card`} key={`${day}-${classItem.name}`}>
        <div className="class-name">{classItem.name}</div>
        <div className="class-time">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
          </svg>
          {classItem.time}
        </div>
        <div className="class-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
          {classItem.location}
        </div>
      </div>
    );
  };

  return (
    <div className="timetable-page">
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />
      
      <div className="main-content">
        <div className="timetable-header">
          <div className="title-section">
            <h1>Timetable</h1>
            <p>Weekly class schedule</p>
          </div>
          
          <div className="actions-section">
            
            <button className="export-button" onClick={exportToPDF}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Export
            </button>
          </div>
        </div>
        
        
        <div id="timetable-content" className="timetable-content">
          <div className="week-view">
            {Object.keys(timetableData).map((day) => (
              <div 
                key={day} 
                
              >
                <div className="day-header">
                  <h3>{day}</h3>
                  <span className="class-count">{timetableData[day].count} classes</span>
                </div>
                
                <div className="day-classes">
                  {timetableData[day].count > 0 ? (
                    timetableData[day].classes.map((classItem) => renderClassCard(classItem, day))
                  ) : (
                    <div className="no-classes">
                      <p>No classes</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
