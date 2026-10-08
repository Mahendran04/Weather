function About() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p>Information</p>
          <h1>About Weatherly</h1>
        </div>
      </div>

      <div className="about-card">

        <div className="about-logo">
          🌤️
        </div>

        <h1>Weatherly</h1>

        <p>
          Weatherly is a modern weather dashboard built
          with React.js. It provides current weather,
          hourly forecasts and future weather information
          through a clean and responsive interface.
        </p>

        <div className="tech-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>Weather API</span>
        </div>

      </div>

    </div>
  );
}

export default About;