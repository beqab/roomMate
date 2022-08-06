import React, { useState } from "react";
import { registerQuestions } from "./data";
import CreateProfileContent from "./createProfileContent";

function CreateProfileWrapper(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const modalNavigate = (type: "prev" | "next") => {
    if (type === "prev") {
      if (currentQuestion === 0) return;
      setCurrentQuestion(currentQuestion - 1);
    }
    if (type === "next") {
      if (currentQuestion === registerQuestions.length - 1) return;
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="createProfile_wrapper">
      <div className="createProfile_contentContainer">
        <CreateProfileContent data={registerQuestions[currentQuestion]} />
      </div>
      <div className="createProfile_controllerWrapper d-flex justify-content-between">
        <div onClick={() => modalNavigate("prev")} className="left_button">
          <svg
            className="pr-3"
            width="30"
            height="15"
            viewBox="0 0 30 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.26023 14.5175C9.63673 14.8028 10.1571 14.8028 10.5336 14.5175C11.0899 14.0959 11.0903 13.2598 10.5343 12.8378L4.73815 8.4375L29.0625 8.4375C29.5803 8.4375 30 8.01777 30 7.5C30 6.98223 29.5803 6.5625 29.0625 6.5625L4.73815 6.5625L10.5343 2.16223C11.0903 1.74017 11.0899 0.904063 10.5336 0.482482C10.1571 0.197164 9.63673 0.197163 9.26023 0.482481L1.05172 6.703C0.523685 7.10315 0.523685 7.89686 1.05171 8.297L9.26023 14.5175Z"
              fill="white"
            />
          </svg>
          <span className="d-inline-block m-2"> წინა</span>
        </div>{" "}
        <div onClick={() => modalNavigate("next")} className={"right_button"}>
          <span className="d-inline-block m-2">შემდეგი</span>
          <svg
            className="ml-3"
            width="30"
            height="15"
            viewBox="0 0 30 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7398 0.48248C20.3633 0.197163 19.8429 0.197162 19.4664 0.48248C18.9101 0.904061 18.9097 1.74016 19.4657 2.16222L25.2619 6.5625H0.9375C0.419733 6.5625 0 6.98223 0 7.5C0 8.01777 0.419733 8.4375 0.9375 8.4375H25.2619L19.4657 12.8378C18.9097 13.2598 18.9101 14.0959 19.4664 14.5175C19.8429 14.8028 20.3633 14.8028 20.7398 14.5175L28.9483 8.297C29.4763 7.89685 29.4763 7.10315 28.9483 6.703L20.7398 0.48248Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CreateProfileWrapper;
