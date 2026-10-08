function Hourly() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p>Weather</p>
          <h1>Hourly Forecast</h1>
        </div>
      </div>

      <div className="hourly-page">

        {[
          ["Now", "☀️", "30°"],
          ["2 PM", "☀️", "31°"],
          ["3 PM", "🌤️", "31°"],
          ["4 PM", "🌤️", "30°"],
          ["5 PM", "☁️", "29°"],
          ["6 PM", "🌧️", "28°"],
          ["7 PM", "🌧️", "27°"],
          ["8 PM", "☁️", "27°"],
        ].map((hour) => (

          <div className="hourly-page-card" key={hour[0]}>

            <p>{hour[0]}</p>

            <span>{hour[1]}</span>

            <h3>{hour[2]}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Hourly;