'use client'
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    date: "",
    location: "",
    organization: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/yourApiEndpoint`, formData);
      // Handle the response, e.g., show a success message or redirect to another page
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., show an error message
    }
  };

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
                <label htmlFor="username">Event ID:</label>
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  value={formData.id}
                  onChange={handleChange}
                />
                <span className="error"></span>
              </div>

             
              <div className="form-group">
                <label htmlFor="password">Event Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  
                  
                />
                <span className="error"></span>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Date </label>
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  
                  
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Event Location </label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  
                  
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Organization</label>
                <input
                  type="text"
                  name="organization"
                  className="form-control"
                  
                  
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Event Description </label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  
                  
                />
                <span className="error"></span>
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
