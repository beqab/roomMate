import React from "react";
import PropTypes from "prop-types";
import { useCheckAuth } from "../components/hooks/useCheckAuth";

function Profile(props) {
  useCheckAuth();
  return <div>Profile</div>;
}

export default Profile;
