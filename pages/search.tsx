import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Questions, IQuestions } from "../services/questions/questions.http";
import { ProfileService } from "../services/profile/profile.http";
import { useCheckAuth } from "../components/hooks/useCheckAuth";
import Choice from "../components/pages/search/searchItems/choice";
import { SearchProvider } from "../components/pages/search/context/searchContext";

const Search = () => {
  useCheckAuth();
  const [searchParams, setSearchParams] = useState<IQuestions[]>([]);

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

  useEffect(() => {
    ProfileService.search({})
      .then((res) => {
        // debugger;
      })
      .catch((err) => {
        // debugger;
      });
  }, []);

  console.log(searchParams, "searchParams");

  return (
    <div className="">
      <Header />
      <SearchProvider>
        <div className="searchPage">
          <div className="search_sideBar">
            {/* left */}
            {/* <SelectCommon
            type={"search"}
            filterHeaderHideHandler={() => {
              console.log("");
            }}
            selectClose="dsf"
            setValue={(val) => {
              console.log(val);
            }}
            value="fsf"
          /> */}
            {searchParams.map((el) => {
              if (el.type === "choice") {
                return <Choice key={el.id} data={el} />;
              }
            })}
          </div>
          <div className="search_mainContent">bla haaa</div>
        </div>
      </SearchProvider>
      <Footer />
    </div>
  );
};

export default Search;
