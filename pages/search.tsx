import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Questions } from "../services/questions/questions.http";

const search = () => {
  const [searchParams, setSearchParams] = useState([]);

  useEffect(() => {
    Questions.getQuestions()
      .then((res) => {
        console.log(res);
        setSearchParams(res.data.filter((el) => el.is_searchable));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(searchParams, "searchParams");

  return (
    <div className="">
      <Header />
      <div className="searchPage">
        <div className="search_sideBar">left</div>
        <div className="search_mainContent">bla haaa</div>
      </div>
      <Footer />
    </div>
  );
};

export default search;
