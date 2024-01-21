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
              {/* ... (existing form fields) ... */}

              {/* Add event handlers for form inputs */}
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

              {/* ... (other form fields with similar structure) ... */}

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
