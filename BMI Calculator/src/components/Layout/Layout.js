import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
