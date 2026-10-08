function Favorites() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p>Your Cities</p>
          <h1>Favorite Locations ⭐</h1>
        </div>
      </div>

      <div className="favorites-grid">

        <div className="favorite-card">
          <div>
            <h3>Chennai</h3>
            <p>India</p>
          </div>

          <div>
            <span>☀️</span>
            <strong>30°C</strong>
          </div>
        </div>

        <div className="favorite-card">
          <div>
            <h3>Bangalore</h3>
            <p>India</p>
          </div>

          <div>
            <span>🌤️</span>
            <strong>27°C</strong>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Favorites;