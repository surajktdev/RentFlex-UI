import { Link as ReactLink } from "react-router-dom";

const Footer = () => {

return (
  <footer className="mt-5">

    {/* Highlight Strip */}
    <div className="bg-primary text-white text-center py-3">
      <strong>RentFlex</strong> — Smart rentals made simple
    </div>

    {/* Main Footer */}
    <div className="bg-dark text-light py-5">
      <div className="container">

        <div className="row gy-4">

          {/* About */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">🚀 RentFlex</h5>
            <p className="text-secondary small">
              RentFlex is a scalable multi-vendor rental platform built to
              simplify bookings, manage inventory, and grow your rental business.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Navigation</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <ReactLink to="/" className="text-secondary text-decoration-none footer-link">
                  Home
                </ReactLink>
              </li>
              <li className="mb-2">
                <ReactLink to="/about" className="text-secondary text-decoration-none footer-link">
                  About
                </ReactLink>
              </li>
              <li className="mb-2">
                <ReactLink to="/login" className="text-secondary text-decoration-none footer-link">
                  Login
                </ReactLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Support</h6>
            <p className="text-secondary small mb-2">
              📧 support@rentflex.com
            </p>
            <p className="text-secondary small mb-0">
              📍 India
            </p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small className="text-secondary">
            © {new Date().getFullYear()} RentFlex. All rights reserved.
          </small>

          <small className="text-secondary mt-2 mt-md-0">
            Built with ❤️ using Spring Boot & React
          </small>
        </div>

      </div>
    </div>
  </footer>
);

};

export default Footer;
