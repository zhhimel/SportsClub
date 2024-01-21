'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios"; // Import axios for making HTTP requests

const Page = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/allEvent`);
        setEvents(response.data); // Set events with the data from the response
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  const handleDelete = (eventId) => {
    // Filter out the event with the specified eventId
    const updatedEvents = events.filter((event) => event.eventId !== eventId);
    setEvents(updatedEvents);
  };
  return (
    <div>
      <div className="content">
        <div className="container">
          {/* Placeholder for a success or error message */}
          <p>Message goes here</p>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Event Location</th>
                <th>Organization</th>
                <th>Event Description</th>
                <th>Delete Option</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, id) => (
                <tr key={id}>
                  <td>{event.evenId}</td>
                  <td>{event.eventName}</td>
                  <td>{event.date}</td>
                  <td>{event.eventLocation}</td>
                  <td>{event.organization}</td>
                  <td>{event.eventDescription}</td>
                  <td><button onClick={() => handleDelete(event.eventId)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href='/createnewevent'><button>Create Event</button></Link>
        <Link href='/updateevent'><button>Update Event</button></Link>
      </div>
    </div>
  );
};

export default Page;
