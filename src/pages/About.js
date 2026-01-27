import Base from "../components/Base";

const About = () => {
  return (
    <Base title="About Us">
      <div className="container mt-5">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About RentFlex</h1>
          <p className="lead text-secondary">
            A modern multi-vendor rental platform built for scale
          </p>
        </div>

        {/* Info Cards */}
        <div className="row text-center mb-5">
          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>🏠</h3>
                <h5 className="card-title">What We Do</h5>
                <p className="card-text">
                  RentFlex connects users and vendors on a single platform to
                  simplify rental bookings and inventory management.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>⚙️</h3>
                <h5 className="card-title">How It Works</h5>
                <p className="card-text">
                  Built with Spring Boot microservices and React, ensuring
                  flexibility, security, and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>🚀</h3>
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">
                  To become a scalable rental ecosystem that supports users and
                  vendors with modern technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-3">Why RentFlex?</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">✔ Easy rental booking</li>
                  <li className="list-group-item">
                    ✔ Vendor-friendly inventory management
                  </li>
                  <li className="list-group-item">
                    ✔ Secure authentication & authorization
                  </li>
                  <li className="list-group-item">
                    ✔ Scalable microservices architecture
                  </li>
                </ul>

                <p className="mt-4 text-muted">
                  🔧 RentFlex is an evolving project, continuously improving
                  with new features and optimizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;
