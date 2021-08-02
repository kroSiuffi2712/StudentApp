import React from "react";
import { Route } from "react-router-dom";

import StudentComponent from "../components/Students/Student";
import StudentDetails from "../components/Students/StudentDetails";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={StudentComponent} />
      <Route exact path="/student/:id" component={StudentDetails} />
    </div>
  );
};
export default Router;