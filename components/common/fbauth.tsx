import logo from "./logo.svg";
import FacebookAuth from "react-facebook-auth";
// import "./App.css";
import axios from "axios";

const btnStyles = {
  backgroundColor: "#008CBA",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
};

const MyFacebookButton = ({ onClick, styles }) => (
  <button onClick={onClick} style={styles}>
    Login with facebook
  </button>
);

const authenticate = (response) => {
  console.log(response);
  axios
    .post("http://localhost:3000/social/facebook/login", {
      facebookId: response.id,
      accessToken: response.accessToken,
    })
    .then((res) => {
      console.log(res, "247405556767961247405556767961");
    });
};

const App = () => (
  <div>
    <h1>Facebook Auth</h1>
    <FacebookAuth
      appId="247405556767961"
      callback={authenticate}
      scope="public_profile, email"
      fields="id"
      component={MyFacebookButton}
      customProps={{ styles: btnStyles }}
    />
  </div>
);

export default App;
