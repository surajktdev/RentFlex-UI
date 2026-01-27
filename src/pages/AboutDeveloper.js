import Base from "../components/Base";

const AboutDeveloper = () => {
  return (
    <Base title="About Developer">
      <div className="container mt-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About the Developer</h1>
          <p className="text-secondary">The person behind RentFlex</p>
        </div>

        {/* Card */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow border-0">
              <div className="card-body p-4 text-center">
                {/* Avatar */}
                <div className="mb-3">
                  <span style={{ fontSize: "64px" }}>👨‍💻</span>
                </div>

                <h4 className="fw-bold">Suraj Tiwari</h4>
                <p className="text-muted mb-3">Java Backend Developer</p>

                <p>
                  I am a backend-focused software developer with experience in
                  building scalable applications using Java and Spring Boot.
                  RentFlex is a personal full-stack project created to apply
                  microservices architecture, security best practices, and
                  modern system design concepts.
                </p>

                <p className="text-secondary">
                  This project reflects my learning journey in backend
                  engineering, cloud-native development, and scalable systems.
                </p>

                {/* Tech Stack */}
                <div className="mt-4">
                  <span className="badge bg-primary me-2">Java</span>
                  <span className="badge bg-success me-2">Spring Boot</span>
                  <span className="badge bg-warning text-dark me-2">
                    Microservices
                  </span>
                  <span className="badge bg-info text-dark me-2">React</span>
                  <span className="badge bg-dark">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AboutDeveloper;
