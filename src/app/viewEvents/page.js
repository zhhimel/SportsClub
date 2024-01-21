'use client'
import React from "react";
import { useState, useEffect } from "react";
const Page = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/allEvent`);
        setEvents(response.data); // Assuming the response contains an array of events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div>
      <div class="content">
        <div class="container">
          {/* <!-- Placeholder for a success or error message --> */}
          <p>Message goes here</p>

          <table class="table table-hover">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Event Location</th>
                <th>Organization</th>
                <th>Event Description</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, id) => (
                <tr key={id}>
                  <td>{event.eventID}</td>
                  <td>{event.eventName}</td>
                  <td>{event.date}</td>
                  <td>{event.eventLocation}</td>
                  <td>{event.organization}</td>
                  <td>{event.eventDescription}</td>
                  <td>
                    <a
                      className="delete"
                      href={`deleteEvent.php?id=${event.eventID}`}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          
        </div>
      </div>
    </div>
  );
};

export default Page;
