const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5">
      <div className="container">
        {/* Top Section */}
        <div className="row text-center text-md-start align-items-start">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold d-flex align-items-center justify-content-center justify-content-md-start">
              🚀 RentFlex
            </h5>
            <p className="text-secondary mt-2">
              A modern multi-vendor rental platform designed for seamless
              booking and scalable management.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-light">Explore</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/login" className="footer-link">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-light">Get in Touch</h6>
            <p className="text-secondary mt-3 mb-1">📧 support@rentflex.com</p>
            <p className="text-secondary">📍 India</p>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
          <small className="text-secondary">
            © {new Date().getFullYear()} RentFlex. All rights reserved.
          </small>

          <small className="text-secondary mt-2 mt-md-0">
            Built with ❤️ using Spring Boot & React
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
