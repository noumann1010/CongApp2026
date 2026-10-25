import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>About VirusWatch</h1>
        <p>
          VirusWatch is a web application designed to help users track
          their symptoms and receive AI-powered insights about potential
          illnesses. Our goal is to provide users with accurate and timely
          information to help them make informed decisions about their health.
        </p>
      </div>

      <div className="about-box">
        <h2>Features</h2>
        <ul>
          <li>
            Symptom Tracking: Users can input their symptoms and receive
            information about potential illnesses.
          </li>
          <li>
            Notifications: Users receive information about respiratory illnesses in
            the United States.
          </li>
          <li>
            AI-Powered Insights: Our AI algorithms analyze user input to
            provide personalized health information.
          </li>
          <li>
            Duration Tracking: Users can specify how long they have been
            experiencing symptoms.
          </li>
          <li>
            Additional Details: Users can provide extra information about
            their symptoms for more accurate insights.
          </li>
          <li>
            Results: Users receive a summary of potential illnesses and
            general care information based on their input.
          </li>
        </ul>
      </div>

      <div className="about-box">
        <h2>Disclaimer</h2>
        <p>
          The information provided by VirusWatch is for educational purposes
          only and is not a substitute for professional medical advice,
          diagnosis, or treatment. Always seek the advice of your physician
          or other qualified health provider with any questions you may have
          regarding a medical condition.
        </p>
      </div>
    </div>
  );
}

export default About;