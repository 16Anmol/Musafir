import React, { useState, useEffect } from 'react';

const StudentCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from local storage
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(storedEvents);
  }, []);

  return (
    <div>
      <h1>Student Calendar</h1>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        events.map((event, index) => (
          <div key={index}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentCalendar;
