import CustomNavbar from "./CustomNavbar";

const Base = ({title ="Welcome to our website", children}) => {
    return (
        <div className="container-fluid p-0 m-0">
            <CustomNavbar />
            {/* <h1 className="text-center mt-3 mb-3">{title}</h1> */}
            {children}
        </div>


    );
};

export default Base;