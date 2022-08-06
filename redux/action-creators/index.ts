import axios from "axios";
import { Dispatch } from "redux";
import { EActionTypes } from "../action-types";
import { TActions } from "../actions";
import Router from "next/router";
import { setAuthorizationToken } from "../../services/axios-with-token";

export const setCurrentUser = (user: any) => {
  // Router.push("/profile");
  debugger;
  window.localStorage.setItem("token", user.token);
  window.localStorage.setItem("user", JSON.stringify(user));
  setAuthorizationToken(user.token);
  return {
    type: EActionTypes.SET_USER_ACTION,
    payload: { user },
  };
};
