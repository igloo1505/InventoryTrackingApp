import React, { useEffect, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Admin from "./layout/admin/pages/Admin";
import Home from "./pages/Home";
import AddLogModal from "./layout/modals/AddLogModal";
import EditLogModal from "./layout/modals/EditLogModal";
import AddEmpModal from "./layout/admin/AddEmpModal";
import TechListModal from "./layout/admin/TechListModal";
import M from "materialize-css/dist/js/materialize.min.js";
import AdminBtn from "./layout/admin/AdminBtn";
import AddBtn from "./layout/AddBtn";
import SearchBar from "./layout/SearchBar";
import Login from "./pages/Login";
import Logs from "./logs/Logs";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Router>
          <AddLogModal />
          <AddEmpModal />
          <TechListModal />
          <EditLogModal />
          <AdminBtn />
          <AddBtn />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
