import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      {/* <h1 className="text-center mt-3 mb-3">{title}</h1> */}
      {children}
      <Footer />
    </div>
  );
};

export default Base;
