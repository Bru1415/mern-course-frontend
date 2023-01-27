import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsVis, setDrawerVis] = useState(false);

  const showDrawer = () => {
    setDrawerVis((prevState) => {
      return !prevState;
    });
  };

  const handleClickCloseDrawer = () => {
    setDrawerVis(false);
  };
  return (
    <React.Fragment>
      {drawerIsVis && <Backdrop onClick={handleClickCloseDrawer} />}
      <SideDrawer show={drawerIsVis}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks onClick={handleClickCloseDrawer} />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={`main-navigation__menu-btn ${
            drawerIsVis && "drawer-is-vis"
          }`}
          onClick={showDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
