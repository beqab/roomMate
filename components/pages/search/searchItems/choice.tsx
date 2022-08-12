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
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="search_item search_item-choice"
    >
      <label>{data.searchable_title}</label>
      <div
        onClick={() => {
          setOpenSearchItemId(data.id);
        }}
        className="selectBtn"
      >
        არჩევა
        <div
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
