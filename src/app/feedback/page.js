"use client";
import React, { useState,useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [feedbackList, setFeedbackList] = useState([{
    name: "Himel",
    id:"1904082",
    feedback:"Hlelelasdfasdfasdliassd fliashdfv" 
  },
  {
    name: "Himel",
    id:"1904082",
    feedback:"Hlelelasdfasdfasdliassd fliashdfv" 
  },
  {
    name: "Himel",
    id:"1904082",
    feedback:"Hlelelasdfasdfasdliassd fliashdfv" 
  },
  {
    name: "Himel",
    id:"1904082",
    feedback:"Hlelelasdfasdfasdliassd fliashdfv" 
  },
  {
    name: "Himel",
    id:"1904082",
    feedback:"Hlelelasdfasdfasdliassd fliashdfv" 
  },
]);
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_URL}/getFeedback`
        );
        setFeedbackList(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    // fetchFeedback();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    feedback: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/createFeedback`,
        formData
      );

      console.log("Feedback posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting feedback:", error);
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
                <label htmlFor="username">Name: </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">ID: </label>
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
                <label htmlFor="password">FeedBack: </label>
                <textarea
                  name="feedback"
                  className="form-control"
                  value={formData.feedback}
                  onChange={handleChange}
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default">
                Post your feedback
              </button>
            </form>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="feedback-section">
                    <h2>All Feedback</h2>
                    <ul className="list-group">
                      {feedbackList.map((feedback, index) => (
                        <li key={index} className="list-group-item">
                          <strong>Name:</strong> {feedback.name}
                          <br />
                          <strong>ID:</strong> {feedback.id}
                          <br />
                          <strong>Feedback:</strong> {feedback.feedback}
                          <br />
                          {/* Additional information as needed */}
                          <hr />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
