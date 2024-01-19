// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Events = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch events from the backend
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.BACKEND_URL}/events`
//         );
//         setEvents(response.data); // Assuming the response contains an array of events
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchEvents();
//   }, []);
//   return (
//     <div>
//       <div className="row">
//         <section>
//           <div className="container">
//             <div className="col-md-6">
//               <img src="images/wedding2.jpg" className="img-responsive" />
//             </div>
//             <div className="subcontent col-md-6">
//               <h1>Wedding</h1>
//               <p>
//                 The most important day in a couple's life. Guaranteeing
//                 personalized solutions and flawless execution, our venues
//                 provide the perfect location for your special day.
//               </p>
//               <hr className="customline" />
//               <button type="button" className="btn btn-default btn-lg">
//                 View Events{" "}
//                 <span
//                   className="glyphicon glyphicon-arrow-right"
//                   aria-hidden="true"
//                 ></span>
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="container">
//         <div className="col-md-12">
//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;
import React from 'react'

const Events = () => {
  return (
    <div>
      
    </div>
  )
}

export default Events
