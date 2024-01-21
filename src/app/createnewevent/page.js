'use client'
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Page = () => {
  const router=useRouter();
  const user=window.localStorage.getItem('user');
  const [formData, setFormData] = useState({
    eventId: "",
    eventName: "",
    date: "",
    eventLocation: "",
    organization: "",
    creatorStudentID: user.id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/eventCREATE`, formData);
      router.push("/viewEvents");
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Define event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="eventId">Event ID:</label>
                <input
                  type="text"
                  name="eventId"
                  className="form-control"
                  value={formData.eventId}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventName">Event Name:</label>
                <input
                  type="text"
                  name="eventName"
                  className="form-control"
                  value={formData.eventName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventLocation">Event Location:</label>
                <input
                  type="text"
                  name="eventLocation"
                  className="form-control"
                  value={formData.eventLocation}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization:</label>
                <input
                  type="text"
                  name="organization"
                  className="form-control"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;