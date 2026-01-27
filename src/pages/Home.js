import Base from "../components/Base";

const Home = () => {
  return (
    <Base title="Home">
      <div className="container mt-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold">
              Rent Smarter with <span className="text-primary">RentFlex</span>
            </h1>
            <p className="lead text-secondary mt-3">
              A modern multi-vendor rental platform for easy booking, inventory
              management, and secure transactions.
            </p>

            <div className="mt-4">
              <a href="/login" className="btn btn-primary me-3">
                Get Started
              </a>
              <a href="/about" className="btn btn-outline-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div className="card shadow border-0">
              <div className="card-body">
                <h3 className="mb-3">🚀 Platform Highlights</h3>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">✔ Multi-vendor support</li>
                  <li className="list-group-item">✔ Secure authentication</li>
                  <li className="list-group-item">✔ Scalable microservices</li>
                  <li className="list-group-item">✔ Easy booking system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row text-center mb-5">
          <h2 className="fw-bold mb-4">Why Choose RentFlex?</h2>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2>👤</h2>
                <h5 className="card-title">For Users</h5>
                <p className="card-text">
                  Find rental items quickly, compare prices, and book in just a
                  few clicks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2>🏪</h2>
                <h5 className="card-title">For Vendors</h5>
                <p className="card-text">
                  Manage inventory, track bookings, and grow your rental
                  business easily.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2>🔐</h2>
                <h5 className="card-title">Secure & Reliable</h5>
                <p className="card-text">
                  Built with modern security standards and scalable
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="text-center">
          <p className="text-muted">
            🚧 Work in progress — powerful features coming soon.
          </p>
        </div>
      </div>
    </Base>
  );
};

export default Home;
