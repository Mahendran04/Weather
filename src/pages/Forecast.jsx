function Forecast() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p>Weather</p>
          <h1>5-Day Forecast</h1>
        </div>
      </div>

      <div className="forecast-page-grid">

        {[
          ["Mon", "☀️", "30°", "Sunny"],
          ["Tue", "🌤️", "31°", "Partly Cloudy"],
          ["Wed", "🌧️", "28°", "Rain"],
          ["Thu", "☁️", "29°", "Cloudy"],
          ["Fri", "☀️", "32°", "Sunny"],
        ].map((day) => (

          <div className="forecast-page-card" key={day[0]}>

            <h3>{day[0]}</h3>

            <span>{day[1]}</span>

            <h2>{day[2]}</h2>

            <p>{day[3]}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Forecast;