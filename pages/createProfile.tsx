import React from "react";
import CreateProfileWrapper from "../components/createProfile";
import Header from "../components/Header";

function createProfile(props) {
  return (
    <div>
      <div className="headerWrapper">
        <Header />
      </div>
      <div className="createProfile d-flex align-items-center justify-content-center">
        <CreateProfileWrapper />
      </div>
    </div>
  );
}

export default createProfile;
