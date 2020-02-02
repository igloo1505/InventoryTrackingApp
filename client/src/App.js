import React, { useEffect, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./layout/admin/pages/Admin";
import Home from "./pages/Home";
import AddLogModal from "./layout/modals/AddLogModal";
import EditLogModal from "./layout/modals/EditLogModal";
import DetailLogModal from "./layout/modals/ItemDetailModal";
import AddEmpModal from "./layout/admin/AddEmpModal";
import TechListModal from "./layout/admin/TechListModal";
import SaleModal from "./layout/modals/SaleModal";
import M from "materialize-css/dist/js/materialize.min.js";
import AdminBtn from "./layout/admin/AdminBtn";
import AddBtn from "./layout/AddBtn";
import SearchBar from "./layout/SearchBar";

import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Router>
            <AddLogModal />
            <AddEmpModal />
            <DetailLogModal />
            <TechListModal />
            <EditLogModal />
            <SaleModal />
            <AdminBtn />
            <AddBtn />
            <Switch>
              <Route exact path="/" component={Home} loggedIn={loggedIn} />
              <Route exact path="/admin" component={Admin} />
            </Switch>
          </Router>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
