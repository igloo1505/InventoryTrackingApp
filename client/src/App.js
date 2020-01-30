import React, { useEffect, Fragment, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
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
        <AddLogModal />
        <AddEmpModal />
        <TechListModal />
        <EditLogModal />
        <AdminBtn style={{ marginRight: "80px" }} />
        <AddBtn />
        {loggedIn ? <Logs /> : <Login />}
      </div>
    </Fragment>
  );
};

export default App;
