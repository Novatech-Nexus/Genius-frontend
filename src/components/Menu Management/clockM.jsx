import React, { useState, useEffect } from 'react';

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once

  const clockStyle = {
    position: 'absolute',
    top: '20px', 
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: 'Arial, sans-serif', 
    textAlign: 'center', 
    fontSize: '24px', 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: '10px 20px', 
    borderRadius: '10px', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
    marginTop: '5px', 
  };

  const dateStyle = {
    fontSize: '20px', 
    color: '#555', 
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={clockStyle}>
        <h4>{dateTime.toLocaleTimeString('en-US', { hour12: false })}</h4>
        <h5 style={dateStyle}>{dateTime.toLocaleDateString()}</h5>
      </div>
    </div>
  );
}

export default Clock;
