import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action-creators";

const useCheckUnauthRespnse = ({ msg }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (msg === "Unauthorized") {
      dispatch(logout());
      // router.push("/login");
      window.location.replace("/login");
    }
  }, [msg]);
};

export default useCheckUnauthRespnse;
