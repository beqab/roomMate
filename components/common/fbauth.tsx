import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";

// import { API_URL } from "../../services/api";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { setCurrentUser } from "../../redux/auth/authActions";

const FbLoginButton = () => {
  // constructor(props) {
  //   super(props);
  //   console.log(process.env.FB_APP_ID);
  // }
  const componentClicked = () => {
    console.log("componentClicked");
  };
  const responseFacebook = (res) => {
    console.log(res, "resss");
    const userData = {
      accessToken: res.accessToken,
      facebookId: res.userID,
      name: res.name,
      nickname: res.nickname,
      email: res.email,
      imageUrl: res.url,
    };
    // console.log(res, userData);
    axios
      .post("users/fbLogin", { userData })
      .then((res) => {
        console.log("aqedan daalogineb....", res);
      })
      .catch((err) => console.log(err));
  };

  // console.log(process.env.FB_APP_ID);
  return (
    <FacebookLogin
      // appId={581660732471800}
      appId={247405556767961}
      // autoLoad={true}
      isMobile={false}
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        // <a
        //   onClick={renderProps.onClick}
        //   className="btn__background facebook"
        //   href="#"
        // >
        //   <i className="fab fa-facebook-f  fa-icon" />
        //   <span>შესვლა</span>
        // </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            renderProps.onClick();
          }}
          className="facebook_auth_social"
        >
          <img src="/imgs/facebook.svg" alt="manqaneni ქირაონა" />
          auth
          {/* <span>{props.title ? this.props.title : "by Facebook"}</span> */}
        </a>
      )}
    />
  );
};

export default FbLoginButton;
