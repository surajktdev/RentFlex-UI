import React from "react";
import Base from "../../components/Base";
import { NavLink as ReactLink } from "react-router-dom";

const UserDashboard = () => {
  return (
    <Base title="User Dashboard">
      <div className="container mt-4">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold">Welcome Back 👋</h2>
            <p className="text-muted">
              Manage your rentals, bookings, and account settings
            </p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="row g-4">
          {/* My Bookings */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <div className="fs-1 mb-2">📦</div>
                <h5 className="card-title">My Bookings</h5>
                <p className="text-muted small">
                  View and manage your current and past bookings
                </p>
                <button className="btn btn-outline-dark btn-sm">
                  View Bookings
                </button>
              </div>
            </div>
          </div>

          {/* Browse Rentals */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <div className="fs-1 mb-2">🛒</div>
                <h5 className="card-title">Browse Rentals</h5>
                <p className="text-muted small">
                  Explore available items for rent
                </p>
                <button className="btn btn-outline-dark btn-sm">
                  Browse Items
                </button>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <div className="fs-1 mb-2">👤</div>
                <h5 className="card-title">Profile</h5>
                <p className="text-muted small">
                  View and update your account details
                </p>
                <ReactLink
                  to="/user/profile"
                  className="btn btn-outline-dark btn-sm"
                >
                  View Profile
                </ReactLink>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="row mt-5">
          <div className="col text-center">
            <div className="alert alert-light shadow-sm border-0">
              <strong>Tip:</strong> Keep your profile updated for a smoother
              rental experience.
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default UserDashboard;
