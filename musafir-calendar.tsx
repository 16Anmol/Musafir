import React, { useState } from 'react';

const MusafirCalendar = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleAddEvent = () => {
    const newEvent = {
      title: eventTitle,
      description: eventDescription,
    };

    // Save event to local storage (you can replace this with a database or API in future)
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    storedEvents.push(newEvent);
    localStorage.setItem('events', JSON.stringify(storedEvents));

    // Clear input fields
    setEventTitle('');
    setEventDescription('');
  };

  return (
    <div>
      <h1>Musafir Calendar (Organizer)</h1>
      <input
        type="text"
        placeholder="Event Title"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default MusafirCalendar;
