function Home() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p>Dashboard</p>
          <h1>Today's Weather</h1>
        </div>

        <button className="primary-button">
          📍 My Location
        </button>
      </div>

      <div className="home-grid">

        <div className="main-weather-card">

          <div className="weather-location">
            📍 Chennai, India
          </div>

          <div className="weather-display">

            <span className="home-weather-icon">
              ☀️
            </span>

            <div>
              <h1>30°</h1>
              <p>Sunny</p>
            </div>

          </div>

          <p className="feels-like">
            Feels like 33°C
          </p>

        </div>

        <div className="summary-card">

          <h3>Today's Summary</h3>

          <div className="summary-item">
            <span>💧 Humidity</span>
            <strong>65%</strong>
          </div>

          <div className="summary-item">
            <span>💨 Wind</span>
            <strong>12 km/h</strong>
          </div>

          <div className="summary-item">
            <span>👁️ Visibility</span>
            <strong>10 km</strong>
          </div>

          <div className="summary-item">
            <span>🌡️ Pressure</span>
            <strong>1012 hPa</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;