import React from "react";
import PropTypes from "prop-types";
import { useCheckAuth } from "../components/hooks/useCheckAuth";
import { useDispatch, useSelector } from "react-redux";

function Profile(props) {
  useCheckAuth();
  const state = useSelector((state: any) => state);
  console.log(state, "statestate");

  return <div>Profile: {state?.profile?.user?.firstname}</div>;
}

export default Profile;
