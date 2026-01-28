import React, { useEffect, useState } from "react";
import { getCurrentUserDetails } from "../../auth/index";
import Base from "../../components/Base";

const ProfileInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDetails = getCurrentUserDetails();
    setUser(userDetails);
  }, []);

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h5 className="text-secondary">No user data available</h5>
      </div>
    );
  }

  return (
    <Base>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="card shadow border-0 rounded-4">
              {/* Header */}
              <div className="card-header bg-dark text-white text-center py-4 rounded-top-4">
                <div className="mb-2">
                  <div
                    className="rounded-circle bg-light text-dark d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px", fontSize: "32px" }}
                  >
                    {user.userResponse.userName.charAt(0)}
                  </div>
                </div>
                <h4 className="mb-0">{user.userResponse.userName}</h4>
                <small className="text-light">{user.userResponse.email}</small>
              </div>

              {/* Body */}
              <div className="card-body px-4 py-4">
                <div className="row mb-3">
                  <div className="col-6 text-muted">Role</div>
                  <div className="col-6 fw-semibold text-end">
                    {user.userResponse.role}
                  </div>
                </div>

                <hr />

                <div className="row mb-3">
                  <div className="col-6 text-muted">Account Status</div>
                  <div className="col-6 text-end">
                    <span
                      className={`badge ${
                        user.userResponse.status === "ACTIVE"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {user.userResponse.status}
                    </span>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-6 text-muted">User ID</div>
                  <div className="col-6 fw-semibold text-end">
                    #{user.userResponse.id}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="card-footer bg-light text-center py-3">
                <button className="btn btn-outline-dark btn-sm">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ProfileInfo;
