import React, { useContext, useEffect, useState } from "react";
import { IQuestions } from "../../../../services/questions/questions.http";
import classnames from "classnames";
import { SearchContext } from "../context/searchContext";

interface IProps {
  data: IQuestions;
  setValue?: (val: any) => void;
}

const Choice: React.FC<IProps> = ({ data }) => {
  // const [openSelect, setOpenSelect] = useState<boolean | number>(false);
  const {
    openSearchItemId,
    setOpenSearchItemId,
    setSearchObject,
    searchObject,
  } = useContext(SearchContext);
  useEffect(() => {
    let remove = () => {
      // debugger;
      setOpenSearchItemId(null);
    };

    window.addEventListener("click", remove);

    return () => {
      window.removeEventListener("click", remove);
    };
  }, []);

  const isChecked = ({
    id,
    question_id,
  }: {
    id: number;
    question_id: number;
  }) => {
    if (searchObject && searchObject[question_id]) {
      let answers = searchObject[data.id];
      if (answers.find((el) => el === id)) {
        return true;
      }
      // console.log(answers, "answersanswers");
    }
    return false;
  };

  console.log(searchObject, "searchObjectsearchObjectsearchObject");

  return (
    <div
      key={data.id}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="search_item search_item-choice"
    >
      <label>{data.searchable_title}</label>
      <div
        onClick={() => {
          if (openSearchItemId === data.id) {
            setOpenSearchItemId(null);
          } else {
            setOpenSearchItemId(data.id);
          }
        }}
        className="selectBtn"
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>არჩევა</span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6909 0.377512C12.5004 0.204384 12.2095 0.204227 12.0188 0.377148L7.33585 4.62308C7.14528 4.79587 6.85472 4.79587 6.66415 4.62308L1.98121 0.377148C1.79049 0.204227 1.49965 0.204385 1.30912 0.377514L0.407246 1.19701C0.188912 1.3954 0.188912 1.73871 0.407246 1.93711L6.66375 7.62215C6.85443 7.79542 7.14557 7.79542 7.33625 7.62215L13.5928 1.93711C13.8111 1.73871 13.8111 1.3954 13.5928 1.19701L12.6909 0.377512Z"
              fill="#7D7D7D"
            />
          </svg>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={classnames("optionsWrapper", {
            ["d-block"]: openSearchItemId === data.id,
            ["d-none"]: openSearchItemId !== data.id,
          })}
        >
          {data.answers.map((el) => {
            return (
              <div key={el.id}>
                <label className="">
                  <input
                    onChange={() =>
                      setSearchObject({ ...el, is_multiple: data.is_multiple })
                    }
                    checked={isChecked(el)}
                    type="checkbox"
                  />
                  {el.title}{" "}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {data.answers.map((el) => {
        if (searchObject[el.question_id]) {
          if (searchObject[el.question_id].find((it) => it === el.id)) {
            return (
              <div
                onClick={() => {
                  setSearchObject({ ...el, is_multiple: data.is_multiple });
                }}
              >
                {" "}
                {el.title}{" "}
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default Choice;
