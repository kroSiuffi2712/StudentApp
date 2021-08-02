import React from "react";

import "../../styles/loader.css";

function LoadingPage() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="spinner-1">
        <div
          className="spinner-grow spinner-grow-sm mb-5 mt-5 mr-2 "
          role="status"
        ></div>
      </div>
      <div className="spinner-2">
        <div
          className="spinner-grow spinner-grow-sm mb-5 mt-5 mr-2 "
          role="status"
        ></div>
      </div>
      <div className="spinner-3">
        <div
          className="spinner-grow spinner-grow-sm mb-5 mt-5 mr-2 "
          role="status"
        ></div>
      </div>
      <div className="spinner-4">
        <div
          className="spinner-grow spinner-grow-sm mb-5 mt-5 mr-2 "
          role="status"
        ></div>
      </div>
    </div>
  );
}
export default LoadingPage;