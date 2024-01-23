import React from 'react';

function AboutPage(props) {
  return (
    <div className="container mt-5 text-light mb-5">
      <div className="row mt-5"> 
        <div className="col-lg-8 offset-lg-2 mt-5">
          <h1 className="text-center mb-4">About Weather App</h1>

          <p className="lead text-center">
            Welcome to the Weather App, your reliable source for up-to-date weather information.
          </p>

          <div className="card bg-dark mt-4 text-light">
            <div className="card-body">
              <h2 className="card-title">App Description</h2>
              <p className="card-text">
                The Weather App is a user-friendly application designed to deliver real-time weather updates for any city around the world. Stay informed about temperature, humidity, and wind conditions to make better-informed decisions based on the weather.
              </p>
            </div>
          </div>

          <div className="card bg-dark mt-4 text-light">
            <div className="card-body">
              <h2 className="card-title">Development Team</h2>
              <p className="card-text">
                The Weather App was developed by Suhrad Trambadiya. Our team is passionate about creating innovative solutions to make your daily life easier. We have expertise in [relevant skills and technologies].
              </p>
            </div>
          </div>

          {/* Repeat similar structure for other sections like Motivation, Data Source, Technologies Used, etc. */}

          <div className="card bg-dark mt-4 text-light">
            <div className="card-body">
              <h2 className="card-title">Contact Information</h2>
              <p className="card-text">
                For any inquiries, feedback, or support, feel free to contact us at <a href="mailto:your@email.com" className="text-light">your@email.com</a>. We value your input and are here to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
