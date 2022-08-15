import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Questions, IQuestions } from "../services/questions/questions.http";
import { ProfileService, ISearchItems } from "../services/profile/profile.http";
import { useCheckAuth } from "../components/hooks/useCheckAuth";
import Choice from "../components/pages/search/searchItems/choice";
import { SearchProvider } from "../components/pages/search/context/searchContext";
import { SearchContext } from "../components/pages/search/context/searchContext";
import Link from "next/link";
import ProfileCard from "../components/pages/profile/profileCard";

const Search = () => {
  useCheckAuth();
  const [searchParams, setSearchParams] = useState<IQuestions[]>([]);
  const [searchResults, setSearchResults] = useState<ISearchItems[]>([]);

  const { searchObject } = useContext(SearchContext);

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
        setSearchResults(res.data.data);
      })
      .catch((err) => {
        // debugger;
      });
  }, []);

  console.log(searchParams, "searchParams");

  const searchHandler = () => {
    console.log(searchObject, "searchObject");

    ProfileService.search({ filters: searchObject })
      .then((res) => {
        // debugger;
        setSearchResults(res.data.data);
      })
      .catch((err) => {
        // debugger;
      });
  };

  const updateAddRemove = (id: number, saveId: boolean) => {
    const updatedSearchResults = searchResults.map((el) => {
      if (!saveId && el.id === id) {
        return { ...el, isSaved: true };
      }
      if (saveId && el.id === id) {
        return { ...el, isSaved: false };
      }
      return { ...el };
    });

    setSearchResults(updatedSearchResults);
  };

  return (
    <div className="">
      <Header />
      {/* <SearchProvider> */}
      <div className="searchPage">
        <div className="container d-flex pt-5">
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
            <div className="searchBtnWrapper">
              <button
                onClick={searchHandler}
                className="btn btn-primary w-100 text-center"
              >
                <svg
                  className="mr-3"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2688 15.1976L13.9582 11.8876C13.8088 11.7382 13.6062 11.6552 13.3937 11.6552H12.8525C13.7689 10.4832 14.3135 9.00913 14.3135 7.40558C14.3135 3.59091 11.2221 0.5 7.40676 0.5C3.59144 0.5 0.5 3.59091 0.5 7.40558C0.5 11.2202 3.59144 14.3112 7.40676 14.3112C9.01058 14.3112 10.4849 13.7667 11.6571 12.8504V13.3915C11.6571 13.604 11.7401 13.8065 11.8895 13.9559L15.2001 17.2659C15.5122 17.578 16.017 17.578 16.3258 17.2659L17.2655 16.3264C17.5776 16.0143 17.5776 15.5097 17.2688 15.1976ZM7.40676 11.6552C5.05912 11.6552 3.15644 9.75613 3.15644 7.40558C3.15644 5.05834 5.0558 3.15599 7.40676 3.15599C9.75439 3.15599 11.6571 5.05502 11.6571 7.40558C11.6571 9.75281 9.75771 11.6552 7.40676 11.6552Z"
                    fill="white"
                  />
                </svg>
                გაგზავნა
              </button>
            </div>
          </div>
          <div className="search_mainContent">
            {searchResults.length &&
              searchResults.map((el) => {
                return (
                  <ProfileCard
                    key={el.id}
                    {...el}
                    updateAddRemove={updateAddRemove}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {/* </SearchProvider> */}
      <Footer />
    </div>
  );
};

export default Search;
