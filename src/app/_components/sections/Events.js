"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const Events = () => {
  const [events, setEvents] = useState([
    {
      eventName:'Cricket',
      date: '20th Feb',
      eventLocation:'Central Field',
      organization:'DSW',
      creatorStudentID:'1904082',
      description:"𝐃𝐢𝐯𝐞 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐞𝐱𝐜𝐢𝐭𝐞𝐦𝐞𝐧𝐭 ⁉️The thrilling 𝗜𝗻𝘁𝗲𝗿 𝗛𝗮𝗹𝗹 𝗩𝗼𝗹𝗹𝗲𝘆𝗯𝗮𝗹𝗹 𝗧𝗼𝘂𝗿𝗻𝗮𝗺𝗲𝗻𝘁 kicks off on 𝗗𝗲𝗰𝗲𝗺𝗯𝗲𝗿 𝟯 at CUET Basketball Ground. Witness fierce competition, spectacular spikes, and spirited teamwork as teams battle for victory. Don't miss the action-packed journey"
    },
    {
      eventName:'Futsal',
      date: '20th Feb',
      eventLocation:'Central Field',
      organization:'DSW',
      creatorStudentID:'1904082',
      description:"𝐃𝐢𝐯𝐞 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐞𝐱𝐜𝐢𝐭𝐞𝐦𝐞𝐧𝐭 ⁉️The thrilling 𝗜𝗻𝘁𝗲𝗿 𝗛𝗮𝗹𝗹 𝗩𝗼𝗹𝗹𝗲𝘆𝗯𝗮𝗹𝗹 𝗧𝗼𝘂𝗿𝗻𝗮𝗺𝗲𝗻𝘁 kicks off on 𝗗𝗲𝗰𝗲𝗺𝗯𝗲𝗿 𝟯 at CUET Basketball Ground. Witness fierce competition, spectacular spikes, and spirited teamwork as teams battle for victory. Don't miss the action-packed journey"
    },
    {
      eventName:'Vollyball',
      date: '20th Feb',
      eventLocation:'Central Field',
      organization:'DSW',
      creatorStudentID:'1904082',
      description: "𝐃𝐢𝐯𝐞 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐞𝐱𝐜𝐢𝐭𝐞𝐦𝐞𝐧𝐭 ⁉️The thrilling 𝗜𝗻𝘁𝗲𝗿 𝗛𝗮𝗹𝗹 𝗩𝗼𝗹𝗹𝗲𝘆𝗯𝗮𝗹𝗹 𝗧𝗼𝘂𝗿𝗻𝗮𝗺𝗲𝗻𝘁 kicks off on 𝗗𝗲𝗰𝗲𝗺𝗯𝗲𝗿 𝟯 at CUET Basketball Ground. Witness fierce competition, spectacular spikes, and spirited teamwork as teams battle for victory. Don't miss the action-packed journey"
    }
]);

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
                <img src={`images/events/${event.eventName}.jpg`} className="img-responsive" />
              </div>
              <div className="subcontent col-md-6">
                <h1><strong>{event.eventName}</strong></h1>
                <p>{event.date}</p>
                <p>{event.eventLocation}</p>
                <p>{event.organization}</p>
                <p>{event.creatorStudentID}</p>
                <p><strong>{event.description}</strong></p>
                <hr className="customline" />
                
                
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
