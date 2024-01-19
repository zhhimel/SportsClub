"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
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
      {events.map((event) => (
        <div className="row" key={event.id} >
          <section>
            <div className="container">
              <div className="col-md-6">
                <img src="images/wedding2.jpg" className="img-responsive" />
              </div>
              <div className="subcontent col-md-6">
                <h1>{event.eventName}</h1>
                <p>{event.date}</p>
                <p>{event.eventLocation}</p>
                <p>{event.organization}</p>
                <p>{event.creatorStudentID}</p>
                <hr className="customline" />
                <button type="button" className="btn btn-default btn-lg">
                  View Events{" "}
                  <span
                    className="glyphicon glyphicon-arrow-right"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="col-md-12">
              <hr />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
