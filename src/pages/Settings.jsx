import { useState } from "react";

function Settings() {

  const [temperature, setTemperature] = useState("celsius");
  const [windSpeed, setWindSpeed] = useState("kmh");
  const [notifications, setNotifications] = useState(true);
  const [autoLocation, setAutoLocation] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="page">

      {/* Page Header */}
      <div className="page-header">

        <div>
          <p>Preferences</p>
          <h1>Settings ⚙️</h1>
        </div>

      </div>


      {/* General Settings */}
      <div className="settings-section">

        <div className="settings-title">
          <h2>General</h2>
          <p>Customize your Weatherly experience</p>
        </div>


        {/* Temperature */}
        <div className="setting-row">

          <div className="setting-info">

            <div className="setting-icon">
              🌡️
            </div>

            <div>
              <h3>Temperature Unit</h3>

              <p>
                Choose how temperature is displayed
              </p>
            </div>

          </div>


          <select
            value={temperature}
            onChange={(e) =>
              setTemperature(e.target.value)
            }
          >

            <option value="celsius">
              °C Celsius
            </option>

            <option value="fahrenheit">
              °F Fahrenheit
            </option>

          </select>

        </div>


        {/* Wind Speed */}
        <div className="setting-row">

          <div className="setting-info">

            <div className="setting-icon">
              💨
            </div>

            <div>

              <h3>Wind Speed</h3>

              <p>
                Select your preferred wind speed unit
              </p>

            </div>

          </div>


          <select
            value={windSpeed}
            onChange={(e) =>
              setWindSpeed(e.target.value)
            }
          >

            <option value="kmh">
              km/h
            </option>

            <option value="ms">
              m/s
            </option>

            <option value="mph">
              mph
            </option>

          </select>

        </div>

      </div>


      {/* Application Settings */}
      <div className="settings-section">

        <div className="settings-title">

          <h2>Application</h2>

          <p>
            Manage application preferences
          </p>

        </div>


        {/* Notifications */}
        <div className="setting-row">

          <div className="setting-info">

            <div className="setting-icon">
              🔔
            </div>

            <div>

              <h3>Weather Notifications</h3>

              <p>
                Receive important weather alerts
              </p>

            </div>

          </div>


          <label className="switch">

            <input
              type="checkbox"
              checked={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
            />

            <span className="slider"></span>

          </label>

        </div>


        {/* Auto Location */}
        <div className="setting-row">

          <div className="setting-info">

            <div className="setting-icon">
              📍
            </div>

            <div>

              <h3>Automatic Location</h3>

              <p>
                Automatically detect your location
              </p>

            </div>

          </div>


          <label className="switch">

            <input
              type="checkbox"
              checked={autoLocation}
              onChange={() =>
                setAutoLocation(!autoLocation)
              }
            />

            <span className="slider"></span>

          </label>

        </div>


        {/* Dark Mode */}
        <div className="setting-row">

          <div className="setting-info">

            <div className="setting-icon">
              {darkMode ? "🌙" : "☀️"}
            </div>

            <div>

              <h3>Dark Mode</h3>

              <p>
                Use dark theme throughout the application
              </p>

            </div>

          </div>


          <label className="switch">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() =>
                setDarkMode(!darkMode)
              }
            />

            <span className="slider"></span>

          </label>

        </div>

      </div>


      {/* About */}
      <div className="settings-section">

        <div className="settings-title">

          <h2>About</h2>

          <p>
            Weatherly application information
          </p>

        </div>


        <div className="app-info">

          <div className="app-logo">
            🌤️
          </div>

          <div>

            <h3>Weatherly</h3>

            <p>
              Modern weather dashboard built with React
            </p>

            <span>
              Version 1.0.0
            </span>

          </div>

        </div>

      </div>


      {/* Save Button */}
      <div className="settings-actions">

        <button
          className="reset-button"
          onClick={() => {
            setTemperature("celsius");
            setWindSpeed("kmh");
            setNotifications(true);
            setAutoLocation(true);
            setDarkMode(true);
          }}
        >
          Reset
        </button>


        <button className="save-button">
          ✓ Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;